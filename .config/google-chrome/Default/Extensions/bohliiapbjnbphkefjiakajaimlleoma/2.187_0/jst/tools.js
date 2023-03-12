/*$('.translate-stats').html('статистика');

var translates = {
	en:{
		stats:"Stats",
		Sources:"Sources",
		links:"Links",
		keywords:"Keywords"
	},
	ru:{
		stats:"Статистика",
		Sources:"Исходные данные",
		links:"Ссылки",
		keywords:"Ключевики"
	}
};
*/

function byId(id) {
    return document.getElementById(id);
}

function extend(Child, Parent) {
    var F = function() { };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

function bind() {
    var a = Array.prototype.slice.call(arguments, 2);
    var obj = arguments[0];
    var method = arguments[1];
    return function() {
        return method.apply(obj, empty(a) ? arguments : a.concat(Array.prototype.slice.call(arguments)));
    }
}

function bindFunc() {
    var a = Array.prototype.slice.call(arguments);
    a.unshift(null);
    return bind.apply(null, a);
}

function safeGet(obj, field) {
    return (obj && obj.hasOwnProperty(field)) ? obj[field] : null;
}

function safeArray(src) {
    return src == null ? [] : src;
}

function empty(obj) {
    return !(obj && obj.length);
}

function formJSON(obj) {
    return JSON.stringify(obj, null, 2);
}

function int(val) {
    return val | 0;
}

function forEach(obj, processor) {
    for(var k in obj)
        if(obj.hasOwnProperty(k) && processor(k, obj[k]) === false)
            break;
}

function str(val) {
    return val.toString();
}

function pushNotNull(dest, e) {
    if (e != null) {
        dest.push(e);
    }
}

function todayStart() {
    var d = new Date();
    return d.getTime() - ((((d.getHours() * 60 + d.getMinutes()) * 60) + d.getSeconds()) * 1000 + d.getMilliseconds());
}
