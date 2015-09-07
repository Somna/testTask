/**
 * Created by Andrey on 04.09.2015.
 */
define(['backbone', 'views/CardView', 'models/Card'], function (Backbone, CardView, Card) {
    var CardsView = Backbone.View.extend({
        el: $('.cards'),
        events: function () {
            return {
                'click': 'keysHandler'
            }
        },
        initialize: function () {
            this.collection.on("add", this.addOne, this);
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
                this.collection.add(new Card({
                    type: 'wide',
                    index: this.collection.length + 1
                }));
            }
            else if (e.shiftKey) {
                /*  Shift + click: Add new card 'narrow' type */
                this.collection.add(new Card({
                    type: 'narrow',
                    index: this.collection.length + 1
                }));
            }
            else {
                /*  click: Remove last card view
                *   Въюха сама себя удалит, когда удалится ее модель */
                this.collection.pop();
            }
        }

    });
    return CardsView;
});