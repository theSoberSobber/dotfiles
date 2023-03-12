//подгрузка sitesimilar
function sitesimilar(domain, itteration = -1) {
    function error() {
        itteration++;
        if (itteration < 0) {//если меньше 6 попыток, то перезапускаем
            setTimeout(function () {
                console.log('sitesimilar запуск сканирования вновь в ' + (itteration + 1) + ' раз');
                //that.get_cache(domain,hnd,itteration,'sitesimilar');//перезапуск этого метода
            }, (10 * itteration + 1000 * itteration));//запуск через (прогрессию попыток, но не больше 5 попыток)секунд
        } else {
            itt_parsed(domain);
            //говорим триггеру, что этот метод закончил работу
            //	sitesimilar(domain,itteration);
        }
    }

    if (domain == null)
        return false;

    //проверка на валидность, не заблокирован ли юзер


    console.log('Парсим данные с sitesimilar');


    $.ajax({
        url: "https://www.sitesimilar.net/" + domain,
        success: function (data) {
            console.log('Данные с sitesimilar получены');
            console.log(data);

            try {
                var data_json = data.match(/"itemListElement": \[(.*?)\]/s);
                data_json = JSON.parse('{' + data_json[0] + '}');

            } catch (e) {
                var data_json = {};
            }
            var dataobj = data_json;
            dataobj.domain = domain;
            dataobj.parseFrom = "sitesimilar";
            dataobj.version = "2";


            console.log('wrot', dataobj);
            send_cache(domain, "sitesimilar", dataobj);

            processImpl(domain, {"domain": domain, "web": dataobj});
            itt_parsed(domain);
        },
        error: function (xhr, statusText) {
            var dataobj = {};
            dataobj.domain = domain;
            dataobj.parseFrom = "sitesimilar";
            dataobj.version = "2";
            send_cache(domain, "sitesimilar", dataobj);
            processImpl(domain, {"domain": domain, "web": dataobj});
            itt_parsed(domain);
        }
    });


    //должна быть проверка не битые ли данные
    console.log('sitesimilar данные спарсились для ' + domain);

}