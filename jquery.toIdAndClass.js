(function($) {
    jQuery.fn.extend({
        toId: function() {
            return $('#' + this.selector);
        },

        toCl: function() {
            return $('.' + this.selector);
        }
    })
}(jQuery));