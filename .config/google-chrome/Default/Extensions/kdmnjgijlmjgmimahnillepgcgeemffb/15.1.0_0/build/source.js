/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var params = new URL(location.href).searchParams;
var source = params.get('source');
console.log(source);

if (source) {
  chrome.storage.local.set({
    source: source
  });
  console.log(chrome.storage.local);
}
/******/ })()
;