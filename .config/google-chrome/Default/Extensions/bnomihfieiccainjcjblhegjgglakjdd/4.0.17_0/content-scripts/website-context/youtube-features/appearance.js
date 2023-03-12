/*------------------------------------------------------------------------------
4.2.0 APPEARANCE
------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------
4.2.1 PLAYER
------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------
4.2.1.1 PLAYER SIZE
------------------------------------------------------------------------------*/

ImprovedTube.playerSize = function () {
	if (this.storage.player_size === 'custom') {
		console.log("yes");
		var width = Number(this.storage.custom_player_size_width) || 1280,
			height = Number(this.storage.custom_player_size_height) || 720,
			style = this.elements.player_size_style || document.createElement('style');

		style.textContent = '[data-page-type="video"][it-player-size="custom"]  {';
		style.textContent += '--it-player-width:' + width + 'px;';
		style.textContent += '--it-player-height:' + height + 'px;';
		style.textContent += '}';

		document.body.appendChild(style);

		window.dispatchEvent(new Event('resize'));
	}
};


/*------------------------------------------------------------------------------
4.2.1.2 FORCED THEATER MODE
------------------------------------------------------------------------------*/

ImprovedTube.forcedTheaterMode = function () {
	if (ImprovedTube.storage.forced_theater_mode === true &&
		ImprovedTube.elements.ytd_watch &&
		ImprovedTube.elements.player
	) {
		var button = ImprovedTube.elements.player.querySelector('button.ytp-size-button');

		if (button && ImprovedTube.elements.ytd_watch.theater === false) {
			document.cookie = 'wide=1;domain=.youtube.com';

			setTimeout(function () {
				button.click();
			}, 100);
		}
	}
};


/*------------------------------------------------------------------------------
4.2.1.3 HD THUMBNAIL
------------------------------------------------------------------------------*/

ImprovedTube.playerHdThumbnail = function () {
	if (this.storage.player_hd_thumbnail === true) {
		var thumbnail = ImprovedTube.elements.player_thumbnail;

		if (thumbnail.style.backgroundImage.indexOf('/hqdefault.jpg') !== -1) {
			thumbnail.style.backgroundImage = thumbnail.style.backgroundImage.replace('/hqdefault.jpg', '/maxresdefault.jpg');
		}
	}
};


/*------------------------------------------------------------------------------
4.2.1.4 ALWAYS SHOW PROGRESS BAR
------------------------------------------------------------------------------*/

ImprovedTube.alwaysShowProgressBar = function () {
	if (this.storage.always_show_progress_bar === true) {
		var player = ImprovedTube.elements.player;

		if (player && player.className.indexOf('ytp-autohide') !== -1) {
			var played = player.getCurrentTime() * 100 / player.getDuration(),
				loaded = player.getVideoBytesLoaded() * 100,
				play_bars = player.querySelectorAll('.ytp-play-progress'),
				load_bars = player.querySelectorAll('.ytp-load-progress'),
				width = 0,
				progress_play = 0,
				progress_load = 0;

			for (var i = 0, l = play_bars.length; i < l; i++) {
				width += play_bars[i].offsetWidth;
			}

			var width_percent = width / 100;

			for (var i = 0, l = play_bars.length; i < l; i++) {
				var a = play_bars[i].offsetWidth / width_percent,
					b = 0,
					c = 0;

				if (played - progress_play >= a) {
					b = 100;
				} else if (played > progress_play && played < a + progress_play) {
					b = 100 * ((played - progress_play) * width_percent) / play_bars[i].offsetWidth;
				}

				play_bars[i].style.transform = 'scaleX(' + b / 100 + ')';

				if (loaded - progress_load >= a) {
					c = 100;
				} else if (loaded > progress_load && loaded < a + progress_load) {
					c = 100 * ((loaded - progress_load) * width_percent) / play_bars[i].offsetWidth;
				}

				load_bars[i].style.transform = 'scaleX(' + c / 100 + ')';

				progress_play += a;
				progress_load += a;
			}
		}
	}
};


