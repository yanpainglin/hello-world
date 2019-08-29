// preloader
jQuery(window).on('load', function(){
	jQuery("#preloader").delay(500).fadeOut("normal");
});

// menu
$(document).ready(function(){
	$(".toggle").click(function(){
		$(".nav").slideToggle("normal");
	});
});

// pricing plan
$(document).ready(function(){
	$(".package-plan").click(function(){
		$(".package-plan").removeClass("active-plan");
		$(this).addClass("active-plan");
	});
});