// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"bqVo":[function(require,module,exports) {
"use strict"; // This should only work in background

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lbryUrlCache = void 0;
let db = null;
if (typeof chrome.extension === 'undefined') throw new Error("YT urlCache can only be accessed from extension windows and service-workers.");

if (typeof self.indexedDB !== 'undefined') {
  const openRequest = indexedDB.open("yt-url-resolver-cache");
  openRequest.addEventListener('upgradeneeded', () => openRequest.result.createObjectStore("store").createIndex("expireAt", "expireAt")); // Delete Expired

  openRequest.addEventListener('success', () => {
    db = openRequest.result;
    clearExpired();
  });
} else console.warn(`IndexedDB not supported`);

function clearExpired() {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
      if (!db) throw new Error(`IDBDatabase not defined.`);
      const transaction = db.transaction("store", "readwrite");
      const range = IDBKeyRange.upperBound(new Date());
      const expireAtCursorRequest = transaction.objectStore("store").index("expireAt").openCursor(range);
      expireAtCursorRequest.addEventListener('error', () => reject(expireAtCursorRequest.error));
      expireAtCursorRequest.addEventListener('success', () => {
        try {
          const expireCursor = expireAtCursorRequest.result;
          if (!expireCursor) return;
          expireCursor.delete();
          expireCursor.continue();
          resolve();
        } catch (ex) {
          reject(ex);
        }
      });
    });
  });
}

function clearAll() {
  return __awaiter(this, void 0, void 0, function* () {
    return yield new Promise((resolve, reject) => {
      const store = db === null || db === void 0 ? void 0 : db.transaction("store", "readwrite").objectStore("store");
      if (!store) return resolve();
      const request = store.clear();
      request.addEventListener('success', () => resolve());
      request.addEventListener('error', () => reject(request.error));
    });
  });
}

function put(url, id) {
  return __awaiter(this, void 0, void 0, function* () {
    return yield new Promise((resolve, reject) => {
      const store = db === null || db === void 0 ? void 0 : db.transaction("store", "readwrite").objectStore("store");
      if (!store) return resolve();
      const expireAt = !url ? new Date(Date.now() + 1 * 60 * 60 * 1000) : new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);
      const request = store.put({
        value: url,
        expireAt
      }, id);
      console.log('caching', id, url, 'until:', expireAt);
      request.addEventListener('success', () => resolve());
      request.addEventListener('error', () => reject(request.error));
    });
  });
} // string means there is cache of lbrypathname
// null means there is cache of that id has no lbrypathname
// undefined means there is no cache


function get(id) {
  return __awaiter(this, void 0, void 0, function* () {
    const response = yield new Promise((resolve, reject) => {
      const store = db === null || db === void 0 ? void 0 : db.transaction("store", "readonly").objectStore("store");
      if (!store) return reject(`Can't find object store.`);
      const request = store.get(id);
      request.addEventListener('success', () => resolve(request.result));
      request.addEventListener('error', () => reject(request.error));
    });
    if (response === undefined) return undefined;

    if (response.expireAt <= new Date()) {
      yield clearExpired();
      return undefined;
    }

    console.log('cache found', id, response.value);
    return response.value;
  });
}

exports.lbryUrlCache = {
  put,
  get,
  clearAll
};
},{}]},{},["bqVo"], null)