/*------------------------------------------------------------------------------
4.2.1.5 VIDEO REMAINING DURATION
------------------------------------------------------------------------------*/

ImprovedTube.formatSecond = function (rTime) {
	var time = new Date(null);
	if (this.storage.duration_with_speed === true) {
        var playbackRate = this.elements.video.playbackRate;
        time.setSeconds(rTime / playbackRate);
    } else {
        time.setSeconds(rTime);
    }

	if (rTime / 3600 < 1) {
		return time.toISOString().substr(14, 5);
	} else {
		return time.toISOString().substr(11, 8);
	}
}

ImprovedTube.playerRemainingDuration = function () {
	var element = document.querySelector('.ytp-time-remaining-duration');
	if (this.storage.player_remaining_duration === true) {
		var player = ImprovedTube.elements.player;
		var rTime = ImprovedTube.formatSecond((player.getDuration() - player.getCurrentTime()).toFixed(0));
		if (!element) {
			var label = document.createElement('span');
			label.textContent = ' (-' + rTime + ')';
			label.className = 'ytp-time-remaining-duration';
			document.querySelector('.ytp-time-display').appendChild(label);
		} else {
			element.textContent = ' (-' + rTime + ')';
		}
	} else if (element) {
		element.remove();
	}
};


/*------------------------------------------------------------------------------
4.2.2 SIDEBAR
------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------
4.2.2.1 LIVECHAT
------------------------------------------------------------------------------*/

ImprovedTube.livechat = function () {
	if (this.storage.livechat === 'collapsed') {
		ImprovedTube.elements.livechat.button.click();
	}
};


/*------------------------------------------------------------------------------
4.2.3 DETAILS
------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------
4.2.3.1 HOW LONG AGO THE VIDEO WAS UPLOADED
------------------------------------------------------------------------------*/

