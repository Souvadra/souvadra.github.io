$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function (e) {
    	e.stopPropagation();
        $('#sidebar').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        $('#sidebarCollapse').toggleClass('hide');
    });

    $('#content').on('click', function (e) {
    	if ($('#sidebar').hasClass('active')) {
            $('#sidebar').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            $('#sidebarCollapse').toggleClass('hide');
        }
    });

    $('#navbar-collapse-btn').on('blur', function (e) {
        $('.navbar-collapse').collapse('hide');
        
    });

    // $('#mainContent').on('click', function (e) {
    //     $('.navbar-collapse').collapse('hide');
        
    // });
});