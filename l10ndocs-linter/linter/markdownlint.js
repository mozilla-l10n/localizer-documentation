const fs = require('fs');
const glob = require('glob');
const markdownlint = require('markdownlint');
const path = require('path');

// Default paths and configs
const argv = require('minimist')(process.argv.slice(2));

const default_config = path.join(path.dirname(require.main.filename), 'markdownlint.json');
var config_file = 'config' in argv
    ? path.resolve(argv['config'])
    : default_config;
if (!fs.existsSync(config_file)) {
    console.log('Config file doesn\'t exist. Falling back to default.');
    config_file = default_config;
}
console.log('Using config file: ' + config_file);

const search_path = 'path' in argv
    ? path.resolve(argv['path'])
    : process.cwd();
console.log('Searching path: ' + search_path)

// Get all .md files
const filelist = glob.sync(
    path.join(search_path, '**/*.md'),
    {
        'ignore': [
            '**/node_modules/**',
        ]
    });

// Run linter
const options = {
    'files': filelist,
    'config': require(config_file)
};
const results = markdownlint.sync(options);
console.log(results.toString(true));

if (results.toString(true)) {
    process.exit(1);
} else {
    console.log('There are no linter errors.');
}
