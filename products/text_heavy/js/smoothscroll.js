$(function () {
    'use strict';
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});
$(window).scroll(function () {
    'use strict';
    if ($(window).scrollTop() > 178) {
        $('#scroller').addClass('stuck');
        $('.pushed').addClass('push');
    } else {
        $('#scroller').removeClass('stuck');
        $('.pushed').addClass('push');
    }

});