/*--------------------------------------------------------------
>>> CHANNEL
--------------------------------------------------------------*/

extension.skeleton.main.layers.section.channel = {
	component: 'button',
	variant: 'channel',
	category: true,
	on: {
		click: {
			component: 'section',
			variant: 'card',

			channel_default_tab: {
				component: 'select',
				text: 'defaultChannelTab',
				options: [{
					text: 'home',
					value: '/home'
				}, {
					text: 'videos',
					value: '/videos'
				}, {
					text: 'playlists',
					value: '/playlists'
				}]
			},
			channel_trailer_autoplay: {
				component: 'switch',
				text: 'trailerAutoplay',
				value: true
			},
			channel_play_all_button: {
				component: 'switch',
				text: 'playAllButton'
			},
			channel_hide_featured_content: {
				component: 'switch',
				text: 'hideFeaturedContent'
			}
		}
	},

	icon: {
		component: 'span',

		svg: {
			component: 'svg',
			attr: {
				'viewBox': '0 0 24 24',
				'fill': 'transparent',
				'stroke': 'currentColor',
				'stroke-linecap': 'round',
				'stroke-width': '1.75'
			},

			rect: {
				component: 'rect',
				attr: {
					'width': '20',
					'height': '15',
					'x': '2',
					'y': '7',
					'rx': '2',
					'ry': '2'
				}
			},
			path: {
				component: 'path',
				attr: {
					'd': 'M17 2l-5 5-5-5'
				}
			}
		}
	},
	label: {
		component: 'span',
		text: 'channel'
	}
};