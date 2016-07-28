$(document).ready(function () {
    SetContentCss();
    $('#content').niceScroll({
        cursorcolor: '#000000',
        cursorwidth: '6px',
        cursorborder: '0px',
        cursorborderradius: '3px'
    });
    if (($.cookie('CurrentUserIndex') == null) || ($.cookie('CurrentUserIndex') == 'null')) {
        $('#AddUserBtn').show();
        $('#RmvUserBtn').hide();
    } else {
        $('#AddUserBtn').hide();
        $('#RmvUserBtn').show();
    }
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

function ShowModal(room) {
    $('#colorcpan').text(room);
    $('#myModal').modal('toggle');
}