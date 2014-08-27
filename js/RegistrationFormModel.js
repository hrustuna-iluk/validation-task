var RegistrationFormModel = Backbone.Model.extend({
    defaults: function(){
        return  {
            userName: '',
            userLogin: '',
            categories:[]
        }
    },

    validate: function( attrs ) {
	    var errors = [];
        var PATTERN_ERROR = /^[A-Z][a-z]+$/;
        var PATTERN_ERROR = /^[\_0-9a-zA-Z]+$/;

        if ( attrs.userName.search(checkName)== -1) {
            errors.push({field: 'userName', message: 'Name is not correct!'});
        }

        if ( attrs.userLogin.search(checkLogin)== -1 ) {
            errors.push({field: 'userLogin', message: 'Name is not correct!'});
        }
		return errors;

    }
});