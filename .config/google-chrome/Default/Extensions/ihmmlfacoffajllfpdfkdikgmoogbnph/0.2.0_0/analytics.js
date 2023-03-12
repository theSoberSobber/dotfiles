;(function (window) {
	var api = 'https://api.mixpanel.com';
	var app = window.app = window.app || {};

	var mixpanel = {}; 
	function init(userId) {
		// mixpanel.token = 'a8f24eb53f144f4a717a15e9fe167c30'; //changes to testing token when ran locally
        // mixpanel.distinct_id = userId;
	}
    // function createIdentity() {
	// 	var payload = {
    //         event: "Identify",
    //         properties:{
    //             token: mixpanel.token,
    //             identified_id: mixpanel.distinct_id,
    //         }
			
	// 	};

	// 	var data = window.base64(JSON.stringify(payload));
	// 	var url = api + '/track#create-identity';

	// 	$.post(url, {data});
	// }

	function track(event, time) {
		var payload = {
			event: event,
			properties: {
				token: mixpanel.token,
                distinct_id: mixpanel.distinct_id,
                email: mixpanel.distinct_id,
                name: mixpanel.distinct_id,
				response_time: time 
			}
		};
console.log('dasdasdasdsa', JSON.stringify(payload));
		var data = window.base64(JSON.stringify(payload));
		var url = api + '/track#live-event';

		$.post(url, { data });
	}
	// function engage() {
	// 	var payload = {
	// 		token: mixpanel.token,
    //         distinct_id: mixpanel.distinct_id,
    //         set:{
    //             email: mixpanel.distinct_id,
    //             name: mixpanel.distinct_id,
    //         }
	// 	};

	// 	var data = window.base64(JSON.stringify(payload));
	// 	var url = api + '/engage#profile-set';

	// 	$.post(url, {data});
	// }

	app.analytics = {
		init: init,
		track: track,
        // engage: engage,
        // createIdentity: createIdentity
	};

})(window);