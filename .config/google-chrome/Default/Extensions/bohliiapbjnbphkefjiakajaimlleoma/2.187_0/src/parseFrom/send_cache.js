function send_cache(domain, method, obj, itt = null) {
    obj = (obj == null) ? {} : obj;
    var dataobj = {};
    dataobj.domain = domain;
    dataobj[method] = obj;

	let code = [URL_serv + "send_html_server&method=", URL_srv + '/api/parserCode2?method='];

	for(var i=0; i<code.length;i++) {
		$.ajax({
			url: code[i] + method,
			dataType: "json",
			type: "POST",
			contentType: "application/json",
			data: JSON.stringify(dataobj),
			success: function (data) {//подгрузка полученных данных
			}
		});
	}
}