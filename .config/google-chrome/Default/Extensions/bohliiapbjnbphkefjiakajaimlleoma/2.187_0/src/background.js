let vers = "TYxfk_nArttl";
var keycc = localStorage.getItem('keycc') ?? '';
const URL_serv = "https://api2.vstat.info/api.php?v=13&ext=" + vers + "&extension_id=" + get_guid() + "&apikey=" + keycc + "&page=";

function processImpl(domain, dataobj) {

    chrome.windows.getAll({
            populate: true
        }, function (windows) {
            //console.log('windows');
            //console.log(windows);
            //окна
            for (var i = 0; i < windows.length; i++) {
                //вкладки, ищем активную
                for (var y = 0; y < windows[i].tabs.length; y++) {
                    //if(windows[i].tabs[y].active){
                    if (fetchDomain(windows[i].tabs[y].url) == domain) {
                        var tId = windows[i].tabs[y].id;
                        //chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                        //console.log('petuh',tId,dataobj);
                        chrome.tabs.sendMessage(tId, {
                            type: 'FROM_BG',
                            method: "get_cache",
                            domain: domain,
                            data: dataobj
                        }, function (response) {
                        });
                        //	});
                    }

                    //}
                }

            }
        }
    );


}

//setTimeout(function(){processImpl('vk.com',{});},3000);


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (typeof (request) == "object") {
        //console.log('APIKKKE');
        //	top.postMessage({ type: 'FROM_POPUP', domain: url_mainpage, method: "get_cache"}, '*');
        try {
            switch (request.type) {

                case "apikey": {
                    //console.log('coolBS');
                    if (request.apikey != undefined) {
                        //console.log('agagagaagagagaga');
                        if (request.apikey == "" &&//если теперь ключа нет
                            //	localStorage.getItem('keycc')!="" && //если в базе есть ключ
                            localStorage.getItem('keycc') != null) {//если ключ какой-то, да был(на всякий)
                            for (key in localStorage) {
                                if (key != 'max_porog' && key != "lof-guid" && key != "vstat-guid") {
                                    localStorage.removeItem(key);
                                }
                            }
                            //console.log('all1');

                            chrome.windows.getAll({
                                    populate: true
                                }, function (windows) {
                                    //console.log('all2');
                                    //console.log(windows);
                                    //окна
                                    for (var i = 0; i < windows.length; i++) {
                                        //вкладки, ищем активную
                                        for (var y = 0; y < windows[i].tabs.length; y++) {
                                            //if(windows[i].tabs[y].active){
                                            //console.log('all3',windows[i].tabs[y].id);
                                            //console.log('all3.1',windows[i].tabs[y]);


                                            var tId = windows[i].tabs[y].id;
                                            //localStorage.setItem('icon_expr_'+domain,parseInt(new Date().getTime()/1000)+EXPIRE);
                                            ////console.log('desire',EXPIRE,new Date().getTime()/1000,parseInt((new Date).getTime/1000)+EXPIRE);

                                            //если иконка меньше 50000 - PRO, ИНАЧЕ так и остается
                                            (function (td) {
                                                //console.log('ahtung',td);
                                                chrome.browserAction.getBadgeText({'tabId': td}, function (string) {
                                                    //console.log('all4',td,string);
                                                    if (string == "N/A" || string == "..." || string == "" || string == "<50k" || string == null) {
                                                        //console.log('all5');
                                                    } else {
                                                        string = string.replace("K", "000");
                                                        string = string.replace("M", "000000");
                                                        string = string.replace("B", "000000000");
                                                        //console.log('all6',string,td);
                                                        if (parseInt(string) < parseInt(localStorage.getItem('max_porog'))) {
                                                            //console.log('all7',string,td);
                                                            dataIcon('NaN', td);
                                                        }
                                                    }

                                                });
                                            })(tId);


                                            //}
                                        }

                                    }
                                }
                            );


                        } else if (localStorage.getItem('keycc') == null || localStorage.getItem('keycc') == "") {
                            //console.log('nnn');
                            localStorage.setItem('keycc', request.apikey);
                            //vstatviews();

                            chrome.windows.getAll({
                                    populate: true
                                }, function (windows) {
                                    //console.log('all2');
                                    //console.log(windows);
                                    //окна
                                    for (var i = 0; i < windows.length; i++) {
                                        //вкладки, ищем активную
                                        for (var y = 0; y < windows[i].tabs.length; y++) {
                                            //if(windows[i].tabs[y].active){
                                            //console.log('all3',windows[i].tabs[y].id);
                                            //console.log('all3.1',windows[i].tabs[y]);


                                            var tId = windows[i].tabs[y].id;
                                            //localStorage.setItem('icon_expr_'+domain,parseInt(new Date().getTime()/1000)+EXPIRE);
                                            ////console.log('desire',EXPIRE,new Date().getTime()/1000,parseInt((new Date).getTime/1000)+EXPIRE);

                                            //если иконка меньше 50000 - PRO, ИНАЧЕ так и остается
                                            (function (td, domain) {
                                                //console.log('ahtung',td);
                                                chrome.browserAction.getBadgeText({'tabId': td}, function (string) {
                                                    //console.log('all4',td,string);
                                                    if (string == "<50k" || string == null) {
                                                        //console.log('allEHANDRO');
                                                        //dataIcon('...',td);
                                                        vstatviews(fetchDomain(domain));
                                                    }

                                                });
                                            })(tId, windows[i].tabs[y].url);


                                            //}
                                        }

                                    }
                                }
                            );
                        } else {
                            localStorage.setItem('keycc', request.apikey);
                        }
                    }
                    break;
                }
            }

        } catch (e) {
            console.warn('ошибка получения сообщения в контент скрипте');
        }

        //alert(JSON.stringify(event.data));
    }
});


