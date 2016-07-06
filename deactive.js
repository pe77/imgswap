$(document).ready(function(){

	alert('ednaldo pereira deactivated!')

	// volta imagens
	$('img').each(function(e){
		if($(this).attr('etct'))
			$(this).attr('src', $(this).attr('etct'));
		//
	});

	// volta textos
	$('p, a, span, strong, i, li, b, h1, h2, h3, h5, h6, h4, code').each(function(e){

		if($(this).attr('etct'))
			$(this).text($(this).attr('etct'));
		//
	});
});