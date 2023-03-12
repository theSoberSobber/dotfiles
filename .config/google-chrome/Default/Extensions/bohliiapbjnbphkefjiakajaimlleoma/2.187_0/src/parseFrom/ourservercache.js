function allparse(domain) {
    new Promise((resolve, reject) => {
        console.log(domain + ' кеша на сервере нет similar');
        if (apisimilar_queue == null) {
            apisimilar_queue = domain;
            console.log('apisimilar_queue parse');
        } else {
            add_toserver(domain, 'apisim');
            console.log('apisimilar_queue add_toserver');
        }
    }).then(res => console.log(res)).catch(err => console.log(err));


    new Promise((resolve, reject) => {
        console.log(domain + ' кеша на сервере нет similar');
        similar(domain);
    }).then(res => console.log(res)).catch(err => console.log(err));


    new Promise((resolve, reject) => {
        console.log(domain + ' кеша на сервере нет keywords');
        keywords(domain);
    }).then(res => console.log(res)).catch(err => console.log(err));


    new Promise((resolve, reject) => {
        console.log(domain + ' кеша на сервере нет wot');
        wot(domain);
    }).then(res => console.log(res)).catch(err => console.log(err));

    localStorage.setItem('expr_' + domain, parseInt((new Date).getTime() / 1000) + EXPIRE);
}


function ourservercache(domain, itteration = -1) {
    console.log(domain + ' ourservercache запущен');
    //console.log('метод есть ли кеш встат '+domain);

    var exprornot = localStorage.getItem('expr_' + domain) == null ? 0 : localStorage.getItem('expr_' + domain);

    //есть ли иконка в кеше и не просрочена ли дата последнего кеширования или данные не поломаны
    if (exprornot < parseInt((new Date()).getTime() / 1000)) {//кеша нет или он просрочен или данные не испорчены
        console.log(domain + ' кеша нет');
        console.log(exprornot, parseInt((new Date()).getTime() / 1000));
        //чтобы на перегруженных серверах не происходил постоянный запрос кеша

        //console.log('кеша встат нет '+domain);
        //console.log('Запрос к серверу встат '+domain);


        $.ajax({
            url: URL_serv + "get_cache&domain=" + domain,
            dataType: "text",
            success: function (data) {//подгрузка полученных данных
                console.log(domain + ' сервер вернут ответ по гет кеш');
                if (IsJsonString(data)) {//являются ли полученные данные json'ом


                    //try{
                    console.log(domain + ' Начинаем парсить объект серва внутри ourservercache');
                    //console.log('Начинаем парсить объект серва внутри ourservercache '+domain);
                    var dataobj = JSON.parse(data);

                    if (dataobj['error'] != null)
                        return false;

                    //Если кеша нет
                    console.log(dataobj);
                    if (dataobj['data'] != false) {


                        console.log(domain + ' кеш есть');
                        ////console.log('Кеш на сервере есть '+domain);
                        //try{
                        if (dataobj['data'].length == 0)
                            return false;


                        var graph_tr = true;

                        //for(var i=0;i<dataobj['data'].length;i++){
                        var method;
                        var datab;


                        console.log('blackheart');

                        console.log('blackheart_090', method, datab);

                        if (dataobj['data']['apisim'] == null) {
                            if (apisimilar_queue == null) {
                                apisimilar_queue = domain;
                                console.log('apisimilar_queue parse');
                            } else {
                                add_toserver(domain, 'apisim');
                                console.log('apisimilar_queue add_toserver');
                            }
                        }

                        console.log('gomik1');
                        console.log(dataobj['data']['similar']);

                        if (dataobj['data']['similar'] == "no-data" || dataobj['data']['similar'] == null) {
                            console.log('gomik12');
                            similar(domain);
                        }

                        if (dataobj['data']['wot'] == null) {
                            wot(domain);
                        }

                        if (dataobj['data']['graph'] != null) {
                            new Promise((resolve, reject) => {

                                var datab2 = new Object();
                                datab2.data = dataobj['data']['graph'];
                                datab2.parseFrom = 'graphic';
                                datab2.domain = domain;
                                localStorage.setItem('graphic_' + domain, JSON.stringify(datab2));
                                graph_tr = false;
                                //core.processImpl({"domain":domain,"web":(datab2)});
                                processImpl(domain, {"domain": domain, "web": datab2});
                                //graphic((dataobj['data']['graph']));
                            }).then(res => console.log(res)).catch(err => console.log(err));
                        }


                        localStorage.setItem('expr_' + domain, parseInt((new Date).getTime() / 1000) + EXPIRE);
                        /*	}catch(e){

                                console.warn('crack getcahce',e.text,e.name, e.message);
                            }*/


                    } else {
                        allparse(domain);

                    }

                    /*}catch(e){
                        console.warn('Что-то при обработке данных cache server пошло не так '+domain,e.name, e.message);
                        console.warn(data);

                    }*/

                } else {
                    console.warn('Cache server получил сломанные данные по ' + domain, e.name, e.message);
                    console.log('Немедленно включаем аварийный парсинг similar по ' + domain);
                    allparse(domain);

                }
            },
            error: function (data) {
                console.warn('При запросе к Cache серверу возникла ошибка ' + URL_serv);
                console.warn(data);
                allparse(domain);
            }
        });
    }
}
