var overlay,
  tooltip,
  croppedCanvasUrl,
  file,
  cloudinaryUrl,
  convertedText,
  imageUrl,
  mouseIsDown,
  isDragging,
  tookScreenShot,
  mouseIsDown,
  isDragging,
  tookScreenShot,
  docsumoErrorMsg,
  responseStatus,
  newTabErrStatus = true,
  newTabErrMsg = "There must be screenshot captured to enable this button.",
  zoomFactor;

//buttons used in popup tab
var closeBtn = document.getElementById("docsumo_closeBtn");
var recapture = document.getElementById("docsumo_reCaptureBtn");
var docsumoLoader = document.getElementById("docsumo_docsumo_loader");
var googleTranslate = document.getElementById("docsumo_googleTranslateBtn");

//element containing the converted text
var copyText = document.getElementById("docsumo_myInput");

//element showcasing the errorMsg
docsumoErrorMsg = document.getElementById("docsumo_errorMsg");

//Image elements for  keeping  src
var nextTabIcon = document.getElementById("docsumo_nextTabIcon");
var infoIcon = document.getElementById("docsumo_infoIcon");
var closeIcon = document.getElementById("docsumo_closeIcon");
var recaptureIcon = document.getElementById("docsumo_recaptureIcon");
var googleTranslateIcon = document.getElementById(
  "docsumo_googleTranslateIcon"
);

var copyTextIcon = document.getElementById("docsumo_copyTextIcon");

//urls for keeping src
let nextTabIconSrc = chrome.extension.getURL("images/nextTab.svg");
let infoIconSrc = chrome.extension.getURL("images/infoIcon.svg");
let closeIconSrc = chrome.extension.getURL("images/closeIcon.svg");
let recaptureSrc = chrome.extension.getURL("images/ic_refresh.svg");
let copyTextIconSrc = chrome.extension.getURL("images/copytexticon.svg");
let googleTranslateIconSrc = chrome.extension.getURL("images/translate.svg");

//adding src to the image elements
nextTabIcon.src = nextTabIconSrc;
infoIcon.src = infoIconSrc;
closeIcon.src = closeIconSrc;
recaptureIcon.src = recaptureSrc;
copyTextIcon.src = copyTextIconSrc;
googleTranslateIcon.src = googleTranslateIconSrc;

//using google translate url to transfer converted text using ocr to use its other features
googleTranslate.onclick = function () {
  if (!copyText.value) {
    //  //console.log("there is no text in text box");
  } else {
    window.open(
      `https://translate.google.com/?text=${copyText.value}`,
      "_blank"
    );
  }
};

recapture.onclick = function () {
  copyText.style.color = "#212121";
  copyText.innerHTML = "";
  copyText.value = "";
  docsumoLoader.style.display = "block";
  newTabErrMsg = "There must be screenshot captured to enable this button.";
  newTabErrStatus = true;
  document.getElementById("docsumo_screenshot").style.display = "block";
  ////console.log("i recapature the button",this.isDragging,this.mouseIsDown,this.borderWidth);
  closeForm();
};

var textToCopyBtn = document.getElementById("docsumo_textInCpyBtn");

textToCopyBtn.onclick = function () {
  ////console.log("i am in copy button");
  var textCopy = document.getElementById("docsumo_textCopy");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  textCopy.innerHTML = "Copied!";
  setTimeout(function () {
    textCopy.innerHTML = "Copy Text";
  }, 4000);
};

