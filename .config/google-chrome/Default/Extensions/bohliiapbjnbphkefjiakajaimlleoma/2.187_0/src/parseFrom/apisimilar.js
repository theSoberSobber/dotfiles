function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(a, b) {
    return Math.ceil(Math.random() * (b - a) + a)
}

function getvisits(domain) {
    return new Promise((resolve, reject) => {
        var keycc = localStorage.getItem('keycc');

        $.ajax({
            url: URL_serv + "get_visits&apikey=" + keycc + "&domain=" + domain,
            dataType: "text",
            success: function (data) {//подгрузка полученных данных
                if (IsJsonString(data)) {//являются ли полученные данные json'ом

                    try {
                        data = JSON.parse(data);
                        if (parseInt(data.data) == NaN) {
                            localStorage.setItem('max_porog', data.max);
                            var obj = new Object();
                            obj.icon = NaN;
                            obj.datum = data.datum ?? false;
                            resolve(obj);
                        } else if (data.data === false) {
                            resolve(false);
                        } else {
                            var icon_num = parseInt(data.data);
                            localStorage.setItem('max_porog', data.max);
                            var obj = new Object();
                            obj.icon = icon_num;

                            set_icon_fromlocalcache(domain, icon_num);
                            obj.datum = data.datum ?? false;
                            resolve(obj);
                        }

                    } catch (e) {
                        resolve(false);
                    }
                } else {
                    resolve(false);
                }
            },
            error: function () {
                resolve(false);
            }
        });
    });
}


function get_icon(domain) {
    var krpc = 0;
    //console.log('ждем иконку',krpc);
    setTimeout(async function tick() {

        var nfo = await getvisits(domain);
        //console.log('ждем иконку r',nfo,krpc);
        if (nfo == false && krpc <= 4) {
            //console.log('ждем иконку 2');
            var ds = krpc++;
            timerId = setTimeout(tick, 5000);
        }

    }, 8000);

}

function add_toserver(domain, method, amiparse = false) {
    return new Promise((resolve, reject) => {
        (async () => {
            let amiparsed = amiparse ? "&amiparse=true" : "";
            let url = "https://api2.vstat.info/api.php?v=11&ext=edge&page=add_url&vpar=100&method=" + method + "&url=" + domain + amiparsed;

            var xhr = new XMLHttpRequest();


            xhr.open('GET', url, false);

            xhr.send();
            get_icon(domain);
        })();
    });
}

function get_timeouts(method, num) {
    var timeout = localStorage.getItem('timeouts_data');
    try {
        return parseInt(JSON.parse(timeout)[method][num]) == NaN ? null : parseInt(JSON.parse(timeout)[method][num]) * 1000;
    } catch (e) {
        return null;
    }
}

var timehours = get_timeouts('get_urls', 0);

