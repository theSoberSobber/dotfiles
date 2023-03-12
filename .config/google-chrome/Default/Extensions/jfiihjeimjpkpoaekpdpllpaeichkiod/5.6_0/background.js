var addedFabric = {};
chrome.action.onClicked.addListener((tab) => {
    if (addedFabric[tab.id] == null || !addedFabric[tab.id]) {
      addedFabric[tab.id] = true;
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['fabric.min.js']
      }, function() {
        addMarker(tab);
      });
    } else {
      addMarker(tab);
    }
});

function addMarker(tab) {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['marker.js']
  }).catch(error => {
    var w = 440;
    var h = 160;
    chrome.windows.create({
      focused: true,
      width: w,
      height: h,
      type: 'popup',
      url: 'popup.html',
      top: 0,
      left: 0
    });
  });
  chrome.scripting.insertCSS({
    target: {tabId: tab.id},
    files: ['main.css']
  });
}

chrome.tabs.onUpdated.addListener(function(tabId) {
  addedFabric[tabId] = false;
});

chrome.tabs.onRemoved.addListener(function(tabId) {
  delete addedFabric[tabId];
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.from == 'content_script') {
    chrome.tabs.captureVisibleTab(null, {}, function (image) {
      sendResponse({screenshot: image});
    });
  }
  return true;
});

chrome.runtime.onInstalled.addListener(function (details) {
  if(details.reason == "install"){
    chrome.tabs.create({url: "https://pagemarker.org/installed"});
  }
});

chrome.runtime.setUninstallURL("https://pagemarker.org/redirect/uninstall");