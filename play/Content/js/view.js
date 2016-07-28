$(document).ready(function () {
    SetContentCss();
    $('#content').niceScroll({
        cursorcolor: '#000000',
        cursorwidth: '6px',
        cursorborder: '0px',
        cursorborderradius: '3px'
    });
});
$(window).resize(function () {
    SetContentCss();
});

function SetContentCss() {
    $('#header')
        .css('width', (document.documentElement.clientWidth - 10))
        .css('height', 50);
    $('#content')
        .css('width', (document.documentElement.clientWidth - 10))
        .css('height', (document.documentElement.clientHeight - parseInt($('#header').css('height')) - 15));
}

if ($.cookie('UserNick') == null || $.cookie('UserNick') == 'null') {
    window.history.back();
    window.location = '/';
} else {
    alert('Delete cookies!');
    //$.cookie('UserNick', null, { expires: 7, path: '/play' });
    //$.cookie('Room', null, { expires: 7, path: '/play' });
}