function outFunc() {
  var tooltip = document.getElementById("docsumo_myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

function showCaseErrorMsg(msg, color) {
  docsumoErrorMsg.innerHTML = msg;
  docsumoErrorMsg.style.color = color;
  setTimeout(function () {
    docsumoErrorMsg.innerHTML = "";
    docsumoErrorMsg.style.color = "red";
  }, 3000);
  return;
}

//opening to new tab  on clicking the newtab button
document.getElementById("docsumo_newPage").onclick = async function (el) {
  setTimeout(function () {
    if (newTabErrStatus) {
      // console.log("the newTAbmsg is:", newTabErrMsg);
      showCaseErrorMsg(newTabErrMsg);
    } else {
      window.open(
        `https://docsumo.com/ocr-chrome-extension?url=${cloudinaryUrl}`,
        "_blank"
      );
    }
  }, 600);
};

//closing the popup on clicking to the close button

document.getElementById("docsumo_closeBtn").onclick = function (el) {
  ////console.log("i closed the button",this.isDragging,this.mouseIsDown,this.borderWidth);
  //document.getElementById("docsumo_screenshot").remove();
  //document.getElementById("docsumo_myForm").remove();
  closeForm();
};

async function openForm(url) {
  ////console.log("i am in openform");
  document.getElementById("docsumo_myForm").style.display = "flex";
  document.querySelector(".docsumo_cloudinary").src = url;
}

async function closeForm() {
  ////console.log("i am in closeForm");
  newTabErrMsg = "There must be screenshot captured to enable this button.";
  newTabErrStatus = true;
  document.getElementById("docsumo_myForm").style.display = "none";
}

async function convertingImgUrlToblob(url) {
  await fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      // Do something with your data
      try {
        file = new File([blob], "screenshot.png");
        ////console.log("the file is:", file);
        apicall(file);
      } finally {
        //   firsttoolcard.style.display='none';
      }
    })
    .catch((err) => {
      ////console.log(err);
    });
}
async function loadStorage(){
  let storagePromise = new Promise((resolve) => {
    var key = 'ocrId';
    let userId = '';
    chrome.storage.local.get([key], (result) => {
      // console.log('Retrieved name: ' + result.ocrId);
      userId = result.ocrId;
      if(userId){
        resolve(userId)
      }
    });
  })
  return storagePromise;
}

async function apicall(file) {
  let userId = await loadStorage();
  var app = window.app = window.app || {};
  newTabErrMsg = "Please wait till your document getting processed!";
  responseStatus = false;
  var formData = new FormData();
  // const apiUrl1 = "https://api.cloudinary.com/v1_1/docsumovideo/image/upload";
  const apiUrl = "https://ocrserver.docsumo.com/api/v1/ocr/extract/";
  let apiRes1;
  formData.append("file", file);
  try {
    let t0 = performance.now();
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        token: "d057850c-855a-4920-9ff0-14269030578c",
      },
      body: formData,
    })
      .then((response) => {
        //console.log("the response is:", response.status);
        responseStatus = response.status;
        return response.text();
      })
      .then((data) => {
        //console.log("the responseStatus is:", responseStatus);
        if (responseStatus === 200) {
          let t1 = performance.now();
          newTabErrStatus = false;
          apiRes1 = JSON.parse(data);
          //console.log("the response  is:", apiRes1);
          ////console.log("the response typeof is:", typeof apiRes1);
          
          setTimeout(() => {
          //change the init token to production env token
          // app.analytics.init(userId);
          // app.analytics.track('OCR extract successful', (t1-t0)/1000);
        }, 200);
          chrome.storage.local.set(
            { storage: "success", url: apiRes1.image_url },
            function () {}
          );
          cloudinaryUrl = apiRes1.image_url;
          docsumoLoader.style.display = "none";
          copyText.innerHTML = apiRes1.data;
          convertedText = apiRes1.data;
          ////console.log("the converted text is:", convertedText);
          ////console.log("the type is:", typeof convertedText);
          if (convertedText === "") {
            setTimeout(() => {
              //change the init token to production env token
              // app.analytics.init(userId);
              // app.analytics.track('OCR extract successful but no text in image', (t1-t0)/1000);
            }, 200);
            convertedText =
              "The image doesn't contain any text. Please recapture the image that contains text.";
            copyText.style.color = "red";
          }

          newTabErrStatus = false;
        } else if (responseStatus === 429) {
          let t1 = performance.now();
          setTimeout(() => {
            //change the init token to production env token
            // app.analytics.init(userId);
            // app.analytics.track('Request Limit Exceeded. OCR failed', (t1-t0)/1000);
          }, 200);
          newTabErrStatus = true;
          newTabErrMsg =
            "The button is disabled till the serivce is reactivated.";
          docsumoLoader.style.display = "none";
          copyText.style.color = "red";
          convertedText =
            "We allow 15 screenshot per day. Please try again after a day.";
        }

        copyText.value = convertedText;
        //console.log("the data is:", data);
      })
      .catch((error) => {
        let t1 = performance.now();
        //console.log("the error is", error);
        //console.log("the error is:", typeof error);
        setTimeout(() => {
          //change the init token to production env token
          // app.analytics.init(userId);
          // app.analytics.track('OCR extract failed', (t1-t0)/1000);
        }, 200);
        serverErr = error;
        convertedText = "An error has occurred. Sorry for inconvenience!";
        newTabErrStatus = true;
        newTabMsg = "The button is disabled due to some internal server error.";
      });
  } finally {
    ////console.log("i am in the finally");
  }
}

