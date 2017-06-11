const execSync = require('child_process').execSync;
const fs = require('fs-extra');
const nunjucks = require('nunjucks');
const path = require('path');

// global settings
const defaultRepititions = 1;
const repititions = process.argv.length === 3 ? parseInt(process.argv[2]) : defaultRepititions;
const cwd = process.cwd();
const binPrefix = path.join(cwd, 'node_modules', '.bin');
const cacheDirectory = path.join(cwd, 'cache');
const packageManagers = ['npm', 'yarn', 'pnpm'];

// the main program execution
main();

function main() {
  const projectBenchmarks = computeProjectBenchmarks();
  updateReadme({ repititions, projectBenchmarks });
}

function computeProjectBenchmarks() {
  return getProjects().map(project => {
    // tally the sums of the timings
    const totals = {};
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
              if (i === 0) totals[key] = 0;
              totals[key] += installDependencies(project, packageManager);
              if (i === 0) console.log(totals[key]);
              console.log(key);
            });
          });
        });
      }
    });
    removeNodeModules(project);
    removeShrinkwrap(project);
    removeCache();

    // reorder the results to be better for the table
    const table = []
    values.forEach(nodeModules => {
      values.forEach(shrinkwrap => {
        values.forEach(cache => {
          packageManagers.forEach(packageManager => {
            const key = [packageManager, nodeModules, shrinkwrap, cache];
            table.push(key.concat([totals[key]/(repititions*1000)]));
          });
        });
      });
    });

    return {
      name: project.name,
      headings: ['Package Manager', 'Node Modules', 'Shrinkwrap', 'Cache', 'Time (s)'],
      table: table,
    };
  });
}

function getProjects(root='projects') {
  root = path.resolve(cwd, root);
  return fs.readdirSync(root)
    .map(file => path.join(root, file))
    .filter(file => fs.lstatSync(file).isDirectory())
    .map(directory => ({
      directory: directory,
      name: require(path.join(directory, 'package.json')).description,
    }));
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

function installDependencies(project, packageManager) {
  const options = { cwd: project.directory };
  const start = new Date();
  execSync(`${packageManager} install`, options);
  const elapsed = (new Date()) - start;
  // only required for npm
  if (packageManager === 'npm') {
    execSync(`${packageManager} shrinkwrap`);
  }
  return elapsed;
}

function updateReadme(context, template='templates/README.md', readme='README.md') {
  const content = nunjucks.render(template, context);
  fs.writeFileSync(readme, content);
}
