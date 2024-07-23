const util = require('node:utli');
const exec = util.promisify(require('node:child_process').exec);

async function lsExample() {
    const { stdout, stderr } = await exec('ls');
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
}

lsExample();