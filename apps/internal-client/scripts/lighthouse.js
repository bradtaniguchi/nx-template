const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { readFile, writeFile } = require('fs-extra');
/**
 * this script starts lighthouse, after updating the
 * production files, as the page wont load due to
 * having a prefix
 */
(async () => {
  try {
    const path = './dist/apps/internal-client/index.html';

    console.log('>> updating index.html to support lighthouse');

    const content = await readFile(path, 'utf8');

    const newContent = content.replace(/\/nx-template\//g, '/');

    await writeFile(path, newContent);

    console.log(
      '>> done updating index.html to support lighthouse, running lighthouse...'
    );

    await exec(
      'npx lhci autorun --config=./.lighthouse/lighthouserc.js --collect.staticDistDir=./dist/apps/internal-client'
    );

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
