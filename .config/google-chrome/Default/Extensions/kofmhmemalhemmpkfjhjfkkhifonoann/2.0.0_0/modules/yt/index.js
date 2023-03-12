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
})({"GFvj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseYouTubeURLTimeString = exports.getChannelId = exports.getSubsFromCsv = exports.getSubsFromJson = exports.getSubsFromOpml = void 0;
/**
 * Reads the array of YT channels from an OPML file
 *
 * @param opmlContents an opml file as as tring
 * @returns the channel IDs
 */

function getSubsFromOpml(opmlContents) {
  const opml = new DOMParser().parseFromString(opmlContents, 'application/xml');
  opmlContents = '';
  return Array.from(opml.querySelectorAll('outline > outline')).map(outline => outline.getAttribute('xmlUrl')).filter(url => !!url).map(url => getChannelId(url)).filter(url => !!url); // we don't want it if it's empty
}

exports.getSubsFromOpml = getSubsFromOpml;
/**
 * Reads an array of YT channel IDs from the YT subscriptions JSON file
 *
 * @param jsonContents a JSON file as a string
 * @returns the channel IDs
 */

function getSubsFromJson(jsonContents) {
  const subscriptions = JSON.parse(jsonContents);
  jsonContents = '';
  return subscriptions.map(sub => sub.snippet.resourceId.channelId);
}

exports.getSubsFromJson = getSubsFromJson;
/**
 * Reads an array of YT channel IDs from the YT subscriptions CSV file
 *
 * @param csvContent a CSV file as a string
 * @returns the channel IDs
 */

function getSubsFromCsv(csvContent) {
  const rows = csvContent.split('\n');
  csvContent = '';
  return rows.slice(1).map(row => row.substring(0, row.indexOf(',')));
}

exports.getSubsFromCsv = getSubsFromCsv;
/**
 * Extracts the channelID from a YT URL.
 *
 * Handles these two types of YT URLs:
 *  * /feeds/videos.xml?channel_id=*
 *  * /channel/*
 */

function getChannelId(channelURL) {
  const match = channelURL.match(/channel\/([^\s?]*)/);
  return match ? match[1] : new URL(channelURL).searchParams.get('channel_id');
}

exports.getChannelId = getChannelId;

function parseYouTubeURLTimeString(timeString) {
  const signs = timeString.replace(/[0-9]/g, '');
  if (signs.length === 0) return null;
  const numbers = timeString.replace(/[^0-9]/g, '-').split('-');
  let total = 0;

  for (let i = 0; i < signs.length; i++) {
    let t = parseInt(numbers[i]);

    switch (signs[i]) {
      case 'd':
        t *= 24;

      case 'h':
        t *= 60;

      case 'm':
        t *= 60;

      case 's':
        break;

      default:
        return null;
    }

    total += t;
  }

  return total;
}

exports.parseYouTubeURLTimeString = parseYouTubeURLTimeString;
},{}]},{},["GFvj"], null)