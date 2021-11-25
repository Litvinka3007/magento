define([
    'jquery',
    'matchMedia',
    'mage/tabs'
], function ($, mediaCheck) {
    'use strict';

    return function (widget) {
        $.widget('mage.accordion', widget, {
            options: {
                active: [0,1,2],
                collapsible: false,
                multipleCollapsible: true,
                openOnFocus: false
            },

            _init: function () {
                mediaCheck({
                    media: '(min-width: 768px)',
                    entry: $.proxy(function () {
                        $(this.element).removeClass('accordion-initialized');
                        $(this.element).accordion("destroy");
                    }, this),
                    exit: $.proxy(function () {
                        if (!$(this.element).hasClass('accordion-initialized')) {
                            $(this.element).addClass('accordion-initialized');
                            $(this.element).accordion({
                                "openedState": "active",
                                "collapsible": true,
                                "multipleCollapsible": true,
                                "active": false,
                            })
                        }
                    }, this)
                });
                this._super();
            }
        });

        return $.mage.accordion;
    }
});
