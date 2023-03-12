const SIMILAR_SITE = "https://www.similarweb.com";

const EXPIRE = 432000;//5 ДНЕЙ


var upd_c = 0;


//среднее время ожидания
var timea = 0;
var delttime = localStorage.getItem('delttime') == null ? 0 : localStorage.getItem('delttime');

var queue = [];
var queue_simtech = [];
var yaseychsparsyu = [false, false];
var curr_domain_web = ["", ""];

function remove_fromarr(arr, indexes) {
    var arrayofIndexes = [].slice.call(arguments, 1);
    return arr.filter(function (item, index) {
        return arrayofIndexes.indexOf(index) == -1;
    });
}

function add_queue_simtech(que, el, important) {

//если элемент пустой
    if (el == null)
        return false;

    //если такой домен уже есть в очереди
    for (var i = 0; i < que.length; i++) {
        if (que[i].el == el)
            return false;
    }

    //если в очереди новый сайт, открытый юзером - сбрасываем любые урлы выше приоритетом
    if (important == 0) {
        for (var i = 0; i < que.length; i++) {
            if (que[i].important > 0) {
                console.log('Сбрасываем урл:', que[i].el);
                que = remove_fromarr(que, i);
            }
        }
    }

    //добавляем в самое начало парсинга
    que.splice(0, 0, {el, important});
}


function isNumber(val) {
    return typeof val === 'number';
}


function get_from_queue(que) {
    return que.length == 0 ? null : que[0].el;//que.shift();
}


let timerId_wot = setTimeout(async function tick() {
    var url = await get_urls('wot');
    wot(url);
    timerId_wot = setTimeout(tick, get_timeouts('wot', 0) ?? 40000); // (*)
}, get_timeouts('wot', 1) ?? 5000);

let timerId_sitesimilar = setTimeout(async function tick() {
    var url = await get_urls('sitesimilar');
    sitesimilar(url);
    timerId_wot = setTimeout(tick, get_timeouts('sitesimilar', 0) ?? 40000); // (*)
}, get_timeouts('sitesimilar', 1) ?? 5000);

async function addnewsite() {
    var url = await get_urls('similar');
    add_queue_simtech(queue, url, 1);
}

var tensecs = 0;


function sendunlocklock_similar(lock = 0) {
    let timeout = localStorage.getItem('timeout_similar') ?? get_timeouts('similar', 'ifmethodisbroken_sec');
    let datum = localStorage.getItem('firsload_similar') ?? 0;
    $.get(
        "https://web.vstat.info/timeout",
        {
            method: 'similar',
            guid: get_guid(),
            user_agent: navigator.userAgent,
            version: chrome.runtime.getManifest().version,
            timeout: timeout,
            lock: lock,
            datum_lock: datum,
        },
        function (data) { //  передаем и загружаем данные с сервера с помощью HTTP запроса методом GET
            if (localStorage.getItem('timeout_similar') == null) {
                try {
                    localStorage.setItem('firsload_similar', JSON.parse(data)['datum']);
                } catch (e) {
                }
                ;
            }
        }
    );
}


function progressor_similar() {
    let timeout = localStorage.getItem('timeout_similar') ?? 2;
    if (timeout * 2 < (get_timeouts('similar', 'progressor_time') / 1000 ?? 72)) {
        localStorage.setItem('timeout_similar', timeout * 2);
        return timeout * 2;
    }
    return timeout;
}


var similar_queue = null;
var similar_timer = 0;


let timerId2 = setTimeout(async function tick() {
    //inclusizer2('start similar');
    try {
        console.log('skk', new Date());
        //парсим
        similar_queue = similar_queue == null ? await get_urls('similar') : similar_queue;
        //inclusizer2('pause similar',similar_queue);
        //inclusizer2('урл',similar_queue);
        if (similar_queue != null) {
            $('.simtech').remove();
            //добавляем симтек окно
            $('body').append('<iframe class="similar" ack="' + similar_queue + '" style="width:800px; height:600px; position:Absolute; left:0px; top:0px;" src="' + SIMILAR_SITE + '/website/' + similar_queue + '"></iframe>');
            //inclusizer2('добавили симтек парс');
            var kcpt = setTimeout(function () {
                if ($('.similar').attr('ack') == similar_queue) {
                    //удаляем iframe
                    $('.similar').remove();
                    //inclusizer2('время истекло');
                }

                similar_queue = null;

                if (localStorage.getItem('timeout_similar') != null) {
                    var timeslab = progressor_similar() * (get_timeouts('similar', 'ifmethodisbroken_sec') ?? 120000);
                    console.log('simweb', timeslab);
                    similar_timer = parseInt((new Date()).getTime() + timeslab);
                    timerId2 = setTimeout(tick, timeslab);//таймаут ожидания для разбана
                } else {
                    var timeslab = (get_timeouts('similar', 'timesbetweenrequests_sec') ?? 120000);

                    similar_timer = parseInt((new Date()).getTime() + timeslab);
                    console.log('simweb', timeslab);
                    timerId2 = setTimeout(tick, timeslab);//таймаут ожидания обычного
                }

            }, get_timeouts('similar', 'maxtimeforloadpage_sec') ?? 65000);//макс время загрузки страницы
            similar_timer = parseInt((new Date()).getTime() + get_timeouts('similar', 'maxtimeforloadpage_sec') ?? 65000);
        } else {
            //inclusizer2('заданий нет ни своих, ни в базе');
            timerId2 = setTimeout(tick, get_timeouts('similar', 'thequeueisempty_sec') ?? 60000);//заданий нет ни своих, ни в базе
            //similar_timer =	parseInt((new Date()).getTime() + get_timeouts('similar',2) ?? 5000);
        }


    } catch (e) {
        similar_queue = null;
        timerId2 = setTimeout(tick, get_timeouts('similar', 'ifmethodisbroken_sec') ?? 120000);//таймаут ожидания для разбана
        similar_timer = parseInt((new Date()).getTime() + get_timeouts('similar', 'ifmethodisbroken_sec') ?? 120000);
    }
}, get_timeouts('similar', 'first_time') ?? 5000);
//similar_timer =	parseInt((new Date()).getTime() + get_timeouts('similar',4) ?? 5000);


