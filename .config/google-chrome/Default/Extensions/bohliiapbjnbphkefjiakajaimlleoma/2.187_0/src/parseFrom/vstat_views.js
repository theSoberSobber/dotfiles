function scan_apisim(domain) {
    console.log(domain + ' Начинаем парсить окон');
    new Promise((resolve, reject) => {
        console.log(domain + ' Начинаем парсить apisimrrrr_Е');
        timelog('Начинаем парсить apisim ' + domain);
        if (apisimilar_queue == null) {
            apisimilar_queue = domain;
            console.log('apisimilar_queue parse');
        } else {
            add_toserver(domain, 'apisim');
            console.log('apisimilar_queue add_toserver');
        }
    }).then(res => console.log(res)).catch(err => console.log(err));
}

function vstatviews(domain, itteration = -1) {

    return false;
    timelog('vstat views запуск сканирования ' + domain);
    console.log('vstat views start ' + domain);

    function error() {
        itteration++;
        if (itteration < 6) {//если меньше 6 попыток, то перезапускаем
            setTimeout(function () {
                console.log('vstat views запуск сканирования вновь в ' + (itteration + 1) + ' раз');
                vstatviews(domain, itteration);
                //	that.get_cache(domain,hnd,itteration,'apisimilar');//перезапуск этого метода
            }, (10 * itteration + 1000 * itteration));//запуск через (прогрессию попыток, но не больше 5 попыток)секунд
        }
    }

    var keycc = localStorage.getItem('keycc');
    $.ajax({
        url: URL_serv + "get_visits&apikey=" + keycc + "&domain=" + domain,
        dataType: "text",
        success: function (data) {//подгрузка полученных данных
            if (IsJsonString(data)) {//являются ли полученные данные json'ом
                data = JSON.parse(data);
                //апдейт и запись иконки
                try {
                    //подгрузка посещаемости за последний месяц


                    if (data.data != false & parseInt(data.data) != NaN) {
                        var icon_num = parseInt(data.data);
                        localStorage.setItem('icon_' + domain, icon_num);

                        localStorage.setItem('max_porog', data.max);
                        dataIcondom(icon_num, domain);
                        console.warn('bug3');
                        timelog('vstat views получена иконка ' + domain, icon_num);
                    } else {
                        timelog('vstat views иконки нет или до конца месяца не будет доступен из-за бд ' + domain);
                        scan_apisim(domain);
                    }

                } catch (e) {
                    error();//неполадки с сервером симилар апи
                    console.warn(domain + ' - при подгрузке иконки возникло исключение ' + e.name, e.message)
                    scan_apisim(domain);
                }

                //	hnd(parseStatistic(data));//подгружаем данные в само окно
            } else {
                console.log('vstat views при парсинге возникла ошибка в ' + domain);
                error();//ошибка в json парсинге полученного ответа
                scan_apisim(domain);
            }

        },
        error: function () {//если сервер выдал ошибку
            console.log('vstat views при парсинге сервер не дал ответа для ' + domain);
            error();//неполадки с сервером симилар апи
            scan_apisim(domain);
        }
    });


}