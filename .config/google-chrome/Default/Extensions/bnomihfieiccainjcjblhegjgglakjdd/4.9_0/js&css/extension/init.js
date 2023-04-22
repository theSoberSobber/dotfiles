/*--------------------------------------------------------------
>>> INITIALIZATION
--------------------------------------------------------------*/

extension.features.youtubeHomePage('init');

document.documentElement.setAttribute('it-pathname', location.pathname);

window.addEventListener('yt-navigate-finish', function () {
	document.documentElement.setAttribute('it-pathname', location.pathname);

	extension.features.trackWatchedVideos();
	extension.features.thumbnailsQuality();
});

extension.messages.create();
extension.messages.listener();

extension.events.on('init', function (resolve) {
	extension.storage.listener();
	extension.storage.load(function () {
		resolve();
	});
}, {
	async: true
});

function bodyReady() {
	if (extension.ready && extension.domReady) {
		extension.features.addScrollToTop();
		extension.features.font();
	}
}

extension.events.on('init', function () {
	extension.features.bluelight();
	extension.features.dim();
	extension.features.youtubeHomePage();
	extension.features.collapseOfSubscriptionSections();
	extension.features.confirmationBeforeClosing();
	extension.features.defaultContentCountry();
	extension.features.popupWindowButtons();
	extension.features.markWatchedVideos();
	extension.features.relatedVideos();
	extension.features.comments();

	bodyReady();
});

chrome.runtime.sendMessage({
	action: 'tab-connected'
}, function (response) {
	if (response) {
		extension.tabId = response.tabId;
	}
});

extension.inject([
	'/js&css/web-accessible/core.js',
	'/js&css/web-accessible/functions.js',
	'/js&css/web-accessible/www.youtube.com/appearance.js',
	'/js&css/web-accessible/www.youtube.com/themes.js',
	'/js&css/web-accessible/www.youtube.com/player.js',
	'/js&css/web-accessible/www.youtube.com/playlist.js',
	'/js&css/web-accessible/www.youtube.com/channel.js',
	'/js&css/web-accessible/www.youtube.com/shortcuts.js',
	'/js&css/web-accessible/www.youtube.com/blacklist.js',
	'/js&css/web-accessible/www.youtube.com/settings.js',
	'/js&css/web-accessible/init.js',
	'/js&css/web-accessible/mutations.js'
], function () {
	extension.ready = true;

	extension.events.trigger('init');
});

document.addEventListener('DOMContentLoaded', function () {
	extension.domReady = true;

	bodyReady();
});
let prevRequestAction = "";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action === 'focus') {
		extension.messages.send({
			focus: true
		});
	} else if (request.action === 'blur') {
		extension.messages.send({
			blur: true
		});
	} else if (request.action === 'pause') {
		extension.messages.send({
			pause: true
		});
	} else if (request.action === 'set-volume') {
		extension.messages.send({
			setVolume: request.value
		});
	} else if (request.action === 'set-playback-speed') {
		extension.messages.send({
			setPlaybackSpeed: request.value
		});
	} else if (request.action === 'mixer') {
		extension.messages.send({
			mixer: true
		}, sendResponse, 'mixer');

		return true;
	} else if (request.action === 'delete-youtube-cookies') {
		extension.messages.send({
			deleteCookies: true
		});
	} else if (
		request.action === "another-video-started-playing" &&
		prevRequestAction === "new-tab-opened"
	  ) {
		console.log("Continue playing");
	  } else if (request.action === "another-video-started-playing") {
		extension.features.onlyOnePlayerInstancePlaying();
	  }
	
	  prevRequestAction = request.action;
});

document.addEventListener('it-message-from-youtube', function () {
	var provider = document.querySelector('#it-messages-from-youtube');

	if (provider) {
		var message = provider.textContent;

		document.dispatchEvent(new CustomEvent('it-message-from-youtube--readed'));

		try {
			message = JSON.parse(message);
		} catch (error) {
			console.log(error);
		}

		//console.log(message);

		if (message.requestOptionsUrl === true) {
			extension.messages.send({
				responseOptionsUrl: chrome.runtime.getURL('menu/index.html')
			});
		} else if (message.onlyOnePlayer === true) {
			chrome.runtime.sendMessage({
				name: 'only-one-player'
			});
		} else if (message.action === 'analyzer') {
			if (extension.storage.data.analyzer_activation === true) {
				var data = message.name,
					date = new Date().toDateString(),
					hours = new Date().getHours() + ':00';

				if (!extension.storage.data.analyzer) {
					extension.storage.data.analyzer = {};
				}

				if (!extension.storage.data.analyzer[date]) {
					extension.storage.data.analyzer[date] = {};
				}

				if (!extension.storage.data.analyzer[date][hours]) {
					extension.storage.data.analyzer[date][hours] = {};
				}

				if (!extension.storage.data.analyzer[date][hours][data]) {
					extension.storage.data.analyzer[date][hours][data] = 0;
				}

				extension.storage.data.analyzer[date][hours][data]++;

				chrome.storage.local.set({
					analyzer: extension.storage.data.analyzer
				});
			}
		} else if (message.action === 'blacklist') {
			var type = message.type,
				id = message.id,
				title = message.title;

			if (!extension.storage.data.blacklist || typeof extension.storage.data.blacklist !== 'object') {
				extension.storage.data.blacklist = {};
			}

			if (type === 'channel') {
				if (!extension.storage.data.blacklist.channels) {
					extension.storage.data.blacklist.channels = {};
				}

				extension.storage.data.blacklist.channels[id] = {
					title: title,
					preview: message.preview
				};
			}

			if (type === 'video') {
				if (!extension.storage.data.blacklist.videos) {
					extension.storage.data.blacklist.videos = {};
				}

				extension.storage.data.blacklist.videos[id] = {
					title: title
				};
			}

			chrome.storage.local.set({
				blacklist: extension.storage.data.blacklist
			});
		} else if (message.action === 'watched') {
			if (!extension.storage.data.watched || typeof extension.storage.data.watched !== 'object') {
				extension.storage.data.watched = {};
			}

			if (message.type === 'add') {
				extension.storage.data.watched[message.id] = {
					title: message.title
				};
			}

			if (message.type === 'remove') {
				delete extension.storage.data.watched[message.id];
			}

			chrome.storage.local.set({
				watched: extension.storage.data.watched
			});
		}
	}
});

document.addEventListener('it-play', function (event) {
	var videos = document.querySelectorAll('video');
	 try {chrome.runtime.sendMessage({action: 'play'})} 
       catch(error){console.log(error); chrome.runtime.sendMessage({action: 'play'}, function (response) { } ); }
	   });