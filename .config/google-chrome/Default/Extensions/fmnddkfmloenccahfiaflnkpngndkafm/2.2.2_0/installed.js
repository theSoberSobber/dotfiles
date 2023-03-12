var VERSION = '0.1.6';

// Insert a div that says we already have the extension
// installed
var div = document.createElement('div');
div.id = 'wrapapi-extension-is-installed';
div.setAttribute('data-version', VERSION);
div.style.display = 'none';
document.body.appendChild(div);
