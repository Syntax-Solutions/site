(function ($) {
    'use strict';
    $(function () {

        $('.button-collapse').sideNav();

    }); 
    $('.modal-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: 0.5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        
    }
        );
    $(document).ready(function () {
        $('.parallax').parallax();
    });// end of document ready
})(jQuery); // end of jQuery name space