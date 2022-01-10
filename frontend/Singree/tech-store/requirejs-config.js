var config = {
    map: {
        '*': {
            slick: 'js/slick.min',
            slider1: 'js/slick-slider',
            slider2: 'js/banner-slider',
        }
    },

    shim: {
        slick: {
            deps: ['jquery']
        }
    },

    config: {
        mixins: {
            'mage/accordion': {
                'js/accordion-widget-mixin': true
            }
        }
    }
};
