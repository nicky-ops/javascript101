// $(document).ready()
$(document).ready(function()
{
    console.log("ready!")
});

// shorthand for $(document).ready()
$(function {
        console.log("ready!")
    });

//  pass a named function instead of an anonymous function
function readyFn(jQuery) {
    console.log("ready!")
}

$(document).ready(readyFn);
$(window).on('load', readyFn)