let active_tab_id = 0;
let isBrowserActionTaken = false;
let currentUrl;
let presentTab;
let browserActionClicked = false;
let zoomFactor;
var userId = '';

chrome.runtime.onInstalled.addListener(reason => {
  var value = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  var key = 'ocrId';
  chrome.storage.local.set({'ocrId': value}, () => {
    //console.log('Stored name: ' + value);
    userId = value;
    console.log('userId', userId);
  });
});

function getZoomInfo(number) {
  zoomFactor = number;
  console.log("the zoomfactor is:", zoomFactor);
  return zoomFactor;
}

function reddenPage() {
  function onInstallActiveTab() {
    browser.tabs.query({}, function (tabs) {
      console.log("the taburl is:", tab.url);
      for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
        if (tab && tab.active && tab.id) {
          intialTab = tab.id;
        }
      }
    });
  }
}

let disable = false;
chrome.browserAction.onClicked.addListener(function (tab) {
  console.log("the browser icon is clicked outside actiavted funciton", tab);
  disable = true;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (disable) {
      chrome.browserAction.disable(tabs[0].id, () => {
        //  console.log("it is disabled");
      });
    }
    chrome.tabs.sendMessage(
      tabs[0].id,
      { greeting: "hello", zoomFactor: zoomFactor },
      function (response) {
        chrome.browserAction.enable(tabs[0].id, () => {
          console.log("it is enabled");
        });
        disable = true;
        // console.log(response.farewell);
      }
    );
  });
});

function zoomChangeListener(zoomChangeInfo) {
  // console.log(
  //   "[ZoomDemoExtension] zoomChangeListener(tab=" +
  //     zoomChangeInfo.tabId +
  //     ", new=" +
  //     zoomChangeInfo.newZoomFactor +
  //     ", old=" +
  //     zoomChangeInfo.oldZoomFactor +
  //     ", "
  // );
  zoomFactor = zoomChangeInfo.newZoomFactor;
}

chrome.tabs.onZoomChange.addListener(zoomChangeListener);
chrome.runtime.onConnect.addListener(function (port) {
  // console.assert(port.name == "zoomFactor");
  port.onMessage.addListener(function (msg) {
    if (msg.message == "takeZoom") {
      port.postMessage({
        zoomFactor: zoomFactor,
      });
      // port.postMessage({ zoomFactor: zoomFactor });
    }
  });
});

//event to remove the app
setTimeout(() => {
  var key = 'ocrId';
  chrome.storage.local.get([key], (result) => {
    userId = result.ocrId;
  });
  setTimeout(() => {
    chrome.runtime.setUninstallURL(
      "https://docsumo.com/surveyform#userid="+userId+""
    );
  }, 1500);
}, 200);

//event listener to listen event about opening newtab for displaying message
chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name === "screenshot");
  let screenshoturl1;
  port.onMessage.addListener(function (msg) {
    if (msg.message == "takescreenshot") {
      chrome.tabs.captureVisibleTab((screenshotUrl) => {
        screenshoturl1 = screenshotUrl;
        port.postMessage({
          screenshoturl: screenshoturl1,
        });
      });
      // port.postMessage({ zoomFactor: zoomFactor });
    }
  });

  console.assert(port.name == "newtab");
  port.onMessage.addListener(function (msg) {
    if (msg.openNewTab == "yes")
      chrome.storage.local.get(["storage", "url"], function (result) {
        //console.log("Value currentlysstorage is " + typeof result);
        //console.log("value currentUrl is " + result.url);
        if (result.storage && result.url) {
          //console.log("i am in result the new tab should open", result);
          let url = chrome.runtime.getURL("newpage.html");
          chrome.tabs.create({ url });
          port.postMessage({ newtab: "opened" });
        }
      });
  });
});

chrome.tabs.onActivated.addListener((tab) => {
  console.log("the tab is activated", tab);
  chrome.tabs.getZoom(tab.id, getZoomInfo);
  let url;
  browserActionClickedCount = 0;
  presentTab = tab.tabId;
  chrome.tabs.get(tab.tabId, (current_tab_info) => {
    //console.log("the current_tab_info is:", current_tab_info.url);
    url = current_tab_info.url;
  });
  chrome.storage.local.get(["storage", "url"], function (result) {
    if (result) {
      ////console.log("the result from regex is:", result12);
      if (url && prevUrl && prevUrl != url) {
        //console.log("am clearing the storage");
        chrome.storage.local.remove(["storage", "url"], function () {
          //console.log("the storage is cleared");
          var error = chrome.runtime.lastError;
          if (error) {
            console.error(error);
          }
        });
      } else {
      }
    }
  });
  prevUrl = url;
});

/**
 * Gets the current active tab URL and opens a new tab with the same URL.
 */
function capture(btnType) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (disable) {
      chrome.browserAction.disable(tabs[0].id, () => {
        //  console.log("it is disabled");
      });
    }

    if (btnType === "regionBtn") {
      disable = true;
      // console.log("the region is clicked");
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "hello" },
        function (response) {
          disable = false;
          chrome.browserAction.enable(tabs[0].id, () => {
            //  console.log("it is disabled");
          });
          //  console.log(response.farewell);
        }
      );
    } else if (btnType === "nothing") {
      disable = true;
      console.log("the nothing is clicked");
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "cancel" },
        function (response) {
          disable = false;
          chrome.browserAction.enable(tabs[0].id, () => {
            console.log("it is enabled");
          });
          console.log(response.farewell);
        }
      );
    } else {
      disable = true;
      // console.log("the visible is clicked");
      chrome.tabs.sendMessage(
        tabs[0].id,
        { screenshoturl: "hello2" },
        function (response) {
          disable = false;
          chrome.browserAction.enable(tabs[0].id, () => {
            //  console.log("it is disabled");
          });
          //  console.log(response.farewell);
        }
      );
    }
  });
}

chrome.commands.onCommand.addListener(function (command) {
  switch (command) {
    case "capture-visible-screen":
      capture("visibleBtn");
      break;
    case "capture-cropped-screen":
      capture("regionBtn");
      break;
    case "cancel_screenshot":
      capture("nothing");
      break;
    default:
      console.log(`Command ${command} not found`);
  }
});

let id = 100;
