define([
  'marionette', 
	'tpl!app/views/templates/HelpView.html',
	'app/models/helpFormModel'
	
],
    function (Marionette, template, HelpForm) {
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


        var AppFormHelpView = Marionette.ItemView.extend({
            template: template(),

            events: {
                'submit .submit': 'saveContact',
            },

            saveContact: function (ev) {
                var userDetails = $(ev.currentTarget).serializeObject();
                var help = new HelpForm();
                
                var jsonText = JSON.stringify(userDetails);
                
                alert(jsonText);

                return false;
            },
            
        });

        return AppFormHelpView; 
    });