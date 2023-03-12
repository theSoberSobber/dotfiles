/*--------------------------------------------------------------
>>> INDEX:
----------------------------------------------------------------
# Global variable
# Initialization
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# GLOBAL VARIABLE
--------------------------------------------------------------*/

var extension = {
	skeleton: {}
};


/*--------------------------------------------------------------
# INITIALIZATION
--------------------------------------------------------------*/

satus.storage.import(function (items) {
	var language = items.language;

	if (!language || language === 'default') {
		language = window.navigator.language;
	}

	satus.locale.import(language, function () {
		satus.render(extension.skeleton);

		extension.exportSettings();
		extension.importSettings();

		satus.parentify(extension.skeleton, [
			'attr',
			'baseProvider',
			'layersProvider',
			'rendered',
			'storage',
			'parentObject',
			'parentSkeleton',
			'childrenContainer',
			'value'
		]);

		extension.attributes();
	}, '_locales/');

	satus.events.on('storage-set', extension.attributes);
});

chrome.runtime.sendMessage({
	action: 'options-page-connected'
}, function (response) {
	if (response.isTab) {
		document.body.setAttribute('tab', '');
	}
});