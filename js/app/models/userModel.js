define(
  [
    'underscore',
	'backbone'    
  ],
  function(_,Backbone) {
    
	var UserModel = Backbone.Model.extend({
      urlRoot: '/users',
	  
	  defaults: {
		'firstname': '',
		'lastname': '',
		'pwd': '',
		'email': '',
		'dni': '',		
		'cuit': '',
		'address': ''
	  },
	  
	  validation: {
		firstname: {
			required: true,
			msg: 'Please enter a name'
		},
		
		lastname : {
			required: true,
			msg: 'Please enter a lastname'
		},
		
		pwd : {
			required: true,
			msg: 'Please enter a valid range age'
		},
		
		email : {
			required: true,
			msg: 'Please enter a valid range age'
		},
		
		dni : {
			required: true,
			msg: 'Please enter a valid range age'
		},
		
		cuit : {
			required: true,
			msg: 'Please enter a valid range age'
		},
		
		address : {
			required: true,
			msg: 'Please enter a valid range age'
		}
	  }
	
    });
	
	return UserModel;
  }
);