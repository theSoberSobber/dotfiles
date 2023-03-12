chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        // var firstHref = $("a[href^='http']").eq(0).attr("href");
        let text = window.getSelection()
        console.log(text.toString())
        if(typeof text.toString() === 'string'){
          console.log('length',text.toString().length)
          if(text.toString().length > 200){
            text = text.toString().substring(0,200)
          }
        }
  
        let redirectURL = "https://doubtnut.com/google_search/?q="+text.toString();
        chrome.runtime.sendMessage({"message": "open_new_tab", "url": redirectURL});
      }
      if(request.msg === "popup" && request.text){
        if(typeof request.text === 'string'){
          console.log('length',request.text.length)
          if(request.text.length > 200){
            request.text = request.text.toString().substring(0,200)
          }
        }
        let redirectURL = "https://doubtnut.com/google_search/?q="+request.text;
        chrome.runtime.sendMessage({"message": "open_new_tab", "url": redirectURL});
      }
      if(request.msg === "popup_img"){
        const encodeFormData = (data) => {
          return Object.keys(data)
              .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
              .join('&');
        }
        const userAction = async () => {
          const response = await fetch('https://web-api.doubtnut.com/api/v1/image/ocr', {
            method: 'POST',
            body: encodeFormData(request.imgbase64), // string or object
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept':'application/json; charset=utf-8'
            }
          });
          
          let myJson = await response.json();
          console.log(myJson)
          if(myJson.question_text)
          {
            if(typeof myJson.question_text === 'string'){
              console.log('length', myJson.question_text.length)
              if(myJson.question_text.length > 200){
                myJson.question_text = myJson.question_text.toString().substring(0,200)
              }
            } 
            let redirectURL = "https://doubtnut.com/google_search/?q="+myJson.question_text //extract JSON from the http response
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": redirectURL});

          }
            
        }
        userAction()
      }
      if(request.msg === "popup_to_dn"){
        let redirectURL = "https://doubtnut.com/"
        chrome.runtime.sendMessage({"message": "open_new_tab", "url": redirectURL});
      }
    }
  );
  