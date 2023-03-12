function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

var lang = getUrlVars().lang != null ? getUrlVars().lang : "en";

document.getElementById('wrap').classList.add('translate-' + lang);
					
					
				