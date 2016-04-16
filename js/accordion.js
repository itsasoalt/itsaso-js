$(document).ready(function() {
	$('.toggle').click(function() {
		$(this).siblings().toggle('slow');
	});
});