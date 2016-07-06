var imgs = [
  'http://i.imgur.com/oU7Dbz7.jpg',
  'http://i.imgur.com/Bz32WSD.jpg',
  'http://i.imgur.com/9sg1Z7m.jpg',
  'http://i.imgur.com/gsMw2no.jpg',
  'http://i.imgur.com/6fZEGiY.png',
  'http://i.imgur.com/hNZZBHU.jpg',
  'http://i.imgur.com/t9p7AMw.jpg'
];



$(document).ready(function(){

	alert('ednaldo pereira active!')

	// troca imagens
	$('img').each(function(e){

		if(!$(this).attr('etct'))
			$(this).attr('etct', $(this).attr('src'));
		//

		// troca por edinaldos
		var image = imgs[Math.floor((Math.random() * imgs.length-1) + 0)];
		$(this).attr('src', image);
	});



	// troca textos
	$('p, a, strong, span, i, li, b, h1, h2, h3, h5, h6, h4, code').each(function(e){

		// verifica se o elemento tem html dentro, "pula"
		if($(this).children().length > 0)
			return;

		// salva antigo
		if(!$(this).attr('etct'))
			$(this).attr('etct', $(this).text());
		//

		// calcula o tamanho do texto
		var txt 			= $(this).text();
		var txtSize 		= txt.split(' ').length;
		var ednaldosText 	= 'ednaldo pereira';

		// console.log('----', ednaldosText.length, $(this).attr('etct').length, '=' + ednaldosText.slice(0, $(this).attr('etct').length))

		// se o 'ednaldo pereira' for maior que o texto original, corta
		
		if(ednaldosText.length > $(this).attr('etct').length)
			ednaldosText = ednaldosText.slice(0, $(this).attr('etct').length);
		//
		

		$(this).text(ednaldosText);
	});

	// troca textos
});