define([
	'marionette', 
	'tpl!app/views/templates/NavigationCompositView.html',
],
    function (Marionette, template) {
        "use strict";

        return Marionette.ItemView.extend({
            template: template()
//            ,itemViewContainer: '#navigationLinks'
//            ,itemView: NavigationGroupCompositView
        });

    });