$(function () {

    // Animate on scroll initialization
    AOS.init();

    // adding click functionality to hamburger menu
    $('.header__mobile-icon-container').on('click', () => {
        $('.js-menu')
            .toggleClass('header__mobile-icon')
            .toggleClass('header__mobile-icon--active')

        if ($('.header__list').css('display') === 'none') {
            $('.header__list').css('display', 'flex')
        } else {
            $('.header__list').css('display', 'none')
        };
    });

    // adding click functionality to hamburger menu
    $('.header__main-mobile-icon-container').on('click', () => {
        $('.js-menu')
            .toggleClass('header__main-mobile-icon')
            .toggleClass('header__main-mobile-icon--active')

        if ($('.header__list').css('display') === 'none') {
            $('.header__list').css('display', 'flex')
        } else {
            $('.header__list').css('display', 'none')
        };
    });

    function placeOnLeftHandEdgeOfElementLine(toolbar, pageElement) {
        $(toolbar).css("left", $(window).scrollLeft() + ($(window).width() + -180)
            - $(pageElement).offset().left
            - parseInt($(pageElement).css("borderLeftWidth"), 10)
            - $(pageElement).width() + "px");
    }

    function placeOnLeftHandEdgeOfElement(toolbar, pageElement) {
        $(toolbar).css("left", $(window).scrollLeft() + ($(window).width() + 50)
            - $(pageElement).offset().left
            - parseInt($(pageElement).css("borderLeftWidth"), 10)
            - $(pageElement).width() + "px");
    }

    function placeOnRightHandEdgeOfElement(toolbar, pageElement) {
        $(toolbar).css("right", $(window).scrollLeft() + ($(window).width() + -27)
            - $(pageElement).offset().left
            - parseInt($(pageElement).css("borderLeftWidth"), 10)
            - $(pageElement).width() + "px");
    }
    $(window).resize(function () {
        placeOnRightHandEdgeOfElement(".header__social-list", ".header__list");
    });

    $(".header__social-list").resize();

    if ($(window).width() > 575) {
        $(".main-header").ripples({
            resolution: 512,
            dropRadius: 30,
            interactive: true,
            perturbance: 0.005,
        });
    }

});