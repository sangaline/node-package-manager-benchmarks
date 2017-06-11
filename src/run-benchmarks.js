const execSync = require('child_process').execSync;
const filesize = require('filesize');
const fs = require('fs-extra');
const millisec = require('millisec');
const nunjucks = require('nunjucks');
const path = require('path');

// global settings
const defaultRepititions = 1;
const repititions = process.argv.length === 3 ? parseInt(process.argv[2]) : defaultRepititions;
const baseDirectory = path.join(__dirname, '..');
const binPrefix = path.join(baseDirectory, 'node_modules', '.bin');
const cacheDirectory = path.join(baseDirectory, 'cache');
const packageManagers = ['npm', 'yarn', 'pnpm'];

// the main program execution
main();

function main() {
  const projectBenchmarks = computeProjectBenchmarks();
  updateTemplates({ repititions, projectBenchmarks });
}

function computeProjectBenchmarks() {
  return getProjects().map(project => {
    // tally the sums of the timings
    const timeTotals = {};
    const sizeTotals = {};
    const values = [false, true];
    packageManagers.forEach(packageManager => {
      for (let i = 0; i < repititions; i++) {
        removeNodeModules(project);
        values.forEach(nodeModules => {
          removeShrinkwrap(project);
          values.forEach(shrinkwrap => {
            removeCache();
            values.forEach(cache => {
              const key = [packageManager, nodeModules, shrinkwrap, cache];
              if (i === 0) {
                timeTotals[key] = 0;
                sizeTotals[key] = 0;
              }
              timeTotals[key] += installDependencies(project, packageManager);
              sizeTotals[key] += getNodeModulesSize(project);
              if (i === 0) console.log(timeTotals[key]);
              console.log(key);
            });
          });
        });
      }
    });
    removeNodeModules(project);
    removeShrinkwrap(project);
    removeCache();

    // format the results to be more easily parsed by the templates
    const benchmarks = [];
    let maximumTime = 0;
    let maximumSize = 0;
    values.forEach(nodeModules => {
      values.forEach(shrinkwrap => {
        values.forEach(cache => {
          const results = [];
          packageManagers.forEach(packageManager => {
            const key = [packageManager, nodeModules, shrinkwrap, cache];
            const time = timeTotals[key]/repititions;
            const size = sizeTotals[key]/repititions;
            maximumTime = time > maximumTime ? time : maximumTime;
            maximumSize = size > maximumSize ? size : maximumSize;

            results.push({
              packageManager,
              time,
              size,
              formattedTime: formatTime(time),
              formattedSize: filesize(size),
            });
          });

          benchmarks.push({
            config: {
              nodeModules,
              shrinkwrap,
              cache,
            },
            results,
          });
        });
      });
    });

    return {
      title: project.title,
      description: project.description,
      benchmarks,
      maximumTime,
      maximumSize,
    };
  });
}

function getProjects(root='projects') {
  root = path.resolve(baseDirectory, root);
  return fs.readdirSync(root)
    .map(file => path.join(root, file))
    .filter(file => fs.lstatSync(file).isDirectory())
    .map(directory => {
      const packageJson = require(path.join(directory, 'package.json'));
      return {
        directory: directory,
        title: packageJson.title || packageJson.name,
        description: packageJson.description,
      };
    })
    .sort();
}

function removeCache() {
  fs.removeSync(cacheDirectory);
}

function removeNodeModules(project) {
  fs.removeSync(path.join(project.directory, 'node_modules'));
}

function removeShrinkwrap(project) {
  // really, remove anything *but* node_modules and package.json
  fs.readdirSync(project.directory)
    .filter(file => !['node_modules', 'package.json'].includes(file))
    .map(file => path.join(project.directory, file))
    .forEach(file => fs.removeSync(file));
}

function getFileSize(fileOrDirectory) {
  if (!fs.existsSync(fileOrDirectory)) return 0;
  const stats = fs.lstatSync(fileOrDirectory);
  if (!stats.isDirectory()) {
    return stats.size;
  }

  return fs.readdirSync(fileOrDirectory)
    .map(file => path.join(fileOrDirectory, file))
    .map(getFileSize)
    .reduce((accumulated, current) => accumulated + current, 0);
}

function getNodeModulesSize(project) {
  return getFileSize(path.join(project.directory, 'node_modules'));
}

function installDependencies(project, packageManager) {
  const options = { cwd: project.directory };
  const start = new Date();
  execSync(`${packageManager} install --ignore-scripts`, options);
  const elapsed = (new Date()) - start;
  // only required for npm
  if (packageManager === 'npm') {
    execSync(`${packageManager} shrinkwrap`);
  }
  return elapsed;
}

function formatTime(milliseconds) {
  const ms = millisec(milliseconds);
  if (ms.getMinutes() >= 1) {
    return ms.format('MM SS');
  }
  const prefix = ms.getSeconds() >= 1 ? ms.format('SS ') : '';
  return prefix + (milliseconds % 1000) + ' milliseconds';
}

function updateTemplates(context, templateDirectory='templates', outputDirectory='.', exceptions=['common.nj']) {
  nunjucks.configure(path.resolve(baseDirectory, templateDirectory));
  fs.readdirSync(path.resolve(baseDirectory, templateDirectory))
    .filter(file => !exceptions.includes(file))
    .forEach(templateFile => {
      const content = nunjucks.render(templateFile, context);
      const outputFile = templateFile.endsWith('.nj') ? templateFile.slice(0, -3) : templateFile;
      const fullOutputFile = path.resolve(baseDirectory, outputDirectory, outputFile);
      fs.writeFileSync(fullOutputFile, content);
    });
}
