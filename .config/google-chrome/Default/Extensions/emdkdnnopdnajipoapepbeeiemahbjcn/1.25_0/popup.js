'use strict';


// startup
document.addEventListener("DOMContentLoaded", startup);

var wikiExtEnabled = true;

function startup()
{
	// load setting
	chrome.storage.local.get(['enabled'], function(result) 
	{
		if (typeof(result.enabled) != 'undefined')
		{
			// update
			wikiExtEnabled = result.enabled == 1 ? true : false;

			// apply
			updateToggle();
		}

		// show toggle
		$("#enabled_toggle").css("display", "inline-block");
	});

	// toggle click
	$("#enabled_toggle").on("click", function() 
	{
		// switch
		wikiExtEnabled = !wikiExtEnabled;

		// update toggle
		updateToggle();
		
		// store
		chrome.storage.local.set({'enabled': (wikiExtEnabled == true ? 1 : 0)});

		// get active tab
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) 
		{
			// on wikipedia?
			if (tabs[0].url.indexOf("wikipedia.org") != -1) 
			{
				// reload tab
				chrome.tabs.reload();
			}

		});
	});
}

function updateToggle()
{
	if (wikiExtEnabled == true)
	{
		$("#enabled_toggle").addClass("toggle-selected");
	}
	else
	{
		$("#enabled_toggle").removeClass("toggle-selected");
	}
}


