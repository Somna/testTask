/**
 * Created by Andrey on 04.09.2015.
 */
define(['backbone', 'models/Card'], function (Backbone, Card) {
    var CardsList = Backbone.Collection.extend({
        model: Card
    });
    return CardsList;
});