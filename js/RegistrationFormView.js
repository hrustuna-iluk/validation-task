var RegistrationFormView = Backbone.View.extend({
   context: $('#main'),
   initialize:function(){
       $("#send", this.context).off().on('click', $.proxy(this.checkForm,this));
	   this.model.on("invalid", $.proxy(function(model, errors) {
			$('#errors', this.context).html('');
			_.each(errors, function(error){
			    $('#errors', this.context).append('<div>' + error.message + '</div>');
				$('#' + error.field, this.context).css('border', '1px solid red');
			}, this);
	   }, this));
   },

   checkForm:function(){
	   var data = {};
	   $('input', this.context).css('border', '1px solid black');
	   data.userName = $("#userName", this.context).val();
	   data.userLogin = $("#userLogin", this.context).val();
	   data.categories = $("#categories", this.context).val();
	   
       this.model.set(data, {validate:true});       

   }


});