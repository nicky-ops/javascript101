// AJAX 
// get() and post() methods
$(function()
{
    $.get("content.html", function(data, textStatus)
    {
        alert("Done, with the following status: " + textStatus + ". Here is the response: " + data);
    });
});

// passing parameters to post()
$(function()
{
    $.post("test_post.php",
    {
        name: "Donald Duck",
        age: '42'
    },
    function(data, textStatus)
    {
        alert("Response from server: " + data);
    });
});