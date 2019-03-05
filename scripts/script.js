$(function($) {
	$('a[href^="#"]').click(function (e) {
		e.preventDefault(); 
		var target = $(this).attr('href'); 
		$('body,html').animate({
			scrollTop: $(target).offset().top, 
		}, 1000);
		$('.navbar-collapse').collapse('hide'); 
		$('.navbar-toggle').removeClass('active'); 
	});
});

$(function() { 
	$(".navbar-toggle").on("click", function () {
	$(this).toggleClass("active");
	});
});



