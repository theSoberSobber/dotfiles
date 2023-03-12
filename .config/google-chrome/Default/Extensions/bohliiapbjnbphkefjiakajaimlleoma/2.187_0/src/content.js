var chrome;

var mode = chrome.runtime.getManifest().mode == null ? "RELEASE" : chrome.runtime.getManifest().mode;


if (mode == "INCLUSIVE") {

    timelog = function () {
    }
    console.warn = function () {
    }
    console.log = function () {
    }
} else if (mode == "WORK") {
    timelog = function () {
    }
    inclusize = function () {
    }
} else if (mode == "TIMING") {
    console.warn = function () {
    }
    console.log = function () {
    }
} else {
    console.warn = function () {
    }
    console.log = function () {
    }
    timelog = function () {
    }
    inclusize = function () {
    }
}


/*Валидация домена и ip*/
ValidateIPaddress = function (ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return (true)
    }
    return (false)
}

fetchDomain = function (url) {
    var m = (url) == null ? false : url.match(/http(?:s)?\:\/\/(?:www.)?([^\/:]+).*/);
    var result = m && m.length > 1 ? m[1] : null;
    if (result == null) {
        return false;
    } else {
        if (ValidateIPaddress(result)) {
            return false;
        } else {
            return result;
        }
    }
}
/*Валидация домена и ip*/


