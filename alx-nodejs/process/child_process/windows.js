// On windows only!
// Spawning .bat and .cmd files on Windows
const { spawn } = require('child_process');
const bat = spawn('cmd.exe', ['/c', 'my.bat']);

bat.stdout.on('data', (data) => {
    console.log(data.toString());
});

bat.stderr.on('data', (data) => {
    console.error(data.toString());
});

bat.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
});

// OR...
const { exec, spawn } = require('node:child_process');
const { stderr } = require('node:process');
exec('my.bat', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return
    }
    console.log(stdout);
})

// Script with spaces in the filename
const cmd = spawn('"my script.cmd"', ['a', 'b'], {shell: true});
// or
exec('"my script.cmd" a b', (err, stdout, stderr) => {
    //...
});