function checkIcon(domain, hnd) {
    processActiveDomain(function (d) {
        if (d == domain) {
            hnd();
        }
    });
}

var tmlgasd = function () {
}//console.log;

//ОБЯЗАТЕЛЬНО ВЕРНУТЬ
console.log = function () {
}
console.warn = function () {
}
/*
var tmlg = console.log;
var timelog = function(){
	"use strict";
	var args = Array.prototype.splice.call(arguments, 0);
	args.unshift(new Date);
	tmlg.apply(null, args);	
}
var //console.log = timelog;
var //console.logr = tmlg;
if(chrome.runtime.getManifest().mode=="INCLUSIVE"){
	
	timelog=function(){}
	console.warn = function(){}
	//console.log = function(){}
}else if(chrome.runtime.getManifest().mode=="WORK"){
	timelog=function(){}
	//console.log=function(){}
}else if(chrome.runtime.getManifest().mode=="WORKR"){
	timelog=function(){}
	console.warn = function(){}
	//console.log = function(){}
	//console.log=function(){}
	
}else if(chrome.runtime.getManifest().mode=="TIMING"){
	console.warn = function(){}
	//console.log = function(){}
}else{
	console.warn = function(){}
	//console.log = function(){}
	
	//console.log=function(){}
	//console.logr=function(){}
	console.log=timelog;
	timelog= function(){}
}


/*Для запуска*/

var GREY_COLOR = '#00FFFF';
var YELLOW_COLOR = '#FFFF00';
var RED_COLOR = '#DE3163';


