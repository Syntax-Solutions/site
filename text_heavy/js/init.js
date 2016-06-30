(function ($) {
    'use strict';
    $(function () {
        $(".button-collapse").sideNav();
        $('.collapsible').collapsible({
            accordion: false
        });
        $('.parallax').parallax();
        $('.modal-trigger').leanModal();
        $('ul.tabs').tabs();
        $(document).ready(function () {
            $('.tabs-wrapper .row').pushpin({
                top: $('.tabs-wrapper').offset().top
            });
        });
        $(document).ready(function () {
            Materialize.updateTextFields();
        });
    });
})(jQuery);