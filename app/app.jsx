var app = app || {};

    (function () {
        'use strict';

        app.ALL_TODO = "all";
        app.ACTIVE_TODOS = 'active';
        app.COMPLETED_TODOS = 'completed';

        var TodeFooter = app.TodeFooter;
        var TodeItem = app.TodoItem;

        var ENTER_KEY = 13;

        var BackboneMixin = {
            componentDidMount: function () {

                this.getBackboneCollections().forEach(function (collection) {
                    collection.on("add remove change", this.forceUpdate.bind(this, null));
                }, this);
            },

            componentWillUnmount: function () {
                this.BackboneCollections().forEach(function (collection) {
                    collection.off(null, null, this);
                }, this);
            }
        }
    })

