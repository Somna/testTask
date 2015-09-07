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
    'views/WindowView',
    'collections/CardsList',
    'views/CardsView'
], function (
    Backbone,
    WindowView,
    CardsList,
    CardsView
) {

    window.view = new WindowView();

    window.cardsView = new CardsView({
        collection: new CardsList(cards)
    });

    window.cardsView.render();




});
