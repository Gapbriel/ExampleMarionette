define([

	'app/views/LandingView',
	'app/views/formUsersView',
	'app/views/formUserView',
    'app/views/formContactView',
    'app/views/formHelpView',
    'app/views/termConditionView'
],
    function (LandingView ,FormUsersView, FormUserView, FormContactView, FormHelpView, TermConditionView) {
        "use strict";

        return {
            logAction: function (action) {
                console.log(action);
                MyApp.content.show(new LandingView());               
            },

            usersTable : function (action) {
            	  MyApp.content.show(new FormUsersView());
            },

            newUser : function (action) {
            	  MyApp.content.show(new FormUserView());	
            },

            editUser : function (action) {
                MyApp.content.show(new FormUserView()); 
            },
            
            contact : function (action) {
                MyApp.content.show(new FormContactView());               
            },

            help : function (action) {
                MyApp.content.show(new FormHelpView());               
            },

            termsAndConditions : function (action) {
                MyApp.content.show(new TermConditionView());               
            }

        };

    });
