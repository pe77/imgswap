$(document).ready(function(){

	console.log('SUP CARREGADO')
	$('img').attr('src', 'http://i.imgur.com/Q6cd1ug.gif');
	return;
	
	function imageUpdate()
	{
		$('img').attr('src', 'http://i.imgur.com/Q6cd1ug.gif');
	}


	$('body').bind("DOMSubtreeModified",function(){
  		imageUpdate()
	});
});