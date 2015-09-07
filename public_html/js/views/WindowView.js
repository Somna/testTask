/**
 * Created by Andrey on 07.09.2015.
 */
define(['backbone'], function (Backbone) {
    var WindowView = Backbone.View.extend({
        el: $(window),
        events: function () {
            return {
                'popstate': 'popstate'
            }
        },

        popstate: function (e) {
            this.trigger('popstate', e);
        }
    });
    return WindowView;
});