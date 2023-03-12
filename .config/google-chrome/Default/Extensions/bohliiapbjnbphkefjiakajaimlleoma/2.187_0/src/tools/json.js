function isJson(str) {
    if (!isNaN(str))//null или числа
        return false;

    if (typeof str == "object")
        return str;

    try {
        return JSON.parse(str);
    } catch (e) {
        return false;
    }
}