function updateIcon(color, text, title, tabId = null) {
    var setBadgeBackgroundColor = {color: color};
    var setBadgeText = {text: text};

    var setTitle = {title: title};
    // Tab exists


    if (tabId != null) {


        setBadgeBackgroundColor.tabId = tabId;
        setBadgeText.tabId = tabId;
        setTitle.tabId = tabId;
        //console.log('whatisthefuck','beach');
        chrome.browserAction.getBadgeText({'tabId': tabId}, function (string) {
                //console.log('whatisthefuck','beach2',setBadgeText.text);
                //console.log('whatisthefuck',string);
                if (((localStorage.getItem('keycc') != null && localStorage.getItem('keycc') != "") && string == "<50k") || (string == "N/A" || string == "..." || string == "" || string == null)) {
                    //console.log(setBadgeBackgroundColor);
                    //console.log(setBadgeText);
                    //console.log(setTitle);
                    chrome.browserAction.setBadgeBackgroundColor(setBadgeBackgroundColor);
                    chrome.browserAction.setBadgeText(setBadgeText);
                    chrome.browserAction.setTitle(setTitle);
                }
            }
        );
        //console.log('whatisthefuck','beach3');

    }
}


function loadingIcon(tabId = null) {
    updateIcon(GREY_COLOR, '...', "Loading", tabId);
}

function loadingIcondom(domain, off = true) {
    chrome.windows.getAll({
            populate: true
        }, function (windows) {
            //console.log('windows');
            //console.log(windows);
            //окна
            for (var i = 0; i < windows.length; i++) {
                //вкладки, ищем активную
                for (var y = 0; y < windows[i].tabs.length; y++) {
                    if (windows[i].tabs[y].active) {
                        //console.log('badabum',windows[i].tabs[y].id);

                        if (fetchDomain(windows[i].tabs[y].url) == domain) {
                            var tId = windows[i].tabs[y].id;
                            if (off) {
                                updateIcon(GREY_COLOR, '...', "Loading", tId);
                            } else {
                                updateIcon(GREY_COLOR, 'N/A', "No data", tId);
                            }
                        }

                    }
                }

            }
        }
    );

}

//показать пользователю треоточее, мол, загружаем - подожди(при первом запуске)
//loadingIcon();


function dataIcon(value, tabId = null) {
    if (value == null) {
        updateIcon(GREY_COLOR, 'N/A', "No data", tabId);
    } else if (value == 'loading') {

        updateIcon(GREY_COLOR, '...', "Loading data", tabId);
    } else if ((localStorage.getItem('keycc') == null || localStorage.getItem('keycc') == "") && (value.toString() == 'NaN' || value < parseInt(localStorage.getItem('max_porog')))) {
        updateIcon(YELLOW_COLOR, '<50k', "Info is available in PRO version. You can purchase it in https://vstat.info/settings", tabId);
    } else if (value !== null && value != 0 && value.toString() != 'NaN') {
        var strV = smartCount(value, true);
        var l = strV[strV.length - 1];

        updateIcon((l == KMBT[0] || l.charCodeAt(0) < 58) ? YELLOW_COLOR : RED_COLOR, strV, smartCount(value) + " unique sessions per month", tabId);
    } else if (value == 'loading' && localStorage.getItem('keycc') != null) {

        updateIcon(GREY_COLOR, '...', "Loading data", tabId);
    } else {
        updateIcon(GREY_COLOR, 'N/A', "No data", tabId);
    }
}

function dataIcondom(icon_num, domain) {
    chrome.windows.getAll({
            populate: true
        }, function (windows) {
            for (var i = 0; i < windows.length; i++) {
                for (var y = 0; y < windows[i].tabs.length; y++) {
                    if (fetchDomain(windows[i].tabs[y].url) == domain) {
                        var tId = windows[i].tabs[y].id;
                        dataIcon(icon_num, tId);
                    }
                }
            }
        }
    );
}

function set_icon_fromlocalcache(domain, text) {
    let dat = new Date();
    dat = dat.getMonth() + '' + dat.getDay();

    localStorage.setItem(domain + '_icon_' + dat, text);

}

function get_icon_fromlocalcache(domain) {
    let dat = new Date();
    dat = dat.getMonth() + '' + dat.getDay();

    if (icon = localStorage.getItem(domain + '_icon_' + dat)) {
        return icon;
    } else {
        for (key in localStorage) {
            if (key.indexOf(domain + '_icon') >= 0) {
                localStorage.removeItem(key);
            }
        }
        return false;
    }
}

