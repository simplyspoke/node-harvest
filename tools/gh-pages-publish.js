const { cd, exec, echo, touch } = require('shelljs');
const { readJsonSync } = require('fs-extra');
const url = require('url');

require('dotenv').config();

let repoUrl;
let pkg = readJsonSync('package.json');
if (typeof pkg.repository === 'object') {
  if (!pkg.repository.hasOwnProperty('url')) {
    throw new Error('URL does not exist in repository section');
  }
  repoUrl = pkg.repository.url;
} else {
  repoUrl = pkg.repository;
}

let parsedUrl = url.parse(repoUrl);
let repository = (parsedUrl.host || '') + (parsedUrl.path || '');
let ghToken = process.env.GH_TOKEN;

echo('Deploying docs!!!');
cd('docs');
touch('.nojekyll');
exec('git init');
exec('git add .');
exec('git config user.name "Tristan Fitzgerald"');
exec('git config user.email "tristan@simplyspoke.com"');
exec('git commit -m "docs: update gh-pages"');
exec(
  `git push --force --quiet "https://${ghToken}@${repository}" master:gh-pages`
);
echo('Docs deployed!!');
