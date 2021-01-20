$(function ($) {
    // counter 
    $(".counter").counterUp({
        delay: 10,
        time: 1000,
    });

    // image/ video venobox 
    $('.venobox').venobox();

    // slick 

    $('.screen_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        // nextArrow: '<i class="fas fa-angle-left"></i>',
        // prevArrow: '<i class="fas fa-angle-right"></i>',

        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.testimonials_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 578,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 578,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });


    var navoffset = $('#manu_item').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navoffset) {
            $("#manu_item").addClass("menu_fix");
        } 
        else {
            $("#manu_item").removeClass("menu_fix");
        }
    });





});
