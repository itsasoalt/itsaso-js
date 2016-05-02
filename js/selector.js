$(document).ready(function() {
	$('#uno').hide();
	$('#dos').hide();
	$('#tres').hide();

	$('select').change(function(ev){
		
		if ($("select option:selected").val() == 1) {
			$('#uno').show();
			$('#dos').hide();
			$('#tres').hide();

		} else if ($("select option:selected").val() == 2) {
			$('#dos').show();
			$('#uno').hide();
			$('#tres').hide();

		} else if ($("select option:selected").val() == 3) {
			$('#tres').show();
			$('#uno').hide();
			$('#dos').hide();
		
		} else {
			$('#uno').hide();
			$('#dos').hide();
			$('#tres').hide();
		} 
	})		

});