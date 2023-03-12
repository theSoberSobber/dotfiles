var peugeon = null;

function parsesimilar(data, domain) {//подгрузка полученных данных

    var dataobj = new Object();
    dataobj.parseFrom = "similar";
    try {

        peugeon = data;
        //если информация пришла
        var data_json = JSON.parse("{" + (/window.__APP_DATA__ = {(.*?)}(\s{2,})/gs.exec(JSON.parse(data))[1]) + "}");
        dataobj = data_json.layout.data;
        //освобождаем очередь
        queue.shift();
        curr_domain_web[0] = "";
        yaseychsparsyu[0] = false;
        //удаляем ифрэйм
        $('.bduh').remove();


        dataobj.domain = domain;
        dataobj.ver = 1.01;
        dataobj.parseFrom = "similar";
        processImpl(domain, {"domain": domain, "web": dataobj});

        send_cache(domain, "similar", dataobj);
        itt_parsed(domain);
    } catch (e) {
        console.warn('BRONKS', e);
        processImpl(domain, {"domain": domain, "web": dataobj});
        dataobj2 = new Object();
        dataobj2.parseFrom = "similar";
        dataobj2.data = 'no-data';
        dataobj2.exc = 'exception';
        dataobj2.ver = 1.01;
        dataobj2.domain = domain;
        send_cache(domain, "similar", dataobj2);
        return false;
    }


}