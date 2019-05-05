$('body').addClass('js-loading');

$(document).ready(function() {
    // Preloader animation
    $(window).on('load', function() {
        $('body').removeClass('js-loading')
        $('.loading').fadeOut('slow')
    })

    window.sr = ScrollReveal({
        duration: 500,
        delay: 200,
        easing: 'ease-out',        
    })

    // Add scrollspy to <body>
    const navOffset = $('.navbar').height();
    $('body').scrollspy({target: ".navbar", offset: navOffset});
    
    // Closes responsive menu when a scroll trigger link is clicked
    $('#navigation').click(function() {
        $('.navbar-collapse').collapse('hide');
    }); 

    // Affix navbar after hero
    $(window).on('scroll', function(event) {
        const scrollValue = $(window).scrollTop();
        const heroHeight = $('.hero').height();
        if (scrollValue >= heroHeight) {
             $('.navbar').addClass('fixed-top');
        } else {
             $('.navbar').removeClass('fixed-top');
        }
    });

    // Copy business card content to card stack
    const cardContents = $('.biz-card-front').html()
    $('.biz-card-under').html(cardContents)
    
    // Lightbox for portfolio items
    $(document).on('click', '.portfolio-container', function(event) {
        const $lightbox = $("<div id='lightbox'></div>");
        const $close = $("<p class='close'>&times;</p>");
        const $contents = $("<div class='modal-dialogue modal-dialogue-centered modal-content'></div>");
        const $caption = $("<div class='caption-container'></div>");
        const $img = $(this).find('img')[0].outerHTML;
        $caption
            .append($(this).find('div.portfolio-hover-content').html());
        $lightbox
            .append($contents
                .append($img)
                .append($close)
                .append($caption))
        $('body').append($lightbox);
        $lightbox.fadeIn('fast');
        $lightbox.click(function() {
            $lightbox.fadeOut('fast');
        });
    });

    // Scroll reveal animations
    sr.reveal('section > *')
    sr.reveal('.projects > .portfolio-item', {
        origin: 'left',
        distance: '10%',
        interval: 200,
        duration: 600,
        easing: "ease-in-out",
    })    
    sr.reveal('.skills > .skill', {
        origin: 'right',
        distance: '10%',
        interval: 300,
        duration: 700,
        easing: "ease-in-out",        
    })
    sr.reveal('.contacts > a > i', {
        origin: 'left',
        distance: '10%',
        interval: 200,
        duration: 600,
        easing: "ease-in-out",        
    })
    sr.reveal('.click-me', {
        origin: 'top',
        distance: '0.5rem',
        duration: 700,
    })
});