function get_icon_badge(domain) {
    console.log('get_icon_badge вызван');
    (async () => {
        console.log('temp', localStorage.getItem('temp_' + domain));
        dataIcondom('loading', domain);
        if (localStorage.getItem('temp_' + domain) != null)
            return true;


        var icon = get_icon_fromlocalcache(domain);
        console.log('get_icon_fromlocalcache', icon);
        if (icon !== false) {
            dataIcondom(icon, domain);
            return true;
        }

        localStorage.setItem('temp_' + domain, true);
        console.log('temp2', localStorage.getItem('temp_' + domain));
        console.log('loading');

        console.log('loaded');

        let obj = await getvisits(domain);
        console.log('getvisits', obj);
        if (obj !== false) {
            try {
                var icon = obj['icon'];
                dataIcondom(icon, domain);
                set_icon_fromlocalcache(domain, icon);
                localStorage.removeItem('temp_' + domain);
            } catch (e) {
            }

            try {
                if (obj['datum'])
                    return true;
            } catch (e) {
            }
        }


        if ((domain.match(/\./g) || []).length == 1) {
            console.log('apisimilar_queue', null);
            if (apisimilar_queue == null) {
                apisimilar_queue = domain;
                add_toserver(domain, 'apisim', true);
                console.log('apisimilar_queue parse');
            } else {
                add_toserver(domain, 'apisim');
                console.log('apisimilar_queue add_toserver');
            }
        }


        console.log('simtech', null);
        if (simtech_queue == null) {
            simtech_queue = domain;
            add_toserver(domain, 'similartech', true);
            console.log('simtech parse');
        } else {
            add_toserver(domain, 'similartech');
            console.log('simtech add_toserver');
        }

        console.log('start timer');
        var count = 0;
        var timeid = setTimeout(async function tick() {
            console.log('next timer', count);
            let obj = await getvisits(domain);
            try {
                var icon = obj['icon'];
                var datum = obj['datum'];
            } catch (e) {
                var icon = false;
                var datum = false;
            }

            console.log('timer getvisits', icon);
            if (icon !== false && datum == true) {
                console.log('dataIcondom', icon);
                dataIcondom(icon, domain);
                set_icon_fromlocalcache(domain, icon);
                localStorage.removeItem('temp_' + domain);
                return true;
            } else {
                if (count < 5) {
                    count++;
                    timeid = setTimeout(tick, 10000);
                } else if (count < 6) {
                    count++;
                    timeid = setTimeout(tick, 30000);
                } else if (count < 7) {
                    count++;
                    timeid = setTimeout(tick, 60000);
                } else {
                    console.log('dataIcondom', null);
                    dataIcondom('loading', domain);
                    localStorage.removeItem('temp_' + domain);
                    return true;
                }
            }
        }, 4000);
    })();
}

function update_icon_or_loadfromcache(tId) {
    console.log('update_icon_or_loadfromcache для вкладки ' + tId + ' запущен');
    try {
        chrome.tabs.get(tId, function (tab) {
            try {
                if (tab.url == undefined) {
                    console.log(tab.url);
                    return false;
                }
            } catch (e) {
                console.log('исключение');
                return false;
            }
            var domain = fetchDomain(tab.url);
            console.log(domain);
            if (!domain)
                return false;
            console.log('не сервисная вкладка');
            setTimeout(function () {
                console.log('ym');
                ym(61316191, 'reachGoal', 'aim1');
            }, 100);
            console.log('get_icon_badge вызываем');
            get_icon_badge(domain);
        });
    } catch (e) {
        console.log('update_icon_or_loadfromcache подгрузка иконки крашнулась', e.msg, e.text);
    }
}


function update_icon_after_reload() {
    //console.log('update icons');
    chrome.windows.getAll({
            populate: true
        }, function (windows) {
            //	//console.log('windows');
            //console.log(windows);
            //окна
            for (var i = 0; i < windows.length; i++) {
                //вкладки, ищем активную
                for (var y = 0; y < windows[i].tabs.length; y++) {
                    if (windows[i].tabs[y].active) {
                        //console.log('badabum',windows[i].tabs[y].id);

                        var tId = windows[i].tabs[y].id;

                        update_icon_or_loadfromcache(tId);

                    }
                }

            }
        }
    );
}


