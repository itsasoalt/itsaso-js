// $(document).ready(function() {
// 	$('.toggle').click(function() {
// 		$(this).siblings().toggle('slow');
// 	});
// });

$(document).ready(function() {
	
	$('.toggle').click(function(e) {
		if ($(this).siblings().is(':visible')) {
			$(this).siblings().slideUp();
			$(this).siblings().find('.inner').slideUp();
		} else {
			$(this).parent().parent().find('.inner:visible').slideUp();
			$(this).siblings('.inner').slideDown();
		};
		
	});

});