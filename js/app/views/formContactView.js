define([
  'marionette', 
	'tpl!app/views/templates/FormContactView.html',
	'app/models/contactFormModel'
	
],
    function (Marionette, template, ContactForm) {
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


        var AppFormContactView = Marionette.ItemView.extend({
            template: template(),

            events: {
                'click #submitButton': 'saveContact',
            },

            saveContact: function (ev) {
                var contactDetails = $(ev.currentTarget).serializeObject();
                var contact = new ContactForm();
                
                contact.save(contactDetails, {
                    success: function (contact) {
                      console.log("contact saved");
                      alert("guardado vieja");
                    }

                });
                 
                  return false;
            },
            
        });

        return AppFormContactView; 
    });