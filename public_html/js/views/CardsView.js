/**
 * Created by Andrey on 04.09.2015.
 */
define(['backbone', 'views/CardView', 'models/Card', 'collections/CardsList'], function (Backbone, CardView, Card, CardsList) {
    var CardsView = Backbone.View.extend({
        el: $('.cards'),
        events: function () {
            return {
                'click': 'keysHandler',
            }
        },
        initialize: function () {
            this.listenTo(this.collection, "add", this.addOne);
            this.listenTo(this.collection, "reset", this.reset);

            this.on("addWide", this.saveState);
            this.on("addNarrow", this.saveState);
            this.on("removeLast", this.saveState);

            this.listenTo(window.view, 'popstate', this.popstate);
        },
        render: function () {
            this.addAll();
            return this;
        },
        addAll: function() {
            this.collection.each(function(card, index) {
                card.set('index', index);
                var item = new CardView({
                    model: card,
                    className: 'cards__item cards__item_' + card.get('type')
                });
                this.$el.append(item.render().el);
            }, this);
        },
        addOne: function(card, collection) {

            card.set('index', collection.length - 1);
            var item = new CardView({
                model: card,
                className: 'cards__item cards__item_' + card.get('type')
            });
            this.$el.append(item.render().el);
        },
        keysHandler: function (e) {
            if (e.altKey && e.shiftKey) {
                /*    Shift + Alt + click: Add new card 'wide' type  */
                var card = new Card({
                    type: 'wide',
                    index: this.collection.length + 1
                });
                this.collection.add(card);
                this.trigger('addWide', card);
            }
            else if (e.shiftKey) {
                /*  Shift + click: Add new card 'narrow' type */
                var card = new Card({
                    type: 'narrow',
                    index: this.collection.length + 1
                });
                this.collection.add(card);
                this.trigger('addNarrow', card);
            }
            else {
                /*  click: Remove last card view
                *   Въюха сама себя удалит, когда удалится ее модель */
                this.collection.pop();
                this.trigger('removeLast');
            }
        },

        reset: function (collection, prev) {
            console.log(prev);
        },

        // сохраняем состояние коллекции
        saveState: function () {
            var cardId = this.collection.length;
            history.pushState(this.collection.toJSON(), 'card ' + cardId, '#' + cardId);
        },

        // ловим переходы
        popstate: function (e) {
            var model;
            while (model = this.collection.first()) {
                model.destroy();
            }

            console.log(e);
            this.collection.reset(e.originalEvent.state);
            this.render();

        }

    });
    return CardsView;
});