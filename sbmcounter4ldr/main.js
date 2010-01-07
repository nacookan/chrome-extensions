(function(){
	var urls = [
		chrome.extension.getURL('hatenabookmark.js'),
		chrome.extension.getURL('livedoorclip.js')
	];
	for(var i = 0; i < urls.length; i++){
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.charset = 'utf-8';
		script.src = urls[i];
		document.body.appendChild(script);
	}
})();
