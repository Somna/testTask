/**
 * Created by Andrey on 04.09.2015.
 */
define(['backbone', 'tmpl/Card'], function (Backbone, cardTmpl) {
    var CardView = Backbone.View.extend({
        template: cardTmpl,
        events: function () {
            return {
            }
        },
        initialize: function () {
            // слушаем модель на удаление
            this.listenTo(this.model, 'remove', this.remove);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return CardView;
});