const execSync = require('child_process').exec;
const fs = require('fs-extra');
const nunjucks = require('nunjucks');
const path = require('path');

// global settings
const defaultRepititions = 5;
const repititions = process.argv.length === 3 ? parseInt(process.argv[2]) : defaultRepititions;
const cwd = process.cwd();
const binPrefix = path.join(cwd, 'node_modules', '.bin');
const cacheDirectory = path.join(cwd, 'cache');
const packageManagers = ['pnpm'];

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

function updateReadme(results, template='templates/README.md', readme='README.md') {
  const content = nunjucks.render(template, { results });
  fs.writeFileSync(readme, content);
}
