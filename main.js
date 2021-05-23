$(document).ready(function(){
	var altura = $('.contenido').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.contenido').addClass('contenido-fixed');
		} else {
			$('.contenido').removeClass('contenido-fixed');
		}
	});
});