function validateEmail(sEmail) {
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (filter.test(sEmail))
				return true;
		else
				return false;
}
//funciones con nombre para llamarlas despues
function validaNombre() {
	var nombre = $('input[name="personal"]').val();

	if (nombre.length < 4 || nombre.length > 15) { //Incorrecto
		$('input[name="personal"]').prev().show();
	} else {
		$('input[name="personal"]').prev().hide();
	}
}
function validaUsuario() {
	var username = $('input[name="username"]').val();

	if (username.trim().includes(' ') || username.length == 0) {
		$('input[name="username"]').prev().show();
	} else {
		$('input[name="username"]').prev().hide();
	}
}
//cuando salimos del focus nombre
$('input[name="personal"]').focusout(function() {
	validaNombre();
});
//cuando salimos del focus nombre de usuario
$('input[name="username"]').focusout(function() {
	validaUsuario();
});
//validar el email cuando le pides que valides el email
$('input[name="email"]').focusout(function() {
	var email = $('input[name="email"]');

	if (validateEmail(email)) {
		$('input[name="email"]').prev().hide();
	} else {
		$('input[name="email"]').prev().show();
	}
});
//cuando damos submit a todo
$('form').submit(function(ev) {
	validaNombre();
	validaUsuario();
	validateEmail();
	if ($('.error:visible'.length > 0)) {
		ev.preventDefault();
	}
	
});