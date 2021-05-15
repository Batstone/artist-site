$(function () {

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
});