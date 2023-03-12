//buttons used in popup tab
var regionBtn = document.getElementById("docsumo_region");
var windowBtn = document.getElementById("docsumo_window");

//Image elements for  keeping  src
var selectedAreaIcon = document.getElementById("docsumo_selectedAreaIcon");
var visibleAreaIcon = document.getElementById("docsumo_visibleAreaIcon");

//urls for keeping src
let selectedAreaSrc = chrome.extension.getURL("images/captureSelectedArea.svg");
let visibleAreaSrc = chrome.extension.getURL("images/captureVisibleArea.svg");

//adding src to the image elements
selectedAreaIcon.src = selectedAreaSrc;
visibleAreaIcon.src = visibleAreaSrc;

//console.log("region window and windowbtn are:", regionBtn, windowBtn);
let disable = false;
let screenshoturl1;

function displayWindowPop(tabs) {
  //console.log("i am in displaywindowfunction", tabs[0].url);
  //console.log("windowWidth and windowHeight are:", screen.width, screen.height);

  if (
    tabs[0].url === "chrome://newtab/" ||
    tabs[0].url === "chrome://extensions/"
  ) {
    var myWindow = window.open(
      "",
      "docsumoWindow1",
      "top=" +
        (screen.height - 220) / 2 +
        ",left=" +
        (screen.width - 700) / 2 +
        ",width=700,height=220"
    );

    let pElem = myWindow.document.body.children;
    if (pElem[0]) {
      //console.log("pelement is:", pElem);
      myWindow.document.removeChild(pElem[0]);
      myWindow.document.removeChild(pElem[1]);
    }
    myWindow.document.write(
      "<style> p{margin:16px;font-size:20px;line-height:36px;}</style> <p>Welcome to the Docsumo Free OCR extension tool. You can run this on any webpage, except for ones where the browser restricts extensions from running scripts. This includes the Chrome web store, browser settings pages, blank_tabs and other extensions.</p>"
    );
  } else {
    //console.log("i got the tab with page");
    myWindow = window.open(
      "",
      "docsumoWindow2",
      "top=" +
        (screen.height - 200) / 2 +
        ",left=" +
        (screen.width - 700) / 2 +
        ",width=700,height=200"
    );
    let pElem = myWindow.document.body.children;
    if (pElem[0]) {
      //console.log("pelement is:", pElem);
      myWindow.document.removeChild(pElem[0]);
      myWindow.document.removeChild(pElem[1]);
    }

    myWindow.document.write(
      "<style> p{margin:16px;font-size:24px;line-height:36px;}</style> <p>Welcome to the Docsumo Free OCR extension tool. Please reload the page before using this tool.</p>"
    );
  }
}

function btnClicked(btnType) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //console.log(tabs[0]);
    if (disable) {
      chrome.browserAction.disable(tabs[0].id, () => {
        //console.log("it is disabled");
      });
    }
    disable = true;
    if (btnType === "regionBtn") {
      disable = true;
      //console.log("the region is clicked");
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "hello" },
        function (response) {
          disable = false;
          chrome.browserAction.enable(tabs[0].id, () => {
            //console.log("it is enabled");
          });

          if (!response) {
            displayWindowPop(tabs);
          } else {
            //console.log(response.farewell);
          }
        }
      );
    } else {
      disable = true;
      //console.log("the visible is clicked");
      chrome.tabs.sendMessage(
        tabs[0].id,
        { screenshoturl: "hello2" },
        function (response) {
          disable = false;
          chrome.browserAction.enable(tabs[0].id, () => {
            //console.log("it is enabled");
          });
          //console.log("the reponse is", response);
          if (!response) {
            displayWindowPop(tabs);
          } else {
            //console.log(response.farewell);
          }
        }
      );
    }
  });
}

async function loadStorage(){
  let storagePromise = new Promise((resolve) => {
    var value = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    var key = 'ocrId';
    let userId = '';
    chrome.storage.local.get([key], (result) => {
      //console.log('Retrieved name: ' + result.ocrId);
      userId = result.ocrId;
      if(userId){
        resolve(userId)
      }else{
        chrome.storage.local.set({'ocrId': value}, () => {
          //console.log('Stored name: ' + value);
          userId = value;
          resolve(userId);
        });
      }
      
    });
  })
  return storagePromise;
}

// (async function(){
// let userId = await loadStorage();
  // var app = window.app = window.app || {};
  // setTimeout(() => {
  //change the init token to production env token
  // app.analytics.init(userId);
  // app.analytics.createIdentity();
  // app.analytics.engage();
  // app.analytics.track('Launched Docsumo Free OCR Tool');
//  }, 1000);
// })();

regionBtn.onclick = async function () {
  //let userId = await loadStorage();
  // var app = window.app = window.app || {};

  // setTimeout(() => {
  //change the init token to production env token
  //app.analytics.init("8f2e53807d8237c60c560c9824fed1a6", userId);
  // app.analytics.createIdentity();
  // app.analytics.engage();
  // app.analytics.track('Capture Selected Area');
//  }, 1000);
  



  if (disable === false) btnClicked("regionBtn");
};

windowBtn.onclick = async function () {
  //let userId = await loadStorage();
  // var app = window.app = window.app || {};

  // setTimeout(() => {
  //change the init token to production env token
  //app.analytics.init("8f2e53807d8237c60c560c9824fed1a6", userId);
  // app.analytics.createIdentity();
  // app.analytics.engage();
  // app.analytics.track('Capture Visible Area');
//  }, 1000);
 
  

  if (!disable) {
    btnClicked("windowBtn");
  }
};
