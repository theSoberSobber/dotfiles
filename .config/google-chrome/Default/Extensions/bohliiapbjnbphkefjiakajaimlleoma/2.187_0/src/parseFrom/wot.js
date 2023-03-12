//подгрузка wot
function wot(domain, itteration = -1) {
    function error() {
        itteration++;
        if (itteration < 0) {//если меньше 6 попыток, то перезапускаем
            setTimeout(function () {
                console.log('wot запуск сканирования вновь в ' + (itteration + 1) + ' раз');
                //that.get_cache(domain,hnd,itteration,'wot');//перезапуск этого метода
            }, (10 * itteration + 1000 * itteration));//запуск через (прогрессию попыток, но не больше 5 попыток)секунд
        } else {
            itt_parsed(domain);
            //говорим триггеру, что этот метод закончил работу
            //	wot(domain,itteration);
        }
    }

    if (domain == null)
        return false;

    //проверка на валидность, не заблокирован ли юзер
    try {

        //https://www.mywot.com/ru/scorecard/google.ru?utm_source=addon&utm_content=main_window
        console.log('Парсим данные с WOT');
        $.ajax({
            url: "https://www.mywot.com/en/scorecard/" + domain + "?utm_source=addon&utm_content=main_window",
            success: function (data) {

                console.log('Данные с WOT получены');
                console.log(data);

                try {
                    var data_json = data.match(/window.__WOT__.data = {(.*?)};/);
                    data_json = JSON.parse('{' + data_json[1] + '}');

                } catch (e) {
                    var data_json = {};
                }
                var dataobj = data_json;
                dataobj.domain = domain;
                dataobj.parseFrom = "wot";
                dataobj.version = "2";

                var html_tags = data.match(/StyledLabels__StyledLabel-sc-7yp57r-1 FpTuG">[a-zA-Z\s]{1,}<\/div>/g);
                let arr_tags = [];
                try {
                    for (let i = 0; i < html_tags.length; i++) {
                        arr_tags[i] = html_tags[i].match(/StyledLabels__StyledLabel-sc-7yp57r-1 FpTuG">(.*?)<\/div>/)[1];
                    }
                } catch (e) {
                }

                dataobj.tags = arr_tags;

                console.log('wrot', dataobj);
                send_cache(domain, "wot", dataobj);

                processImpl(domain, {"domain": domain, "web": dataobj});
                itt_parsed(domain);

            },
            error: function (xhr, statusText) {
                var dataobj = {};
                dataobj.domain = domain;
                dataobj.parseFrom = "wot";
                dataobj.version = "2";
                dataobj.tags = [];
                send_cache(domain, "wot", dataobj);
                processImpl(domain, {"domain": domain, "web": dataobj});
                itt_parsed(domain);
            }
        });


    } catch (e) {
        console.warn('wot парсер не смог найти данные на сайте или он сломался ' + domain, e.name, e.message);
        console.warn(data);
        error();
    }


    //должна быть проверка не битые ли данные
    console.log('wot данные спарсились для ' + domain);

}