ImprovedTube.howLongAgoTheVideoWasUploaded = function () {
	if (this.storage.how_long_ago_the_video_was_uploaded === true && this.elements.yt_channel_name) {
		var xhr = new XMLHttpRequest(),
			key = this.storage['google-api-key'] || ImprovedTube.defaultApiKey,
			id = this.getParam(location.href.slice(location.href.indexOf('?') + 1), 'v');

		function timeSince(date) {
			var seconds = Math.floor((new Date() - new Date(date)) / 1000),
				interval = Math.floor(seconds / 31536000);

			if (interval > 1) {
				return interval + ' years ago';
			}
			interval = Math.floor(seconds / 2592000);
			if (interval > 1) {
				return interval + ' months ago';
			}
			interval = Math.floor(seconds / 86400);
			if (interval > 1) {
				return interval + ' days ago';
			}
			interval = Math.floor(seconds / 3600);
			if (interval > 1) {
				return interval + ' hours ago';
			}
			interval = Math.floor(seconds / 60);
			if (interval > 1) {
				return interval + ' minutes ago';
			}

			return Math.floor(seconds) + ' seconds ago';
		}

		xhr.addEventListener('load', function () {
			var response = JSON.parse(this.responseText),
				element = ImprovedTube.elements.how_long_ago_the_video_was_uploaded || document.createElement('div');

			ImprovedTube.empty(element);

			if (response.error) {
				element.appendChild(document.createTextNode('• Error: ' + response.error.code));
			} else {
				element.appendChild(document.createTextNode('• ' + timeSince(response.items[0].snippet.publishedAt)));
			}

			element.className = 'it-how-long-ago-the-video-was-uploaded';

			ImprovedTube.elements.how_long_ago_the_video_was_uploaded = element;

			document.querySelector('#info #info-text').appendChild(element);
		});

		xhr.open('GET', 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=' + key, true);
		xhr.send();
	}
};


/*------------------------------------------------------------------------------
4.2.3.2 SHOW CHANNEL VIDEOS COUNT
------------------------------------------------------------------------------*/

ImprovedTube.channelVideosCount = function () {
    if (this.storage.channel_videos_count === true && this.elements.yt_channel_link) {
        var key = this.storage['google-api-key'] || ImprovedTube.defaultApiKey;
        if (this.elements.yt_channel_link.href.indexOf('/channel/') == -1) {
            var xhr = new XMLHttpRequest(),
                id = this.getParam(location.href.slice(location.href.indexOf('?') + 1), 'v');

            xhr.open('GET', 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + id + '&key=' + key, false);
            xhr.send();
            var response = JSON.parse(xhr.responseText);
            id = response.items[0].snippet.channelId;
        } else {
            id = this.elements.yt_channel_link.href.slice(this.elements.yt_channel_link.href.indexOf('/channel/') + '/channel/'.length);
            if (id.indexOf('/') !== -1) {
                id = id.match(/.+?(?=\/)/)[0];
            }
        }

        xhr = new XMLHttpRequest();

        xhr.addEventListener('load', function () {
            var response = JSON.parse(this.responseText),
                parent = document.querySelector('#meta ytd-channel-name + yt-formatted-string'),
                element = ImprovedTube.elements.channel_videos_count || document.createElement('div');

            ImprovedTube.empty(element);

            if (response.error) {
                element.appendChild(document.createTextNode('• Error: ' + response.error.code));
            } else {
                element.appendChild(document.createTextNode('• ' + response.items[0].statistics.videoCount + ' videos'));
            }

            element.className = 'it-channel-videos-count';

            ImprovedTube.elements.channel_videos_count = element;

            parent.appendChild(element);

            ImprovedTube.elements.channel_videos_count = element;
        });


        xhr.open('GET', 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + id + '&key=' + key, true);
        xhr.send();
    }
};

/*------------------------------------------------------------------------------
4.2.3.3 DESCRIPTION
------------------------------------------------------------------------------*/

ImprovedTube.description = function (el) {
    if (this.storage.description === 'expanded') {
        el.click();
    }
};

 /*------------------------------------------------------------------------------
4.2.3.4 HIDE DETAIL BUTTON
------------------------------------------------------------------------------*/

ImprovedTube.hideDetailButton = function (el) {
    setTimeout(function () {
        for (var i = 2; i < el.length; i++) {
            tmp = el[i].querySelector("g.yt-icon path").attributes.d.textContent.split(" ")[0];
            if (tmp === "M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z") {
                el[i].setAttribute('id', 'Save-button');
            }
            else if (tmp === "M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z") {
                el[i].setAttribute('id', 'Clip-button');
            }
            else if (tmp === "M16.5,3C19.02,3,21,5.19,21,7.99c0,3.7-3.28,6.94-8.25,11.86L12,20.59l-0.74-0.73l-0.04-0.04C6.27,14.92,3,11.69,3,7.99") {
                el[i].setAttribute('id', 'Thanks-button');
            }
            else if (tmp === "M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18") {
                el[i].setAttribute('id', 'Report-button');
            }
            else if (tmp === "M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63") {
                el[i].setAttribute('id', 'Share-button');
            }
        }
    }, 30);
};

/*--------------------------------------------------------------
4.2.3.5 DAY OF WEEK
--------------------------------------------------------------*/

ImprovedTube.dayOfWeek = function () {
	var element = document.querySelector('.ytd-day-of-week');
	if (this.storage.day_of_week === true) {
		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
		setTimeout (function () {
			var videoDate = document.querySelector('[itemprop=datePublished]').content;
			var tempDate = new Date(videoDate);
			if (!element) {
				var label = document.createElement('span');
				label.textContent = " , " + days[tempDate.getDay() + 1];
				label.className = 'ytd-day-of-week';
				document.querySelector('ytd-video-primary-info-renderer #info #info-strings yt-formatted-string').append(label);
			} else {
				element.textContent = days[tempDate.getDay() + 1] + ", ";
			}
		}, 25);
	} else if (element) {
		element.remove();
	}
}