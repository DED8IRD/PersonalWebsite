$(document).ready(function() {

    // Add scrollspy to <body>
    var navOffset = $('.navbar').height();
    $('body').scrollspy({target: ".navbar", offset: navOffset});   
    
    // Smooth scroll to anchors
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                && 
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - navOffset + 1
                    }, 300, function () {
                        window.location.hash = target;
                    });
                }
            }
        });
    
    // Closes responsive menu when a scroll trigger link is clicked
    $('#navigation').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

});