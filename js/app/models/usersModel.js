define([
  'jquery',	
  'backbone',
  /*'localStorage'*/
 ], function($, Backbone /*,localStorage*/) {
    
	  $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
        options.url = 'http://localhost/ExampleMarionette/data/user.json';
    });

    var UsersCollection = Backbone.Collection.extend({
        url: '/users'
    });
	
	  return UsersCollection;

  }
);
