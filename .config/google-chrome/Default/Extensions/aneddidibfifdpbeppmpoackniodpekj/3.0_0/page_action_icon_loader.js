chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
	if(message.activate){
		chrome.pageAction.show(sender.tab.id);
	}
});