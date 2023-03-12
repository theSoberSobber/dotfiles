let count = 0;

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

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // //console.log("the count is:", count);

  if (request.greeting === "hello") {
    ////console.log(request);
    setTimeout(function () {
      if (count > 0) {
        var screenShot = document.getElementById("docsumo_screenshot");
        var myForm = document.getElementById("docsumo_myForm");
        // //console.log("count is:", count, screenShot, myForm);
        screenShot.remove();
        myForm.remove();
      }
    }, 100);
    setTimeout(function () {
      $.get(chrome.runtime.getURL("/index.html"), function (data) {
        $(data).appendTo("html");
      });
      setTimeout(function () {
        $.get(chrome.runtime.getURL("/base64.js"), function (data) {
          var scriptTag = document.createElement("script");
          scriptTag.append(data);
          document.head.append(scriptTag);
        });
        $.get(chrome.runtime.getURL("/analytics.js"), function (data) {
          var scriptTag = document.createElement("script");
          scriptTag.append(data);
          document.head.append(scriptTag);
        });
        $.get(chrome.runtime.getURL("/indexhelper.js"), function (data) {
          var scriptTag = document.createElement("script");
          scriptTag.append(data);
          scriptTag.style.display = "none";
          document.body.append(scriptTag);
        });
      }, 100);

      count++;
    }, 200);
    sendResponse({
      farewell: "goodbye",
    });
  }

  if (request.greeting === "cancel") {
    // //console.log(screenShot, myForm);
    // //console.log("i am in hello");
    if (count > 0 || (screenShot && myForm)) {
      var screenShot = document.getElementById("docsumo_screenshot");
      var myForm = document.getElementById("docsumo_myForm");
      screenShot.remove();
      myForm.remove();
    }
    sendResponse({ farewell: "goodbye" });
  }

  if (request.screenshoturl == "hello2") {
    (function () {
      $.get(chrome.runtime.getURL("/base64.js"), function (data) {
        var scriptTag = document.createElement("script");
        scriptTag.append(data);
        document.head.append(scriptTag);
      });
      $.get(chrome.runtime.getURL("/analytics.js"), function (data) {
        var scriptTag = document.createElement("script");
        scriptTag.append(data);
        document.head.append(scriptTag);
      });
    })();
    (async function(){
        let userId = await loadStorage();
        var app = window.app = window.app || {};
        setTimeout(() => {
        //change the init token to production env token
        // app.analytics.init(userId);
        // app.analytics.track('Screenshot Taken');
       }, 1000);
      })();
    ////console.log(request);
    var imageUrl;
    ////console.log(screenShot, myForm);
    setTimeout(function () {
      if (count > 0) {
        var screenShot = document.getElementById("docsumo_screenshot");
        var myForm = document.getElementById("docsumo_myForm");
        screenShot.remove();
        myForm.remove();
      }
      count++;
    }, 100);

    setTimeout(() => {
      var port = chrome.runtime.connect({ name: "screenshot" });
      port.postMessage({ message: "takescreenshot" });
      port.onMessage.addListener(function (msg) {
        imageUrl = msg.screenshoturl;
        ////console.log("took screenshot", imageUrl);
      });
    }, 400);

    setTimeout(() => {
      $.get(chrome.runtime.getURL("/index.html"), function (data) {
        $(data).appendTo("html");
        var screenShot = document.getElementById("docsumo_screenshot");
        var myForm = document.getElementById("docsumo_myForm");
        var image = document.querySelector(".docsumo_cloudinary");
        image.src = imageUrl;
        convertingImgUrlToblob(imageUrl);
        screenShot.style.display = "none";
        myForm.style.display = "flex";
        setTimeout(function () {
          $.get(chrome.runtime.getURL("/indexhelper.js"), function (data) {
            var scriptTag = document.createElement("scirpt");
            scriptTag.append(data);
            scriptTag.style.display = "none";
            document.body.append(scriptTag);
          });
        }, 100);
      });

      sendResponse({ farewell: "goodbye" });
    }, 600);
    sendResponse({
      farewell: "goodbye",
    });
  }

  async function convertingImgUrlToblob(url) {
    await fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        // Do something with your data
        try {
          file = new File([blob], "screenshot.png");
          //////console.log("the file is:", file);
          apicall(file);
        } finally {
          //   firsttoolcard.style.display='none';
        }
      })
      .catch((err) => {
        ////console.log(err);
      });
  }

  // async function apicall(file) {
  //   var serverErr;
  //   var formData = new FormData();
  //   // const apiUrl1 = "https://api.cloudinary.com/v1_1/docsumovideo/image/upload";
  //   const apiUrl =
  //     "https://ocr-api-4sbyedii4q-an.a.run.app/api/v1/ocr/extract/";
  //   let apiRes1;
  //   formData.append("file", file);
  //   try {
  //     await fetch(apiUrl, {
  //       method: "POST",
  //       headers: {
  //         token: "d057850c-855a-4920-9ff0-14269030578c",
  //       },
  //       body: formData,
  //     })
  //       .then((response) => {
  //         //console.log("the response is:", response.status);
  //         responseStatus = response.status;
  //         return response.text();
  //       })
  //       .then((data) => {
  //         if (responseStatus === 200) {
  //           apiRes1 = JSON.parse(data);
  //           //console.log("the response  is:", apiRes1);
  //           //console.log("the response typeof is:", typeof apiRes1);

  //           chrome.storage.local.set(
  //             { storage: "success", url: apiRes1.image_url },
  //             function () {}
  //           );
  //           cloudinaryUrl = apiRes1.image_url;
  //           docsumoLoader.style.display = "none";
  //           copyText.innerHTML = apiRes1.data;
  //           convertedText = apiRes1.data;
  //           ////console.log("the converted text is:", convertedText);
  //           ////console.log("the type is:", typeof convertedText);
  //           if (convertedText === "") {
  //             convertedText = "The image doesn't contain any text.";
  //             copyText.style.color = "red";
  //           }
  //         } else if (responseStatus === 429) {
  //           docsumoLoader.style.display = "none";
  //           // copyText.innerHTML = apiRes1.data;
  //           copyText.style.color = "red";
  //           convertedText =
  //             "The request rate limit is 20 per hour which has been exceeded. Please try again after an hour";
  //         }

  //         copyText.value = convertedText;
  //         //console.log("the data is:", data);
  //       })
  //       .catch((error) => {
  //         ////console.log("the error is:", error);
  //         serverErr = error;
  //       });
  //   } finally {
  //     ////console.log("i am in the finally");
  //   }
  // }

  async function apicall(file) {
    // let userId = await loadStorage();
    // var app = window.app = window.app || {};
    newTabErrMsg = "Please wait till your document getting processed!";
    responseStatus = false;
    var formData = new FormData();
    // const apiUrl1 = "https://api.cloudinary.com/v1_1/docsumovideo/image/upload";
    const apiUrl = "https://ocrserver.docsumo.com/api/v1/ocr/extract/";
    let apiRes1;
    formData.append("file", file);
    try {
      // let t0 = performance.now();
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
            // let t1 = performance.now();
            // newTabErrMsg = "Your document got processed.";
            // showCaseErrorMsg(newTabErrMsg, "green");
            apiRes1 = JSON.parse(data);
            //console.log("the response  is:", apiRes1);
            ////console.log("the response typeof is:", typeof apiRes1);
            // setTimeout(() => {
              //change the init token to production env token
              // app.analytics.init(userId);
              // app.analytics.track('OCR extract successful', (t1-t0)/1000);
            // }, 200);
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
              convertedText =
                "The image doesn't contain any text. Please recapture the image that contains text.";
              copyText.style.color = "red";
              // setTimeout(() => {
                //change the init token to production env token
                // app.analytics.init(userId);
                // app.analytics.track('OCR extract successful but no text in image', (t1-t0)/1000);
              // }, 200);
            }

            newTabErrStatus = false;
          } else if (responseStatus === 429) {
            // let t1 = performance.now();
            // setTimeout(() => {
              //change the init token to production env token
              // app.analytics.init(userId);
              // app.analytics.track('Request Limit Exceeded. OCR failed', (t1-t0)/1000);
            // }, 200);
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
          //console.log("the error is", error);
          //console.log("the error is:", typeof error);
          // let t1 = performance.now();
          // setTimeout(() => {
            //change the init token to production env token
            // app.analytics.init(userId);
            // app.analytics.track('OCR extract failed', (t1-t0)/1000);
          // }, 200);
          serverErr = error;
          convertedText = "An error has occurred. Sorry for inconvenience!";
          newTabErrStatus = true;
          newTabMsg =
            "The button is disabled due to some internal server error.";
        });
    } finally {
      ////console.log("i am in the finally");
    }
  }
  return true;
});
