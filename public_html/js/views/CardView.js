/**
 * Created by Andrey on 04.09.2015.
 */
define(['backbone', 'tmpl/Card'], function (Backbone, cardTmpl) {
    var CardView = Backbone.View.extend({
        template: cardTmpl,
        events: function () {
            return {
                'click': 'remove'
            }
        },
        initialize: function () {
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            console.log(this.model);
            return this;
        }
    });
    return CardView;
});