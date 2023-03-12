function parsesimilartech(data, domain) {
    try {
        //если информация пришла
        var data_json = (/window.initialData.discover = {(.*?)};/s.exec(data)[1]).replace(/\\\\\\"/g, '\'').replace(/\\"/g, '"');
        data_json = "{" + data_json + "}";
        //освобождаем очередь
        queue_simtech.shift();
        curr_domain_web[1] = "";
        yaseychsparsyu[1] = false;
        //удаляем ифрэйм
        $('.simtech').remove();
    } catch (e) {

        //если информация сломанная, делаем задержку для отдыха симтек в 8 секунд
        setTimeout(function (don) {
            $('.simtech').remove();
            $('body').append('<iframe class="simtech" ack="' + don + '" style="width:800px; height:600px; position:Absolute; left:0px; top:0px;" src="https://addon.similartech.com/addons/a/0.11.4/chrome/75.0.3770.143/discover?url=' + don + '"></iframe>');
        }, 8000, domain);
        //прекращаем выполнение функции
        return false;
    }
    if (!IsJsonString(data_json)) {
        return false;
    }
    dataobj = JSON.parse(data_json);
    dataobj.parseFrom = "similartech";
    dataobj.domain = domain;


    data_json = (dataobj);
    try {
        var icon_num = parseInt(dataobj['discoverData']['info']['monthlyVisits']);

        dataIcondom(icon_num, domain);

        set_icon_fromlocalcache(dataobj.domain, icon_num);
        //timelog('Similar tech иконка подгружена '+domain,icon_num);
    } catch (e) {
        dataIcondom(null, domain);
        //timelog('Similar tech иконки нет '+domain,icon_num);
        //inclusizer('tech data 49rrr');
    }


    processImpl(domain, {"domain": domain, "web": dataobj});

    send_cache(domain, "similartech", dataobj);
}