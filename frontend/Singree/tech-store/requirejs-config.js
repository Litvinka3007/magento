var config = {
    map: {
        '*': {
            slick: 'js/slick.min',
        }
    },

    deps: [
      "js/slick-slider"
    ],

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
