process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});

setTimeout(function() {
    console.log('This will still run.');
})

// Intentionally cause an exception, but don't catch it.
nonexistentFunc();
console.log('This will not run.');