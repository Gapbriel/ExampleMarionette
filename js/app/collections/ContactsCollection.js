define([  
  'jquery',
  'underscore',
  'backbone',
  'localStorage',
  'app/models/contactFormModel'
 ], function($,_,Backbone,localStorage,contactFormModel) {    
      var contactsCollection = Backbone.Collection.extend({
    		model:contactFormModel,
    		localStorage: new Backbone.LocalStorage("contactCollection")
    });
  
    return contactsCollection;
  }
);