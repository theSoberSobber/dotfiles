/*
##
##  Enhancer for YouTube™
##  =====================
##
##  Author: Maxime RF <https://www.mrfdev.com>
##
##  This file is protected by copyright laws and international copyright
##  treaties, as well as other intellectual property laws and treaties.
##
##  All rights not expressly granted to you are retained by the author.
##  Read the license.txt file for more details.
##
##  © MRFDEV.com - All Rights Reserved
##
*/
(function(){function b(){chrome.storage.local.get({blockads:!0,blockadsexceptforsubs:!1,blockautoplay:!0,blockhfrformats:!1,blockwebmformats:!1,boostvolume:!1,controlspeed:!0,controlspeedmousebutton:!1,controlvolume:!1,controlvolumemousebutton:!1,convertshorts:!1,customcolors:{"--main-color":"#00adee","--main-background":"#111111","--second-background":"#181818","--hover-background":"#232323","--main-text":"#eff0f1","--dimmer-text":"#cccccc","--shadow":"#000000"},customcssrules:"",customtheme:!1,
darktheme:!1,defaultvolume:!1,disableautoplay:!1,hidecardsendscreens:!1,hidechat:!1,hidecomments:!1,hiderelated:!1,hideshorts:!1,ignoreplaylists:!0,ignorepopupplayer:!0,overridespeeds:!0,pauseforegroundtab:!1,pausevideos:!0,qualityembeds:"medium",qualityembedsfullscreen:"hd1080",qualityplaylists:"hd720",qualityvideos:"hd720",reversemousewheeldirection:!1,selectquality:!1,selectqualityfullscreenoff:!1,selectqualityfullscreenon:!1,speed:1,speedvariation:.1,stopvideos:!1,theme:"default-dark",themevariant:"youtube-deep-dark.css",
volume:50,volumevariation:5,whitelist:""},function(c){document.dispatchEvent(new CustomEvent("efyt-update-preferences",{detail:{prefs:c}}))})}chrome.storage.onChanged.addListener(b);document.addEventListener("efyt-get-preferences",b);var a=document.createElement("script");a.src=chrome.runtime.getURL("resources/youtube-start.js?")+new URLSearchParams({incognito:chrome.extension.inIncognitoContext,resources:chrome.runtime.getURL("resources"),version:chrome.runtime.getManifest().version});document.documentElement.appendChild(a);
a.remove()})();