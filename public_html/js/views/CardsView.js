/**
 * Created by Andrey on 04.09.2015.
 */
define(['backbone', 'views/CardView'], function (Backbone, CardView) {
    var CardsView = Backbone.View.extend({
        el: $('.cards'),
        events: function () {
            // TODO:
        },
        initialize: function () {
            this.collection.on("add", this.addOne, this);
        },
        render: function () {
            this.addAll();
            return this;
        },
        addAll: function() {
            this.collection.each(this.addOne, this);
        },
        addOne: function(card, index) {

            card.set('index', index);
            var item = new CardView({
                model: card,
                className: 'cards__item cards__item_' + card.get('type')
            });
            this.$el.append(item.render().el);
        },
        show: function () {
            this.$el.show();
        },
        hide: function () {
            this.$el.hide();
        }

    });
    return CardsView;
});