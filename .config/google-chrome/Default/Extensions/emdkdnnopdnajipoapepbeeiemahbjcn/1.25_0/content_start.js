(function() {
	"use strict";

	// get bg color
	var bg_color = "#fff";
	var bg_dark = false;

	// get local storage value
	if (localStorage.getItem("bg_color") != null) {
		bg_color = localStorage.getItem("bg_color");
	}
	if (localStorage.getItem("bg_dark") != null) {
		bg_dark = localStorage.getItem("bg_dark");
	}

	// get image url
	var image_url = "images/logo-text.png";
	if ((typeof(chrome) != 'undefined') && (typeof(chrome.runtime) != 'undefined')) {
		image_url = chrome.runtime.getURL(image_url);
	}

	// get css
	var image_css = "background: transparent url('"+image_url+"') no-repeat 50% 50%; background-size:150px;"

	if (bg_dark == 'true') {
		image_css += " filter:invert(90%); opacity:0.8;";
	}

	// create overlay
	var loading_wrap = document.createElement('div');
	loading_wrap.id = "wiki_loading";
	loading_wrap.style.cssText = 'position:fixed; width:100%; height:100%; left:0px; top:0px; z-index:20000; background:'+bg_color;

	// create overlay inner
	var loading_inner = document.createElement('div');
	loading_inner.style.cssText = 'position:absolute; width:100%; height:100%; left:0px; top:0px; '+image_css;
	loading_wrap.appendChild(loading_inner);

	// add observer
	var observer = new MutationObserver(function() 
	{
		// body available?
		if (document.body) 
		{
			// add loading wrap
			document.body.appendChild(loading_wrap);

			// add image
		//	var loading_image = document.createElement('img');
		//	loading_image.src = image_url;
		//	loading_wrap.appendChild(loading_image);

			// remove observer
			observer.disconnect();
		}
	});
	observer.observe(document.documentElement, {childList: true});

	// load setting
	chrome.storage.local.get(['enabled'], function(result) 
	{
		// disabled?
		if ((typeof(result.enabled) != 'undefined') && (result.enabled == 0))
		{
			// remove observer
			observer.disconnect();

			// remove loading overlay
			var div = document.getElementById("wiki_loading");
			div.parentNode.removeChild(div);
		}
	});
})();