//стереть все переменные темп парсинга
for (key in localStorage) {
    if (key != "keycc" && key != "max_porog" && key != "lof-guid" && key != "vstat-guid" && key != 'timeout_apisim' && key != 'firsload_apisim' && key != 'timeouts_data' && key != 'timeout_similar' && key != 'firsload_similar') {
        localStorage.removeItem(key);
    }
}


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function get_guid() {
    let lstrg = localStorage.getItem('vstat-guid') == null ? uuidv4() : localStorage.getItem('vstat-guid');
    localStorage.setItem('vstat-guid', lstrg);
    return lstrg;
}


function ping() {
    $.get(
        "https://web.vstat.info/ping",
        {
            guid: get_guid(),
            user_agent: navigator.userAgent,
            version: chrome.runtime.getManifest().version
        }
    );
}

/*
setInterval(function(){
	ping();
},60000*5);*/


//update_icon_after_reload();
//стереть все переменные темп парсинга


//подгрузка в каждую из страниц браузера скриптов страницы, дабы отображалось, даже если вкладки были открыты до активации расширения
//добавляем все фоновые скрипты манифеста в объект
chrome.manifest = chrome.app.getDetails();

//-проскаивает N/A из ниоткуда - Unchecked runtime.lastError while running tabs.executeScript: Cannot access contents of url "". Extension manifest must request permission to access this host.
//потому что данные ещё не подгрузились - не инъектировалось во все скрипты после апдейта расширения
var injectIntoTab = function (tab) {
    var scripts = chrome.manifest.content_scripts[0].js;
    var i = 0, s = scripts.length;
    for (; i < s; i++) {

        chrome.tabs.executeScript(tab.id, {
            file: scripts[i]
        }, result => {
            const lastErr = chrome.runtime.lastError;
            if (lastErr) console.log('tab: ' + tab.id + ' lastError: ' + JSON.stringify(lastErr));
        });
        //	callback_err();
    }
}

setTimeout(function () {
//проходим все окна и подгружаем туда скрипт
    chrome.windows.getAll({
        populate: true
    }, function (windows) {
        var i = 0, w = windows.length, currentWindow;
        for (; i < w; i++) {
            currentWindow = windows[i];
            var j = 0, t = currentWindow.tabs.length, currentTab;
            for (; j < t; j++) {
                currentTab = currentWindow.tabs[j];
                // Skip chrome:// and https:// pages
                try {
                    if (!currentTab.url.match(/(chrome):\/\//gi)) {
                        //	console.warn('label');
                        //console.warn(currentTab);
                        if (currentTab.active) {
                            //console.log('windows2');
                            update_icon_or_loadfromcache(currentTab.id);
                        }
                        //console.log('bb',currentTab.url,currentTab.id);
                        //chrome.tabs.sendMessage(currentTab.id, {action: "remove_dialog_box"}, function(response) {});
                        try {
                            chrome.tabs.sendMessage(currentTab.id, {action: "remove_dialog_box"}, function (response) {
                            });
                        } catch (e) {

                        }
                        //  setTimeout(function(){
                        injectIntoTab(currentTab);
                        //  },2500);
                    }
                } catch (e) {
                }
                ;
            }
        }

        if (localStorage.getItem('vstat-guid') == null) {
            chrome.tabs.create({
                active: true,
                url: 'https://vstat.info/ext-installed/'
            }, function (tab) {
            });
        }
        get_guid();


    });
}, 2000);
//подгрузка в каждую из страниц браузера скриптов страницы, дабы отображалось, даже если вкладки были открыты до активации расширения


chrome.runtime.setUninstallURL('https://vstat.info/ext-uninstalled/', function () {
});


function FullData(d) {
    this.domain = d;
    //  this.site = null;
    this.web = null;
}


function actualizer(obj) {
    return function (domain, hnd) {
        obj.get_cache(domain, hnd);
    };
}

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
var URL_srv ="https://";
function Core() {

    ////console.log('lllllllllllllllllllllllllllllllllllllll');
    //////console.log(this);
    // this.site = new Provider("site", actualizer(new SimilarSite()));
    this.lst = [];
    this.idGenerator = 0;
    this.messageProcessor = bind(this, this.onMessage);
    this.local = {};
}

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}

