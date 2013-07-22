define([
    'marionette', 
	'app/Controller'
	
	],
    function (marionette, Controller) {
        'use strict';

        return marionette.AppRouter.extend({
            appRoutes: {
                ''                   : 'logAction',
                'usersTable'         : 'usersTable',
                'newUser'            : 'newUser',
                'editUser/:id'       : 'editUser',
                'contact'            : 'contact',
                'help'               : 'help',
                'termsAndConditions' : 'termsAndConditions'
            },
            controller: Controller
        });
    });
