define([
  'marionette', 
	'tpl!app/views/templates/FormView.html',
	'app/models/userModel'
	
],
    function (Marionette, template, User) {
        "use strict";

        $.fn.serializeObject = function() {
              var o = {};
              var a = this.serializeArray();
              $.each(a, function() {
                  if (o[this.name] !== undefined) {
                      if (!o[this.name].push) {
                          o[this.name] = [o[this.name]];
                      }
                      o[this.name].push(this.value || '');
                  } else {
                      o[this.name] = this.value || '';
                  }
              });
              return o;
        };


        var AppFormUserView = Marionette.ItemView.extend({
            template: template(),

            events: {
                'submit .edit-user-form': 'saveUser',
                'click .cancel-form': 'cancelUser'
            },

            saveUser: function (ev) {
              
              var userDetails = $(ev.currentTarget).serializeObject();
              var user = new User();

              user.save(userDetails,{
                    success: function (user) {
                        console.log('Saved');
                    }
              });
                
                 
                  return false;
            },


            cancelUser: function () {
                  alert('Cancel');   
            },
            

            /*render: function (options) {
              var that = this;
              var user = new User();    
                  if(options.id) {
                    that.user = new User({id: options.id});
                    that.user.fetch({
                      success: function (user) {    
                        var template = _.template(tpl, {user: user});
                        that.$el.html(template);
                      }
                    })
                  } else {
                    var template = _.template(tpl, {user: null});
                    that.$el.html(template);
                  } 
                  //Backbone.Validation.bind(that); 
                  
            }*/

        });

        return AppFormUserView; 
    });