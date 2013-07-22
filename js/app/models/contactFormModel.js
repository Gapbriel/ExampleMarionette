define(
  [
    'underscore',
	'backbone'    
  ],
  function(_,Backbone) {
    
	var contactFormModel = Backbone.Model.extend({
     
	  defaults: {
		'name': '',
		'email': '',
		'content': ''
	  },
	  
	  validation: {
		name: {
			required: true,
			msg: 'Please enter a name'
		},
		
		email : {
			required: true,
			msg: 'Please enter a lastname'
		},

		content : {
			required: true,
			msg: 'Please enter a lastname'
		}
		
	  }
	
    });
	
	return contactFormModel;
  }
);