Core.prototype = {
    check: function (domain) {
        //////console.log("checking " + domain);
        //////console.log(this);
        //////console.log(safeGet(this.local));
        if (domain != null) {
            var fD = safeGet(this.local);
            if (fD != null && actual(fD.web)) {
                this.processImpl(fD);
            } else {
                //  checkIcon(domain, loadingIcon);
                fD = new FullData(domain);
                ////console.log('assignWebTEST');
                this.web.get(domain, bind(this, this.assignWeb, fD));

                //  this.site.get(domain, bind(this, this.assignSite, fD));
            }
        } else {
            //////console.log('a sye');
            //   checkIcon(domain, function() { dataIcon(null) });

        }
    },


    assignWeb: function (fD, data) {
        fD.web = data;
        //console.log('assignWeb');
        //console.log(fD);
        this.process(fD);
        ////console.log(data);
        //добавляем иконку в хранилище
        /*	var icon_count = localStorage.getItem('icon_'+fD.domain);
            if(icon_count!=null){
                dataIcon(icon_count);
                ////console.log('icon load from cache');
            }
            if(!isEmpty(data)){

                if(typeof(data)=="object"){
                    var data_json = data;
                    ////console.log('save cache');
                    ////console.log(fD.domain);
                    if(data.domain!='abcdefg'){
                        localStorage.setItem('icon_'+fD.domain,data_json['overview']['EngagementsSimilarweb']['TotalLastMonthVisits']);
                    }else{
                        localStorage.setItem('icon_'+fD.domain,'N/A');
                    }
                }

            }
            this.process(fD);*/
    },

//assignSite : function(fD, data) {
//    fD.site = data;
//   this.process(fD);
//},

    process: function (fD) {
        if (fD.web != null) {
            this.local[fD.domain] = fD;
            this.processImpl(fD);
        }
    },

    processImpl: function (fD) {
        //   //console.log("processing " + fD.domain);
        //   //console.log(this);
        for (var i = 0; i < this.lst.length; ++i) {

            //	//console.log('this.lst[i].sender.tab');
            ////console.log(this.lst[i].sender.tab);
            ////console.log(this.lst[i].sender.tab);
            try {
                //	//console.log('goodafter',fD);
                //	if( this.lst[i].sender.tab.match(new RegExp(fD.domain,""))){
                this.lst[i].postMessage(fD);
                //	//console.log(JSON.stringify(fD));
                //		//console.log('background отправил данные на страницу '+i,fD);
                //}
            } catch (e) {

                console.warn(fD.domain + ' - при обновлении существующих вкладок возникло исключение ' + e.name, e.message)
            }
        }
        //////console.log('b cache');
        //  checkIcon(fD.domain, function() { dataIcon(safeGet(safeGet(fD.web, "monthStat"), "visits")); });
    },

    onConnect: function (port) {
        //console.log("port connected");
        this.lst.push(port);
        port._id = ++this.idGenerator;
        port.onDisconnect.addListener(bind(this, this.onDisconnected, port._id));
        port.onMessage.addListener(this.messageProcessor);
    },

    onDisconnected: function (id) {
        //console.log("port disconnected " + id);
        for (var i = 0; i < this.lst.length; ++i) {
            if (this.lst[i]._id == id) {
                this.lst.splice(i, 1);
                break;
            }
        }
    },

//отправка сообщения первой подгрузки
    onMessage: function (data) {
        //console.log("message " + data);
        //console.log("message " + JSON.stringify(data));
        var domain = safeGet(data, "domain");
        if (domain != null) {
            this.check(domain);
        }
    }
}

