(function ($) {
    'use strict';
    $(function () {

        $('.button-collapse').sideNav();

    }); // end of document ready
    $(document).ready(function () {
        $('.parallax').parallax();
    });
    $(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
        $('.modal-trigger').leanModal();
    });
})(jQuery); // end of jQuery name space
