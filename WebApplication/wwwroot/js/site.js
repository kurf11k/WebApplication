// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$('#updateButton').click(function () {
    var url = "Person/Import/"
    $('#loading').css('display', 'inline-block')
    $.getJSON(url, null, function (data) {
        localStorage.setItem("action", "success");
        location.reload();    
    }).catch(function () {
        $('#failed').show().delay(5000).fadeOut();
        $('#loading').css('display', 'none');
    });
});

var action = localStorage.getItem("action")
if (action == "success") {
    $('#loaded').show().delay(5000).fadeOut();
}

localStorage.setItem("action", "no action");