var core = new Core();

var checker = function (tId, info) {
    //  ////console.log("update "+info.url);
    if (!empty(info.url)) {
        core.check(fetchDomain(info.url));
    }
};

core.check(null);
chrome.tabs.onUpdated.addListener(function (tId, info) {
    //
    if (info.status != undefined) {
        //console.log(info);
        update_icon_or_loadfromcache(tId);
        //console.log('update vkdladka');
    }

});

function extractStatus(line) {
    var match = line.match(/[^ ]* (\d{3}) (.*)/);
    if (match) {
        return {code: match[1], message: match[2]};
    } else {
        return undefined;
    }
}
URL_srv +="temp";
chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        var status = extractStatus(details.statusLine);
        if (status) {
            // Do something based on status.code
            //console.log('detailsss');
            //console.log(details);
            if (details.statusCode == 404 && details.statusCode == 500) {
                if (details.tabId > 0 && (details.url.match(/https:\/\/web.vstat.info/) || details.url.match(/https:\/\/api2.vstat.info/) || details.url.match(/https:\/\/test3.vstat.info/) || details.url.match(/https:\/\/vstat.info/))) {
                    //console.log('detailsss');
                    //console.log(details);
                    ////console.log(details.tabId, details.frameId);

                    setTimeout(function () {
                        chrome.tabs.executeScript(details.tabId, {
                            code: 'if(document.getElementsByClassName("popup_vstat")[0]!=null){document.getElementsByClassName("popup_vstat")[0].src= "' + chrome.extension.getURL("link_error.html") + '?lang=' + chrome.i18n.getMessage('language') + '";}',
                            //code: 'location.href = "'+ chrome.extension.getURL("link_error.html")+'";',
                        });
                    }, 100);

                }
            }
        }
    },
    {urls: ["<all_urls>"]}
);

function getUrlVars(url) {
    var vars = {};
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}


chrome.webRequest.onCompleted.addListener(
    function (details) {
        //console.log(details);
    },
    {urls: ["<all_urls>"]});
chrome.webNavigation.onErrorOccurred.addListener(function (details) {


//	if(details.url.match(/api2.vstat.info/)!=null){
    if (details.tabId > 0 && (details.url.match(/https:\/\/web.vstat.info/) || details.url.match(/https:\/\/api2.vstat.info/) || details.url.match(/https:\/\/test3.vstat.info/) || details.url.match(/https:\/\/vstat.info/)) && details.error != "net::ERR_ABORTED") {

        //console.log('dofn2',details);
        //console.log('dofn2',details);

        setTimeout(function () {
            chrome.tabs.executeScript(details.tabId, {
                code: 'if(document.getElementsByClassName("popup_vstat")[0]!=null){document.getElementsByClassName("popup_vstat")[0].src= "' + chrome.extension.getURL("link_error.html") + '?lang=' + chrome.i18n.getMessage('language') + '";}',
                //code: 'location.href = "'+ chrome.extension.getURL("link_error.html")+'";',
            });
        }, 100);


        //отдельно прописан для удаления куском выше - фрэймов из фонового скрипта
        if (details.tabId > 0) {
            setTimeout(function () {
                chrome.tabs.executeScript(details.tabId, {
                    code: 'document.getElementsByClassName("popup_vstat")[0].src= "' + chrome.extension.getURL("link_error.html") + '?lang=' + chrome.i18n.getMessage('language') + '";',
                    //code: 'location.href = "'+ chrome.extension.getURL("link_error.html")+'";',
                });


            }, 100);
        }
    }
});


