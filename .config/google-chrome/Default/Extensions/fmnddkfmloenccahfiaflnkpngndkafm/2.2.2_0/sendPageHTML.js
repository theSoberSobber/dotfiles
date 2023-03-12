/* globals chrome */

// From https://stackoverflow.com/questions/6088972/get-doctype-of-an-html-as-string-with-javascript
var node = document.doctype;
var doctype = '';

if (node) {
  doctype =
    '<!DOCTYPE ' +
    node.name +
    (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') +
    (!node.publicId && node.systemId ? ' SYSTEM' : '') +
    (node.systemId ? ' "' + node.systemId + '"' : '') +
    '>\n';
}
var html = document.documentElement.outerHTML;
// Noscript tags have their contents HTML-escaped; unescape
// them

/**
 * Decodes HTML entities (https://stackoverflow.com/questions/1912501/unescape-html-entities-in-javascript)
 * @param {*} input
 */
function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, 'text/html');
  return doc.documentElement.textContent;
}

var unescapedHtml = '';
var lastMatchEnd = 0;

var match;
var pattern = /<noscript>([^<]*)<\/noscript>/g;

while ((match = pattern.exec(html)) != null) {
  console.log(match);
  unescapedHtml += html.substr(lastMatchEnd, match.index - lastMatchEnd);
  unescapedHtml += '<noscript>' + htmlDecode(match[1]) + '</noscript>';
  lastMatchEnd = match.index + match[0].length;
}

// Get the rest of the string
unescapedHtml += html.substr(lastMatchEnd);

chrome.runtime.sendMessage({
  type: 'wrapapi.activeTabHTML',
  data: doctype + unescapedHtml,
});
