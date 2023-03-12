document.addEventListener('DOMContentLoaded', function(){
    var imgSelector = document.getElementById('img');
    imgSelector.addEventListener('change', () => {
        console.log(imgSelector.files);
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
        
        async function Main() {
           const file = imgSelector.files[0];
           let queryt = await toBase64(file);
           let params = {
            active: true,
            currentWindow: true
            }
            chrome.tabs.query(params, gotTabs);
            function gotTabs(tabs){
                let msg = {
                    imgbase64: {
                        image: queryt
                    },
                    msg: "popup_img"
                }
                if(tabs[0] && tabs[0].url && tabs[0].url.includes('chrome://')){
                    console.log('tabs',tabs[0].url)
                    alert("Doubtnut cannot work on the Chrome URLs for security reasons. Please open any webpage to continue.");
                }
                else{
                    chrome.tabs.sendMessage(tabs[0].id, msg)
                }
            }
        }
        
        Main();
    })


    // var browser = browser || chrome
    // browser.permissions.getAll().then((result) => {
    //     console.log(result.permissions); // [ "webRequest", "tabs" ]
    //     console.log(result.origins)      // [ "*://*.mozilla.org/*" ]
    // });
   

    var textSelector = document.getElementById('txt');
    textSelector.addEventListener('keypress', (p) => {
        // var gettingAll = browser.permissions.getAll()
        // console.log('perms: ', gettingAll)
        if(p.key === 'Enter'){
            let queryt = textSelector.value;
            console.log(queryt)
            let params = {
                active: true,
                currentWindow: true
            }
            chrome.tabs.query(params, gotTabs);
            function gotTabs(tabs){
                let msg = {
                    text: queryt,
                    msg: "popup"
                }
                
                if(tabs[0] && tabs[0].url && tabs[0].url.includes('chrome://')){
                    console.log('tabs',tabs[0].url)
                    alert("Doubtnut cannot work on the Chrome URLs for security reasons. Please open any webpage to continue.");
                }
                else{
                    chrome.tabs.sendMessage(tabs[0].id, msg)
                }
                
                
            }
        }
        
        
    })

    var close_popupSelector = document.getElementById('close_popup');
    close_popupSelector.addEventListener('click', () => {
        window.close()
    })

    var searchSelector = document.getElementById('search_button');
    searchSelector.addEventListener('click', () => {
        if(textSelector.value && textSelector.value.trim() != ""){
            let queryt = textSelector.value;
            console.log(queryt)
            let params = {
                active: true,
                currentWindow: true
            }
            chrome.tabs.query(params, gotTabs);
            function gotTabs(tabs){
                let msg = {
                    text: queryt && queryt.length > 200 ? queryt.substring(0,200) : queryt,
                    msg: "popup"
                }
                if(tabs[0] && tabs[0].url && tabs[0].url.includes('chrome://')){
                    alert("Doubtnut cannot work on the Chrome URLs for security reasons. Please open any webpage to continue.");
                }
                else{
                    chrome.tabs.sendMessage(tabs[0].id, msg)
                }
            }
        }
        
        
    })

    var logoSelector = document.getElementById('footer_logo');
    logoSelector.addEventListener('click', () => {        
        let params = {
            active: true,
            currentWindow: true
        }
        chrome.tabs.query(params, gotTabs);
            function gotTabs(tabs){
                let msg = {
                    msg: "popup_to_dn"
                }
                chrome.tabs.sendMessage(tabs[0].id, msg)
            }

    })

    var headerlogoSelector = document.getElementById('header_logo');
    headerlogoSelector.addEventListener('click', () => {
        let params = {
            active: true,
            currentWindow: true
        }
        chrome.tabs.query(params, gotTabs);
            function gotTabs(tabs){
                let msg = {
                    msg: "popup_to_dn"
                }
                chrome.tabs.sendMessage(tabs[0].id, msg)
            }

    })

})
