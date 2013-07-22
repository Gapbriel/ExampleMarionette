define([
    'marionette', 
    'hbs',
	'text!app/views/templates/TableUsersView.html',
	'app/models/usersModel'
	
],
    function (Marionette, Handlebars,tpl, UsersModel) {
        "use strict";

        var AppFormUsersView = Marionette.ItemView.extend({
                        
            initialize: function () {
               //this.render();
            },

            render: function () {
                var that = this;
                var users = new UsersModel();
                users.fetch({
                  success: function (users) {
                    var template = _.template(tpl, {users: users.models});
                    that.$el.html(template);
                  }

                })
            }
            
        });

        return AppFormUsersView; 
    });