if (location.ancestorOrigins.length == 0) {
    /*обработчики на подгрузку в попап*/
    //отправка данных с бг в попап
    get_cache = function (domain) {
        chrome.runtime.sendMessage({type: "FR0M_CONTENT", method: "get_cache", domain: domain}, function (response) {
            var win = window.frames.target == null ? window : window.frames.target;
            //console.log('dartva');
            //console.log(response);

            win.postMessage({
                type: 'FROM_BG',
                domain: response.domain,
                method: "get_cache",
                data: response.data
            }, "https://api2.vstat.info");
        });
    }

    //при парсинге
    doStuff = function (event, sender, sendResponse) {
        if (typeof (event.data) == "object") {
            //try{
            switch (event.type) {
                case "FROM_BG": {
                    //console.log('tirfgfd',event);
                    switch (event.method) {
                        case "get_cache": {
                            var objd = new Object();
                            var win = window.frames.target == null ? window : window.frames.target;

                            if (win != null && $('.popup_vstat').length > 0) {
                                try {//ошибка parseFrom
                                    if (event.data.web.parseFrom != null) {
                                        //console.log('have a message');
                                        objd[event.data.web.parseFrom] = JSON.stringify(event.data.web);
                                        //console.log(window.frames.target);
                                        win.postMessage({
                                            type: 'FROM_BG',
                                            domain: event.domain,
                                            method: "get_cache",
                                            data: objd
                                        }, "*");
                                    }
                                } catch (e) {
                                    //ошибка parseFrom
                                }
                            }
                            break;
                        }
                    }


                    break;
                }
            }

            /*}catch(e){
                //console.warn('ошибка получения сообщения в контент скрипте');
            }*/
        }
    }


    msgd = function (event) {
        if (typeof (event.data) == "object") {

            try {

                switch (event.data.type) {
                    case "FROM_POPUP": {

                        switch (event.data.method) {
                            case "get_cache": {
                                //console.log(event.data);
                                get_cache(event.data.domain);
                                break;
                            }
                        }
                        break;
                    }
                }

            } catch (e) {
                //console.warn('ошибка получения сообщения в контент скрипте');
            }
        }

    }


    /*сам попап*/
    var vrs = chrome.runtime.getManifest().version;

    var lng = chrome.i18n.getMessage('language');
//var detached='<iframe name="target" src="//test3.vstat.info/ext/'+location.host+'" frameborder="0" class="popup_vstat" style="right: 0px;
    var zoomer = window.getComputedStyle(document.documentElement).zoom;
    zoomer = 2 - zoomer;// 2 - 0.8 = 1.2
    var zoomer2 = 2 - Math.round(window.devicePixelRatio * 100) / 100;

    zoomer = zoomer / zoomer2;
    var detached = '<iframe loading="lazy" name="target" src="https://web.vstat.info/ext/popup.html?popup=1&vers=' + vrs + '&lang=' + lng + '&loc=' + location.host + '&mode=' + mode + '" frameborder="0" class="popup_vstat" style="right: 0px;\
		width: 752px !important;\
		margin-left: 8px;\
		margin-bottom: 8px;\
		position: fixed;\
		top: 0px;\
		    background-color: transparent;\
		z-index: 99999999999999997;\
		    display: block !important;\
		height: 150px;max-height:100%; zoom:' + zoomer + ';"></iframe><script>try{document.getElementsByClassName("popup_vstat")[0].addEventListener("load", function(){document.getElementsByClassName("fg_popup")[0].parentNode.removeChild(document.getElementsByClassName("fg_popup")[0]);document.querySelector(".popup_vstat").style.height="740px"; })}catch(e){console.warn(e);};</script>';
    var detachedbg = '<div class="bg_popup" style="position:fixed; top:0px; left:0px; width:100%; height:100%; z-index:99999999999999996; zoom:' + zoomer + ';"></div>';
    var detachedfg = '<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap&subset=cyrillic" rel="stylesheet">\
		<style>\
\
		.vstat-modal-block a {\
    color: unset !important;\
	font-size: 26px !important;\
}\
			.vstat-modal-block .vstat-h22{\
				display:block;\
			    font-size: 30px;\
				margin-bottom: 20px;\
				font-weight: 500;\
				font-family:"Roboto";\
				color: #030202;\
				margin-top:35%;\
			}	\
			.vstat-modal-block .vstat-h33{\
			display:block;\
				font-size: 26px;\
				color: #030202;\
				font-weight:100;\
				font-family:"Roboto";\
			}\
		</style>\
	<div class="vstat-modal-block fg_popup" style="text-align: center; position:fixed; top:0px; right:0px;box-shadow: rgb(105,95,95) 0px 0px; width:750px; height:740px; z-index:99999999999999998; zoom:' + zoomer + ';">\
	<a href="mailto://vstat@namer.ru"><img class="vstat-chingir" src="' + chrome.extension.getURL('/Stat-loading-4.png') + '"></a></span>\
	</div>\
</div>';

    var isloaded = false;//чтобы онклик один раз навешивался при данном обновлении
    function toggle() {
        console.log('s');
        //если уже открыто, то:
        if ($('.popup_vstat').length > 0) {
            console.log('s_close');
            $(".popup_vstat").css('height', "150px");
            $('.fg_popup').remove();
            detached = $('.popup_vstat').detach();
            detachedbg = $('.bg_popup').detach();
        } else {
            console.log('s_open');
            $(".popup_vstat").css('height', "740px");
            $('html').append(detachedbg);
            $('html').append(detached);
            $('html').append(detachedfg);

            //$('html .popup_vstat').attr('src','https://api2.vstat.info/ext/popup.html?vers='+vrs+'&lang='+lng+'&loc='+location.host+'&mode='+mode);
            $('html .popup_vstat').attr('src', 'https://web.vstat.info/ext/popup.html?popup=1&vers=' + vrs + '&lang=' + lng + '&loc=' + location.host + '&mode=' + mode);
            //	$('html .popup_vstat').attr('src','//test3.vstat.info/ext/'+location.host);
            if (isloaded == false) {//чтобы онклик один раз навешивался при данном обновлении
                var f_but = function () {
                    toggle();
                    isloaded = true;//чтобы онклик один раз навешивался при данном обновлении
                }
                $('.bg_popup').on('click', f_but);
            }
            var zoomer = window.getComputedStyle(document.documentElement).zoom;
            zoomer = 2 - zoomer;// 2 - 0.8 = 1.2
            var zoomer2 = 2 - Math.round(window.devicePixelRatio * 100) / 100;

            zoomer = zoomer / zoomer2;
            $('.bg_popup').css("zoom", zoomer);
            $('.popup_vstat').css("zoom", zoomer);
            $('.fg_popup').css("zoom", zoomer);
        }
    }

    window.onload = function () {
        var zoomer = window.getComputedStyle(document.documentElement).zoom;
        zoomer = 2 - zoomer;// 2 - 0.8 = 1.2
        var zoomer2 = 2 - Math.round(window.devicePixelRatio * 100) / 100;

        zoomer = zoomer / zoomer2;
        $('.bg_popup').css("zoom", zoomer);
        $('.popup_vstat').css("zoom", zoomer);
        $('.fg_popup').css("zoom", zoomer);
    }


    function doStuff2(msg, sender, sendResponse) {
//	//console.log(msg, sender, sendResponse);

        if (msg.action == 'open_dialog_box') {

            toggle();

            if (msg.apikey == null || msg.apikey == "") {
                //	alert('b '+ JSON.stringify(msg));
                chrome.runtime.sendMessage({type: 'apikey', apikey: null}, function (response) {
                    var win = window.frames.target == null ? window : window.frames.target;
                    //console.log('dartva');
                    //console.log(response);

                    //alert('doshlo '+kk.apikey);
                });
                $('.vstat-chingir').attr('src', chrome.extension.getURL('/Stat-loading-4.png'));//1
            } else {
                $('.vstat-chingir').attr('src', chrome.extension.getURL('/Stat-loading-4pro.png'));//pro
            }
        }
        sendResponse({received: true});
    }


    /*обработчики на подгрузку в попап*/


    port = chrome.runtime.connect({name: "my-port"});
    console.log('open');

    chrome.extension.onMessage.addListener(doStuff);//контент-сервер-контент
    window.addEventListener("message", msgd, false);//попап-контент-сервер-контент-попап
    chrome.extension.onMessage.addListener(doStuff2);//обработчик на получения сообщения - открыта ли иконка или закрыта


    port.onDisconnect.addListener(function () {
        delete ValidateIPaddress;
        delete fetchDomain;
        try {
            chrome.extension.onMessage.removeListener(doStuff);
        } catch (e) {
        }
        try {
            chrome.extension.onMessage.removeListener(doStuff2);
        } catch (e) {
        }
        try {
            window.removeEventListener("message", msgd, false);
        } catch (e) {
        }
        isloaded = false;//чтобы онклик один раз навешивался при данном обновлении
        delete doStuff;
        delete doStuff2;
        delete msgd;
        delete get_cache;
        detached = null;
        $('.popup_vstat').remove();
        detachedbg = null;
        $('.bg_popup').remove();
        console.log('close');
    });


    /*события бэкграунд скриптов при парсинге*/


    var eventMethod = window.addEventListener
        ? "addEventListener"
        : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod === "attachEvent"
        ? "onmessage"
        : "message";


    //alert('ads');
    eventer(messageEvent, function (e) {

        // if (e.origin !== 'http://the-trusted-iframe-origin.com') return;
        try {
            var kk = JSON.parse(e.data);
            if (kk.apikey != null) {
                //	alert('a '+ kk.apikey);
                chrome.runtime.sendMessage({type: 'apikey', apikey: kk.apikey}, function (response) {
                    var win = window.frames.target == null ? window : window.frames.target;
                    //console.log('dartva');
                    //console.log(response);

                    //alert('doshlo '+kk.apikey);
                });
            }
            if (kk.hide_bg != null) {
                //alert('Message from iframe just came!');
                $('.fg_popup').remove();
                document.querySelector(".popup_vstat").style.height = "740px";
            }
        } catch (e) {
        }
        if (e.data === "myevent" || e.message === "myevent") {
            //alert('Message from iframe just came!');
            //$('.fg_popup').remove();
        }
        //	console.log(e);
    });

//обработка сообщения об апдейте
    //для старых версий
    //	parent.postMessage("reloadevnet", "*");

    msgd = function (event) {
        console.log('cookie', event);
        if (event.data == "reloadevnet") {//url сравнивать

            if ($('*[http-equiv="Content-Security-Policy"]') != null) {
                toggle();
                setTimeout(function () {
                    toggle();
                }, 1000);
            }
        }
    }
    window.addEventListener("message", msgd, false);


} else if (location.ancestorOrigins.length == 1) {
    /*события бэкграунд скриптов при парсинге*/
    if (location.href.match(/similarweb/) != null) {
        window.onload = function () {
            function senderror404(v, html) {
                try {
                    var domain = v.msg;
                    //console.log('404 error content',localStorage.getItem('dats'));
                    chrome.extension.sendMessage({
                        "method": "parse_content",
                        "domain": domain ?? 'err',
                        "status": "404",
                        "content": JSON.stringify(html)
                    });
                } catch (e) {
                }

            }

            //setTimeout(function(){
            var html = $('html').html();
            var text = $('html').text();
            var title = $('title').text();

            if (title.match(/Traffic Analytics &amp; Market Share \| Similarweb/) !== null) {
                //	alert('market');
                try {
                    var domain = location.href.match(/\/website\/(.*?)\//)[1];
                    chrome.extension.sendMessage({
                        "method": "parse_content",
                        "domain": domain,
                        "status": "200",
                        "content": JSON.stringify(html)
                    });
                } catch (e) {
                    chrome.extension.sendMessage({"method": "urlget"}, {}, v => senderror404(v, html));
                }
            } else if (text.match(/Pardon Our Interruption/) != null) {
                //alert('pardon');
                console.log('similar Pardon 403');
                chrome.extension.sendMessage({"method": "parse_content", "domain": 'err', "status": "403"});
            } else if (html.match(/It appears we're not on the same page/) != null) {
                chrome.extension.sendMessage({"method": "urlget"}, {}, v => senderror404(v, html));
            } else {//нет данных
                chrome.extension.sendMessage({"method": "urlget"}, {}, v => senderror404(v, html));
            }
            //},100);
        }
    } else if (location.href.match(/similartech.com\/addons/) != null) {
        console.log('sssrek');
        window.onload = function () {
            console.log('sssrak');
            if (/jquery.min.js/.exec($('body').html()) != null) {

                var countt = 0;//колво попыток обновлений

                //console.log('strah');
                var html = $('html').html();
                var domain = location.href.match(/\?url=(.*)/)[1];

                //alert(html);
                try {
                    //console.log('peach');
                    chrome.extension.sendMessage({
                        "method": "parse_content_tech",
                        "domain": domain,
                        "status": "200",
                        "content": JSON.stringify(html)
                    });
                } catch (e) {
                    //console.log('poach');
                    chrome.extension.sendMessage({
                        "method": "parse_content_tech",
                        "domain": domain,
                        "status": "404",
                        "content": "no-data"
                    });
                }
            }
        }
    }


}