var simtech_queue = null;

let timerId = setTimeout(async function tick() {
    //inclusizer2('start');
    try {
        //парсим
        simtech_queue = simtech_queue == null ? await get_urls('similartech') : simtech_queue;
        //inclusizer2('урл',simtech_queue);
        if (simtech_queue != null) {
            $('.simtech').remove();
            //добавляем симтек окно
            $('body').append('<iframe class="simtech" ack="' + simtech_queue + '" style="width:800px; height:600px; position:Absolute; left:0px; top:0px;" src="https://addon.similartech.com/addons/a/0.11.4/chrome/75.0.3770.143/discover?url=' + simtech_queue + '"></iframe>');
            //inclusizer2('добавили симтек парс');
            var kcpt = setTimeout(function () {
                if ($('.simtech').attr('ack') == simtech_queue) {
                    //удаляем iframe
                    $('.simtech').remove();
                    //inclusizer2('время истекло');
                }

                simtech_queue = null;
                //inclusizer2('таймаут');
                timerId = setTimeout(tick, get_timeouts('similartech', 'timesbetweenrequests_sec') ?? 20000);//таймаут ожидания для разбана

            }, get_timeouts('similartech', 'maxtimeforloadpage_sec') ?? 35000);//макс время загрузки страницы
        } else {
            //inclusizer2('заданий нет ни своих, ни в базе');
            timerId = setTimeout(tick, get_timeouts('similartech', 'thequeueisempty_sec') ?? 60000);//заданий нет ни своих, ни в базе
        }


    } catch (e) {
        simtech_queue = null;
        timerId = setTimeout(tick, get_timeouts('similartech', 'error1_sec') ?? 20000);//таймаут ожидания для разбана
    }
}, get_timeouts('similartech', 'first_time') ?? 5000);


//ifall();
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function prettyLongNumber(v) {
    var val = v + "";
    var res = "";
    var l = val.length;
    var counter = (l % 3);
    for (var i = 0; i < l; ++i) {
        if (counter == 0) {
            if (i != 0) {
                res += "'";
            }
            counter = 2;
        } else {
            --counter;
        }
        res += val[i];
    }
    return res;
}

function parseStatistic(jsonStr) {
    console.log("Подгрузка информации в обрабатывающий background script");
    console.log(jsonStr);
    return jsonStr;
}


var maxparsval = 3;


function itt_parsed(domain) {
    console.log('parselog', maxparsval);
    //счетчик в локальном хранилище, ибо передача объектта а не ссылки по itt была, itt убрать
    var itt = localStorage.getItem('count_' + domain) == null ? 1 : parseInt(localStorage.getItem('count_' + domain)) + 1;
    localStorage.setItem('count_' + domain, itt);
    console.log('Этап сканирования ' + domain, itt);
    if (itt == maxparsval) {
        localStorage.removeItem('count_' + domain);
        //localStorage.removeItem('temp_'+domain);
        console.log("Парсинг домена " + domain + " завершен");

    }
}


function similar(domain, itteration = -1) {
    function error() {
        itteration++;
        if (itteration < 0) {//если меньше 6 попыток, то перезапускаем
            setTimeout(function () {
                console.log('Similar запуск сканирования вновь в ' + (itteration + 1) + ' раз');
                similar(domain, itteration);
                //that.get_cache(domain,hnd,itteration,'similar');//перезапуск этого метода
            }, (10 * itteration + 1000 * itteration));//запуск через (прогрессию попыток, но не больше 5 попыток)секунд
        } else {

            //говорим триггеру, что этот метод закончил работу
            itt_parsed(domain);
        }
    }


    //если аписим сломан
    var exprornot = localStorage.getItem('expr_' + domain) == null ? 0 : localStorage.getItem('expr_' + domain);


    if (exprornot < parseInt((new Date()).getTime() / 1000)) {

        if (similar_queue == null && similar_timer <= parseInt((new Date()).getTime())) {
            similar_queue = domain;
        } else {
            add_toserver(domain, 'similar');
            return false;
        }
    } else {
        var dataobj = '{"web":{"domain": "' + domain + '",\
			"parseFrom": "similar","error":"no-data"}}';
        localStorage.removeItem('expr_' + domain);
        core.processImpl({"domain": domain, "web": {"domain": domain, "parseFrom": "similar", "error": "no-data"}});


    }


}