function ParserVstat() {
}

ParserVstat.prototype = {
    //обращаемся к серверу за кешем
    opened_icon: function (domain) {
        console.log('bdah');

        //проверка кеша

        //подгрузка кеша

        var exprornot = localStorage.getItem('expr_' + domain) == null ? 0 : localStorage.getItem('expr_' + domain);
        //парсинг тех кешей, которых нет
        //localStorage.setItem('temp_'+domain,true);


        //есть ли иконка в кеше и не просрочена ли дата последнего кеширования или данные не поломаны
        if (exprornot < parseInt((new Date()).getTime() / 1000)) {//кеша нет или он просрочен или данные не испорчены
            console.log('agutin');
            localStorage.removeItem('count_' + domain);
            localStorage.removeItem('similar_' + domain);
            localStorage.removeItem('keywords_' + domain);
            localStorage.removeItem('wot_' + domain);
            localStorage.removeItem('apisimilar_' + domain);

            new Promise((resolve, reject) => {
                //запуск поиска кеша на нашему сервере
                console.log(domain + ' Начинаем парсить ourservercache');
                ////timelog('Запуск метода встат '+domain);
                ourservercache(domain);
            }).then(res => console.log(res)).catch(err => console.log(err));


        } else {
            console.log('agutin2');


            //загрузка кешей в окно последовательно
            var similard = localStorage.getItem('similar_' + domain);
            var apisimilard = localStorage.getItem('apisimilar_' + domain);
            var wotd = localStorage.getItem('wot_' + domain);
            var keywordsd = localStorage.getItem('keywords_' + domain);
            var graphicsd = localStorage.getItem('graphic_' + domain);
            var similartechsd = localStorage.getItem('similartech_' + domain);
            //Если кеша нет


            if (apisimilard != null) {
                processImpl(domain, {"domain": domain, "web": JSON.parse(apisimilard)});
            }

            if (similartechsd != null) {
                processImpl(domain, {"domain": domain, "web": (JSON.parse['similartech'])});
            }

            if (similard == null) {
                console.log(domain + ' кеша на сервере нет 1');
                new Promise((resolve, reject) => {
                    console.log(domain + ' кеша на сервере нет similar');
                    similar(domain);
                }).then(res => console.log(res)).catch(err => console.log(err));
            } else {
                //itt_parsed(domain);
                console.log('agutin2 similar');
                //	similar(domain);
                processImpl(domain, {"domain": domain, "web": (JSON.parse['similar'])});
                //	core.processImpl({"domain":domain,"web":JSON.parse(similard)});
            }

            /*if(keywordsd==null){
                new Promise((resolve,reject) =>{
                    console.log(domain+' кеша на сервере нет keywords');
                    //keywords(domain);
                }).then(res => console.log(res)).catch(err => console.log(err));
            }else{
                //itt_parsed(domain);
                console.log('agutin2 keywords');
                    processImpl(domain,{"domain":domain,"web":JSON.parse(keywordsd)});
            //	core.processImpl({"domain":domain,"web":JSON.parse(keywordsd)});
            }*/

            if (wotd == null) {
                new Promise((resolve, reject) => {
                    console.log(domain + ' кеша на сервере нет wot');
                    wot(domain);
                }).then(res => console.log(res)).catch(err => console.log(err));
            } else {
                console.log('agutin2 wot');
                processImpl(domain, {"domain": domain, "web": JSON.parse(wotd)});
                //	core.processImpl({"domain":domain,"web":JSON.parse(wotd)});
            }

            if (graphicsd != null) {
                console.log('agutin2 graphic');
                //core.processImpl({"domain":domain,"web":JSON.parse(graphicsd)});
                processImpl(domain, {"domain": domain, "web": JSON.parse(graphicsd)});
            }

        }
    },


    get_cache: function (domain, hnd, itteration = -1, error = null) {
        if (domain == "api2.vstat.info") {
            this.opened_icon(domain);
        }
        console.log('Запуск основного метода сканирования для ' + domain);
        this.itt = 0;
        //время кеша если есть в хранилище. то записываем в переменную, если нет, то записывает невозможный таймштемп
        var exprornot = localStorage.getItem('expr_' + domain) == null ? 0 : localStorage.getItem('expr_' + domain);
        var data_fromStorage = localStorage.getItem('apisimilar_' + domain);

        //есть ли иконка в кеше и не просрочена ли дата последнего кеширования или данные не поломаны
        if (localStorage.getItem('apisimilar_' + domain) == null || exprornot < parseInt((new Date()).getTime() / 1000) || IsJsonString(data_fromStorage) == false) {//кеша нет или он просрочен или данные не испорчены
            console.log(domain + ' кеша нет');
            //timelog('Кеша нет '+domain);
            //парсится ли сайт сейчас в другой вкладке
            if (localStorage.getItem('temp_' + domain) !== null) {//в другой вкладке парсится
                //ничего не делаем
                //	console.log(domain+' Парсится уже в другой вкладке');
            } else {//начинаем парсить симилар и.т.д.
                console.log(domain + ' Начинаем парсить');
                //timelog('Начинаем парсить '+domain);
                //localStorage.setItem('temp_'+domain,true);//для мультистраничной загрузки - ставим переменную, чтобы не происходил множественный парсинг

                /*new Promise((resolve,reject) =>{
                    console.log(domain+' Начинаем парсить vstat views');
                    //timelog('Начинаем парсить vstat views '+domain);
                //	vstatviews(domain, itteration);
                }).then(res => console.log(res)).catch(err => console.log(err));
                */


                //similar(this, domain, hnd, itteration);
                //
            }
        } else {//если кеш есть
            //подгружаем кеш
            console.log(domain + ' Уже есть кеш');
            update_icon_after_reload();
            //	hnd(parseStatistic(JSON.parse(data_fromStorage)));
        }
    }

}
