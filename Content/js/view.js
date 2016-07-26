$(document).ready(function () {
    $('#header')
        .css('width', (document.documentElement.clientWidth - 10))
        .css('height', 50);
    $('#content')
        .css('width', (document.documentElement.clientWidth - 10))
        .css('height', (document.documentElement.clientHeight - parseInt($('#header').css('height')) - 15));
});
$(window).resize(function () {
    
});