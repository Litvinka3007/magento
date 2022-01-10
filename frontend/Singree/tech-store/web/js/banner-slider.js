require([
    'jquery',
    'slick'
], function ($) {
    jQuery(document).ready(function () {
        jQuery(".custom-slider").slick({
            arrows: false,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            draggable: true,
            swipe: true,
            touchThreshold: 10,
            touchMove: true
        });
    });
});
