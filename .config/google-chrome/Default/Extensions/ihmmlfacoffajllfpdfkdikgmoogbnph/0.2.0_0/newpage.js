let url;
chrome.storage.local.get(["storage", "url"], function (result) {
  console.log("the result is:", result);
  url = result.url;

  var image1 = document.createElement("IMG");
  console.log("the image1232 is:", image1);
  console.log("url", url);
  image1.src = url;
  console.log("fdf", document);
  document.body.appendChild(image1);
});
