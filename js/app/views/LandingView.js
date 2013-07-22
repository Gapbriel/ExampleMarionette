define([
    'marionette', 
	'tpl!app/views/templates/LandingView.html'
	
],
    function (Marionette, template) {
        "use strict";

        return Marionette.ItemView.extend({
            template: template()
        });
    });