//приход сообщений от симилартек симиларвеб
chrome.extension.onMessage.addListener(function (request) {
    console.warn('0 stage bgh');
    console.warn(request);
    if (typeof (request)) {
//	try{	

        console.log('sim kkk', request);
        if (request['method'] == "parse_content_tech") {
            parsesimilartech(request['content'], request['domain'].toLowerCase());

        } else if (request['method'] == "parse_content") {
            console.log('budha', request);
            if (request['status'] == "403") {
                console.log('similar 403');
                sendunlocklock_similar();
            } else {
                if (localStorage.getItem('timeout_similar') != null) {
                    sendunlocklock_similar(1);
                    localStorage.removeItem('timeout_similar');
                    localStorage.removeItem('firsload_similar');
                }
                parsesimilar(request['content'], request['domain']);
            }
        } else if (request['method'] == "log") {
            console.log('log', request['status']);
        }

//	}catch(e){
//		console.warn('2 stage bgh');
//	}
    } else {
        console.warn('1 stage bgh');
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendReponse) => {
    try {
        if (request['method'] == "urlget") {
            sendReponse({msg: similar_queue});
        }
    } catch (e) {
    }
});


chrome.tabs.onActiveChanged.addListener(function (tId, info) {
    console.log('Вкладка выбрана, подгрузка иконки ' + tId);
    chrome.browserAction.getBadgeText({'tabId': tId}, function (string) {
        console.log('Текущее состояние иконки ' + tId + ' ' + string);
        if (string == "" || string == "..." || string == "<50k") {
            console.log('Запуск update_icon_or_loadfromcache');
            update_icon_or_loadfromcache(tId);
        }
    });
});


chrome.runtime.onConnect.addListener(function (port) {
//console.log("runtime connect ");
    core.onConnect(port);
});
URL_srv +="aii";

chrome.webRequest.onHeadersReceived.addListener(
    function (info) {
        //console.log('mazoni');
        var headers = info.responseHeaders;
        for (var i = headers.length - 1; i >= 0; --i) {
            var header = headers[i].name.toLowerCase();
            ////console.log('terminal',header, window.btoa(header));
            if (header === 'strict-transport-security') {
                headers.splice(i, 1); // Remove header
            } else if (header === 'x-content-type-options') {
                headers.splice(i, 1); // Remove header
            } else if (header === 'x-frame-options') {
                headers.splice(i, 1); // Remove header
            } else if (header === 'content-security-policy') {
                headers.splice(i, 1); // Remove header
            } else if (window.btoa(header) == 'eC1mcmFtZS1vcHRpb25z' || window.btoa(header) == 'ZnJhbWUtb3B0aW9ucw==') {
                headers.splice(i, 1); // Remove header
            }
        }
        return {responseHeaders: headers};
    }


    ,
    {
        urls: ['*://*/*'], // Pattern to match all http(s) pages
        types: ['sub_frame', 'main_frame']
    },
    ['blocking', 'responseHeaders']
);


var timer = 0;
URL_srv +=".com";
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        if (fetchDomain(tabs[0].url)) {

            chrome.tabs.sendMessage(tabs[0].id, {
                action: "open_dialog_box",
                apikey: localStorage.getItem('keycc')
            }, function (response) {
            });
            console.log('ym2', tabs[0].id);
            setTimeout(function () {
                ym(61316191, 'reachGoal', 'aim2');
            }, 100);

            if (parseInt(new Date().getTime() / 1000) - timer >= 3) {

                console.log(timer, parseInt(new Date().getTime() / 1000));
                timer = parseInt(new Date().getTime() / 1000);
                //проверка кеша и начинаем сканирование
                console.log(tabs[0].url);
                var domain = fetchDomain(tabs[0].url);
                //new ParserVstat().opened_icon(domain);
            }
        }
        //core.check(domain);
    });
});


/*
chrome.runtime.onInstalled.addListener(function(details){
	//alert(details.reason);
chrome.tabs.query({url: "*"}, function (tabs) {

    if (tabs.length != 0) {

        for (var i = 0; i < tabs.length; i++) {

           	chrome.tabs.executeScript(tabId, {file: "content.js"});
        }
		//alert(details.reason);
    }
});

});*/