define([  
  'jquery',
  'underscore',
  'backbone',
  'localStorage',
  'app/models/usersModel'
 ], function($,_,Backbone,localStorage,UsersModel) {    
      var UsersCollection = Backbone.Collection.extend({
  			model:UsersModel,
  			localStorage: new Backbone.LocalStorage("UserCollection")
    });
  
    return UsersCollection;
  }
);