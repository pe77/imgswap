var pageOn = [];

chrome.browserAction.onClicked.addListener(function(tab) {
  
  chrome.tabs.executeScript({file: 'jquery.js'}); // add jquery na pagina
  
  // verifica se já esta ativo aqui
  var exist = pageOn.indexOf(tab.url) > -1;

  // se não existe, ativa
  if(!exist)
  {
  	pageOn.push(tab.url); // salva a referencia
  	chrome.tabs.executeScript({file: 'active.js'});
  }
  else
  {
  	pageOn.splice(pageOn.indexOf(tab.url), 1); // remove a referencia
  	chrome.tabs.executeScript({file: 'deactive.js'});
  }
  // */
  
});
