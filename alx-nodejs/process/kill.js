// send a signal to a process
process.on('SIGHUP', function() {
    console.log('Got SIGHUP signal.');
});

setTimeout(function () {
    console.log('Exiting.');
    process.exit(0);;
}, 100);
process.kill(process.pid, 'SIGHUP');