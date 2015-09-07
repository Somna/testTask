/**
 * Created by Andrey on 04.09.2015.
 */
define(['backbone'], function (Backbone) {
    var Card = Backbone.Model.extend({
        defaults: {
            type: ''
        }
    });
    return Card;
});