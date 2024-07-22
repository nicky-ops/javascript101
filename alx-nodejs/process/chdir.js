console.log('Starting directory ' + process.cwd());
try {
    process.chdir('./alx-nodejs');
    console.log('New directory: ' + process.cwd());
}
catch (err){
    console.log('chdir: ' + err);
}