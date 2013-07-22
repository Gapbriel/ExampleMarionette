define([
    'marionette', 
	'app/views/SearchView',
	'app/views/NavigationCompositView'
     	
],
    function (marionette, SearchView, NavigationCompositView, FormUserView) {
        "use strict";

        var app = new marionette.Application();

        app.addRegions({
            search: '#searchView',
            navigation: '#navigationRegion',
            content: '#contentRegion',
        });

        app.addInitializer(function (options) {
            app.search.show(new SearchView());
            app.navigation.show(new NavigationCompositView());
        });

        return app;
    });
