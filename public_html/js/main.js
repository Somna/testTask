/**
 * Created by Andrey on 04.09.2015.
 */

require.config({
    /* Сброс кеша */
    urlArgs: '_=' + (new Date()).getTime(),

    /* Кореневая дир-я зависимостей */
    baseUrl: 'js',

    /* Указываем библиотеки */
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone'
    },

    /* shim отвечает за зависимости и объявление в глобальном scope */
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});

define([
    'backbone',
    'collections/CardsList',
    'views/CardsView'
], function (
    Backbone,
    CardsList,
    CardsView
) {

    window.cardsView = new CardsView({
        collection: new CardsList(cards)
    });

    window.cardsView.render();




});