var TOOLTIP_MARGIN = window
  .getComputedStyle(document.querySelector(".docsumo_tooltipDocsumo"))
  .margin.split("px")[0];

var screenshot = new Vue({
  el: "#docsumo_screenshot",

  data: {
    mouseIsDown: false,
    isDragging: false,
    tookScreenShot: false, // After the mouse is released

    // Used to calculate where to start showing the dragging area

    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,

    borderWidth: "",

    // Handling the positioning of the crosshairs
    crossHairsLeft: 0,
    crossHairsTop: 0,

    // The box that contains the border and all required numbers.
    boxTop: 0,
    boxLeft: 0,
    boxEndWidth: 0,
    boxEndHeight: 0,

    // The tooltip's required positioning numbers.
    toolTipLeft: 0,
    toolTipTop: 0,
    toolTipWidth: 0,
    toolTipHeight: 0,

    windowHeight: 0,
    windowWidth: 0,

    scrollWidth: 0,
    //scrollHeight: 0,
    zoomFactor1: 0,
    newTabErrMsg,
  },

  mounted: function () {
    crosshairs = document.querySelector(".docsumo_crosshairs");
    overlay = document.querySelector(".docsumo_overlay");
    tooltip = document.querySelector(".docsumo_tooltipDocsumo");

    var self = this;

    this.windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    this.windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    ////console.log("the windowwidth and windowheight are", this.windowWidth,this.windowHeight);
    this.toolTipWidth = tooltip.getBoundingClientRect().width;

    // To recalculate the width and height if the screen size changes.
    window.onresize = function () {
      self.windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      self.windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      // self.scrollHeight =
      //   document.documentElement.scrollHeight || document.body.scrollHeight;
    };
  },

  methods: {
    move: function (e) {
      // var port = chrome.runtime.connect({ name: "zoomFactor" });
      // port.postMessage({ message: "takeZoom" });
      // port.onMessage.addListener(function (msg) {
      //   this.zoomFactor1 = msg.zoomFactor;

      //   console.log("zoomfactor", msg.zoomFactor);
      // });
      this.crossHairsTop = e.clientY;
      this.crossHairsLeft = e.clientX;
      //////console.log('the crossHarisTop and crossharisleft are:',this.crossHairsTop,this.crossHairsLeft);
      var tooltipBoundingRect = tooltip.getBoundingClientRect();

      this.toolTipWidth = tooltipBoundingRect.width;
      this.toolTipHeight = tooltipBoundingRect.height;
      // ////console.log('the tooltipBoundingRect is',tooltipBoundingRect);

      /*
       * Change how the borderWidth is being calculated based on the x and y values.
       * Calculate the box with the 1px border's positioning and width
       * Calculate the positioning of the tooltip */

      if (this.mouseIsDown) {
        // //console.log("the zoomFactor is:", zoomFactor1);
        var endY = (this.endY = e.clientY),
          endX = (this.endX = e.clientX),
          startX = this.startX,
          startY = this.startY,
          windowWidth = this.windowWidth,
          windowHeight = this.windowHeight;

        // //console.log(
        //   "the endy endx startx starty widndwoWidth windowHeight",
        //   endY,
        //   endX,
        //   startX,
        //   startY,
        //   windowWidth,
        //   windowHeight
        // );
        let scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        // //console.log(
        //   "the scrollHeight and windowHeight are:",
        //   scrollHeight,
        //   this.windowHeight
        // );
        if (scrollHeight > this.windowHeight) {
          let screenWidth = screen.width;
          screenWidth = screen.width / this.windowWidth;
          //  console.log("zoomfactor is:", screenWidth);
          this.scrollWidth = 15 / screenWidth;
          // //console.log("the scrool width is:", this.scrollWidth);
        } else {
          this.scrollWidth = 0;
        }
        // Calculating the values differently depending on how the user start's dragging.
        if (endX >= startX && endY >= startY) {
          this.isDragging = true;

          this.borderWidth =
            startY +
            "px " +
            (windowWidth - endX - this.scrollWidth) +
            "px " +
            (windowHeight - endY) +
            "px " +
            startX +
            "px";

          this.boxTop = startY;
          this.boxLeft = startX;
          this.boxEndWidth = endX - startX;
          this.boxEndHeight = endY - startY;

          // //console.log(
          //   "the boxtop and boxleft boxendwidth and boxendheight are:",
          //   this.boxTop,
          //   this.boxLeft,
          //   this.boxEndWidth,
          //   this.boxEndHeight
          // );

          // //console.log("the borderWidth is", this.borderWidth);

          this.toolTipLeft = endX + 10;
          this.toolTipTop = endY + 10;

          if (endX + this.toolTipWidth >= windowWidth) {
            this.toolTipLeft =
              windowWidth - this.toolTipWidth - TOOLTIP_MARGIN * 2;
          }

          if (endY + this.toolTipHeight + TOOLTIP_MARGIN * 2 >= windowHeight) {
            this.toolTipTop =
              windowHeight - this.toolTipHeight - TOOLTIP_MARGIN * 2;
          }
        } else if (endX <= startX && endY >= startY) {
          this.isDragging = true;

          this.borderWidth =
            startY +
            "px" +
            (windowWidth - startX - this.scrollWidth) +
            "px" +
            (windowHeight - endY) +
            "px" +
            endX +
            "px";

          this.boxLeft = endX;
          this.boxTop = startY;
          this.boxEndWidth = startX - endX;
          this.boxEndHeight = endY - startY;

          this.toolipLeftT = endX - this.toolTipWidth;
          this.toolipLeftT = startX;
          this.toolTipTop = endY;

          if (endX - this.toolTipWidth <= 0) {
            this.toolTipLeft = TOOLTIP_MARGIN;
          }

          if (endY + this.toolTipHeight + TOOLTIP_MARGIN * 2 >= windowHeight) {
            this.toolTipTop =
              windowHeight - this.toolTipHeight - TOOLTIP_MARGIN * 2;
          }
        } else if (endX >= startX && endY <= startY) {
          this.isDragging = true;

          this.boxLeft = startX;
          this.boxTop = endY;
          this.boxEndWidth = endX - startX;
          this.boxEndHeight = startY - endY;

          this.toolTipLeft = endX;
          this.toolTipTop = endY - this.toolTipHeight;

          this.borderWidth =
            endY +
            "px " +
            (windowWidth - endX - this.scrollWidth) +
            "px " +
            (windowHeight - startY) +
            "px " +
            startX +
            "px";

          if (endX + this.toolTipWidth >= windowWidth) {
            this.toolTipLeft =
              windowWidth - this.toolTipWidth - TOOLTIP_MARGIN * 2;
          }

          if (endY - this.toolTipHeight <= 0) {
            this.toolTipTop = TOOLTIP_MARGIN;
          }
        } else if (endX <= startX && endY <= startY) {
          this.isDragging = true;

          this.boxLeft = endX;
          this.boxTop = endY;
          this.boxEndWidth = startX - endX;
          this.boxEndHeight = startY - endY;

          this.borderWidth =
            endY +
            "px " +
            (windowWidth - startX - this.scrollWidth) +
            "px " +
            (windowHeight - startY) +
            "px " +
            endX +
            "px";

          this.toolTipLeft = endX - this.toolTipWidth;
          this.toolTipTop = endY - this.toolTipHeight;

          if (endX - this.toolTipWidth <= 0) {
            this.toolTipLeft = TOOLTIP_MARGIN;
          }

          if (endY - this.toolTipHeight <= 0) {
            this.toolTipTop = TOOLTIP_MARGIN;
          }
        } else {
          this.isDragging = false;
        }
        ////console.log( "from mousedown part boxLeft,boxTop,boxEndWidth,boxendheight", this.boxLeft,this.boxTop, this.boxEndWidth,this.boxEndHeight);
      }
    },

    mouseDown: function (e) {
      this.borderWidth = this.windowWidth + "px " + this.windowHeight + "px";

      this.startX = e.clientX;
      this.startY = e.clientY;
      ////console.log("the positon of startX and startY are", this.startX, this.startY);
      this.toolTipWidth = tooltip.getBoundingClientRect().width;

      this.mouseIsDown = true;
      this.tookScreenShot = false;
    },

    mouseUp: async function (e) {
      this.mouseIsDown = false;
      if (this.isDragging) {
        // Don't take the screenshot unless the mouse moved somehow.
        this.tookScreenShot = true;
      }

      ////console.log("the dragging status before taking capture shot is:",this.isDragging);

      this.isDragging = false;
      ////console.log("the dragging status is:", this.isDragging);

      this.takeScreenshot();
    },

    takeScreenshot: async function () {
      let boxLeft = this.boxLeft;
      let boxTop = this.boxTop;
      let boxEndHeight = this.boxEndHeight;
      let boxEndWidth = this.boxEndWidth;
      let userId = await loadStorage();
      var app = window.app = window.app || {};

      ////console.log(  "the datas startx starty boxEndHeight boxEndWidth are:",  this.boxLeft,  this.boxTop,this.boxEndHeight,this.boxEndWidth );
      if (boxEndWidth < 50 && boxEndHeight < 50) {
        setTimeout(() => {
          //change the init token to production env token
          // app.analytics.init(userId);
          // app.analytics.track('Small screenshot less than 50px * 50px error');
        }, 1500);
        document.getElementById("docsumo_screenshot").style.display = "none";
        convertedText =
          "Please recapture the screenshot not less than the size of 50x50px.";
        copyText.style.color = "red";
        copyText.value = convertedText;
        docsumoLoader.style.display = "none";

        openForm();
      } else {
        var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
        let canvas = document.createElement("canvas");

        // Set actual size in memory (scaled to account for extra pixel density).
        canvas.width = this.boxEndWidth * scale;
        canvas.height = this.boxEndHeight * scale;

        //////console.log('the croppedCanvasurl is:',canvas.toDataURL());
        let croppedCanvasContext = canvas.getContext("2d");
        // croppedCanvas.width = this.boxEndWidth * window.devicePixelRatio;
        // croppedCanvas.height = this.boxEndHeight * window.devicePixelRatio;

        // Normalize coordinate system to use css pixels.
        croppedCanvasContext.scale(scale, scale);

        document.getElementById("docsumo_screenshot").style.display = "none";

        setTimeout(function () {
          ////console.log("the image url is:", this.imageUrl);

          var port = chrome.runtime.connect({ name: "screenshot" });
          port.postMessage({ message: "takescreenshot" });
          port.onMessage.addListener(function (msg) {
            this.imageUrl = msg.screenshoturl;
            //  console.log("took screenshot", this.imageUrl);
          });

          setTimeout(function () {
            var myImg = new Image();
            myImg.src = this.imageUrl;
            //console.log("zoomFactor1 is:", zoomFactor1);
            myImg.onload = function () {
              //  //console.log("image drawn", this.imageUrl);
              croppedCanvasContext.drawImage(
                myImg,
                boxLeft * window.devicePixelRatio,
                boxTop * window.devicePixelRatio,
                boxEndWidth * window.devicePixelRatio,
                boxEndHeight * window.devicePixelRatio,
                0,
                0,
                boxEndWidth,
                boxEndHeight
              );
            };

            
            setTimeout(function () {
              let croppedCanvasUrl1 = canvas.toDataURL();
              setTimeout(() => {
                //change the init token to production env token
                // app.analytics.init(userId);
                // app.analytics.track('Screenshot Taken');
               }, 200);
              //console.log("the croppedCanvasurl is:", croppedCanvasUrl1);
              openForm(croppedCanvasUrl1);
              convertingImgUrlToblob(croppedCanvasUrl1);
            }, 200);
          }, 200);
        }, 300);
      }
    },
  },
});
