$('.one__carousel').owlCarousel({
    loop: false,
    stagePadding: 15,
    margin: 20,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1
        },
        640: {
            items: 1
        },
        960: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});

jQuery(function ($) {
    var $nav = $('.navbar__container'),
        $win = $(window),
        winH = $win.height(); // Get the window height.
    $win.on("scroll", function () {
        $nav.toggleClass("navbar__fixed", $(this).scrollTop() > winH);
    }).on("resize", function () { // If the user resizes the window
        winH = $(this).height(); // you'll need the new height value
    });
});

$(document).on('click', '#navbar__container', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body')
        .animate({
            scrollTop: $(target).offset().top
        }, 'slow', 'swing', function () { });
})