function Provider(p, a) {
    this.prefix = p;
    this.actualizer = a;
}

Provider.prototype = {
    get: function (domain, handler) {
        var key = this.fullKey(domain);
        chrome.storage.local.get(key, function (data) {

            //	console.log('AD3');
            this.checkData(domain, data[key], handler);
        }.bind(this));
    },

    checkData: function (domain, data, hnd) {
        //console.log('AD2');
        this.actualizer(domain, bind(this, this.processActualized, domain, hnd));
    },

    processActualized: function (domain, hnd, data) {
        if (data != null) {
            //	console.log('AD1');
            hnd(data);
        }
    },

    fullKey: function (domain) {
        return this.prefix + "|" + domain;
    }
}