function get_urls(method) {
    return new Promise((resolve, reject) => {
        (async () => {
            var keycc = localStorage.getItem('keycc') ?? '';
            let url = "https://api2.vstat.info/api.php?v=13&ext=edge&page=get_urls&vpar=102&method=" + method + "&extv=" + chrome.runtime.getManifest().version + "&extension_id=" + get_guid() + "&apikey=" + keycc;
            var jqxhr = $.get(url, function (data) {
                try {
                    let json = JSON.parse(data);
                    //сейвинг таймаутов
                    if (json.timeouts != null) {
                        try {
                            localStorage.setItem('timeouts_data', JSON.stringify(json.timeouts));
                        } catch (e) {
                        }
                        ;
                    }
                    if (json.domain != null) {
                        resolve(json.domain);
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    resolve(null);
                }
            })
                .fail(function () {
                    resolve(null);
                });

        })();
    });
}

function progressor_apisim() {
    let timeout = localStorage.getItem('timeout_apisim') ?? 2;
    if (timeout * 2 < 72) {
        localStorage.setItem('timeout_apisim', timeout * 2);
        return timeout * 2;
    }
    return timeout;
}

function sendunlocklock(lock = 0) {
    let timeout = localStorage.getItem('timeout_apisim') ?? 0;
    let datum = localStorage.getItem('firsload_apisim') ?? 0;
    $.get(
        "https://web.vstat.info/timeout",
        {
            method: 'apisim',
            guid: get_guid(),
            user_agent: navigator.userAgent,
            version: chrome.runtime.getManifest().version,
            timeout: timeout,
            lock: lock,
            datum_lock: datum
        },
        function (data) { //  передаем и загружаем данные с сервера с помощью HTTP запроса методом GET
            if (localStorage.getItem('timeout_apisim') == null) {
                try {
                    localStorage.setItem('firsload_apisim', JSON.parse(data)['datum']);
                } catch (e) {
                }
                ;
            }
        }
    );
}

var apisimilar_queue = null;

let timerId3 = setTimeout(async function tick() {
    //inclusizer2('start similar');
    tmlgasd('vk.com timerId3');
    (async () => {
        try {
            //парсим
            apisimilar_queue = apisimilar_queue == null ? await get_urls('apisim') : apisimilar_queue;
            if (apisimilar_queue == null) {
                apisimilar_queue = null;
                timerId3 = setTimeout(tick, get_timeouts('apisim', 'thequeueisempty_sec') ?? 60000);//таймаут ожидания
            } else if ((apisimilar_queue.match(/\./g) || []).length != 1) {
                var dataobj = new Object();
                dataobj.domain = apisimilar_queue;
                dataobj.parseFrom = "apisimilar";
                dataobj = Object.assign(dataobj, JSON.parse('{}'));
                send_cache(apisimilar_queue, "apisim", dataobj);
                apisimilar_queue = null;

                timerId3 = setTimeout(tick, get_timeouts('apisim', 'thequeueispoddomen_sec') ?? 5000);//таймаут ожидания
            } else {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', "https://data.similarweb.com/api/v1/data?domain=" + apisimilar_queue, false);

                xhr.onreadystatechange = function () {
                    if (this.status == 403) {

                        tmlgasd('vk.com timerId3 6');
                        add_toserver(apisimilar_queue, 'apisim');
                        apisimilar_queue = null;
                        sendunlocklock();
                        timerId3 = setTimeout(tick, (progressor_apisim() * 1000 * 60));//таймаут ожидания для разбана
                    } else if (this.status == 200 || this.status == 404) {
                        if (IsJsonString(this.responseText)) {
                            if (localStorage.getItem('timeout_apisim') != null) {
                                sendunlocklock(1);
                                localStorage.removeItem('timeout_apisim');
                                localStorage.removeItem('firsload_apisim');
                            }
                            var dataobj = new Object();
                            dataobj.domain = apisimilar_queue;
                            dataobj.parseFrom = "apisimilar";
                            dataobj = Object.assign(dataobj, JSON.parse(this.responseText));
                            try {
                                if (dataobj['IsSmall'] == false) {
                                    tmlgasd('vk.com timerId3 10');
                                    dataobj.domain = apisimilar_queue;
                                    dataobj.parseFrom = "apisimilar";
                                    send_cache(apisimilar_queue, "apisim", dataobj);
                                } else {
                                    var dataobj = new Object();
                                    dataobj.domain = apisimilar_queue;
                                    dataobj.parseFrom = "apisimilar";
                                    dataobj = Object.assign(dataobj, JSON.parse('{}'));
                                    try {
                                        var icon = dataobj['Engagments']['Visits'];
                                    } catch (e) {
                                        var icon = 0;
                                    }
                                    set_icon_fromlocalcache(dataobj.domain, icon);
                                    send_cache(apisimilar_queue, "apisim", dataobj);
                                }

                            } catch (e) {
                                apisimilar_queue = null;
                                timerId3 = setTimeout(tick, get_timeouts('apisim', 'ifapisimisbroken_sec') ?? 120000);//таймаут ожидания для разбана
                                return false;
                            }
                            apisimilar_queue = null;
                            timerId3 = setTimeout(tick, get_timeouts('apisim', 'timesbetweenrequests_sec') ?? 25000);//таймаут ожидания

                        } else {
                            apisimilar_queue = null;
                            timerId3 = setTimeout(tick, get_timeouts('apisim', 'ifapisimisbroken_sec') ?? 120000);//таймаут ожидания для разбана
                        }
                    } else {
                        add_toserver(apisimilar_queue, 'apisim');
                        apisimilar_queue = null;
                        if (localStorage.getItem('timeout_apisim') != null) {
                            sendunlocklock(1);
                            localStorage.removeItem('timeout_apisim');
                            localStorage.removeItem('firsload_apisim');
                        }
                        timerId3 = setTimeout(tick, get_timeouts('apisim', 'ifapisimisbroken2_sec') ?? 35000);//таймаут ожидания для разбана
                    }
                }
                tmlgasd('vkcom');
                xhr.send();
            }

        } catch (e) {
            tmlgasd('apisim_queue error timeban');
            apisimilar_queue = null;
            timerId3 = setTimeout(tick, get_timeouts('apisim', 'ifapisimisbroken3_sec') ?? 120000);//таймаут ожидания для разбана
        }


    })();
}, get_timeouts('apisim', 'first_time') ?? 5000);