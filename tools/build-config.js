const { promises: fs } = require('fs');
const { writeFile } = fs;

(async () => {
  try {
    const sha = process.env.GITHUB_SHA ?? '';
    const tag = process.env.TAG ?? ''; // this is set as a workflow environment variable
    console.log('file status: ', { sha, tag });
    await writeFile('dist/config.json', JSON.stringify({ sha, tag }, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
