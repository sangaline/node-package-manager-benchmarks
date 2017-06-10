const execSync = require('child_process').exec;
const fs = require('fs');
const path = require('path');

// global settings
const defaultRepititions = 5;
const repititions = process.argv.length === 3 ? parseInt(process.argv[2]) : defaultRepititions;
const cwd = process.cwd();
const binPrefix = path.join(cwd, 'node_modules', '.bin');
const cacheDirectory = path.join(process.cwd(), 'cache');
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
