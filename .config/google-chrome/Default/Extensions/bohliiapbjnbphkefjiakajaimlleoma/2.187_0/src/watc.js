/*
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(61316191, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
*/

var ctc = 0;

function ym(id, reachgoal, marker) {
    //ym(61316191,'reachGoal','aim2');
    var data = JSON.stringify({'id': id, 'reachgoal': reachgoal, 'marker': marker});
    var classs = "vstat1-iframe-" + ctc;
    ctc++;
    $('body').append("<iframe class='" + classs + "' src='https://web.vstat.info/src/tag.html#" + data + "'></iframe>");
    setTimeout(function () {
        $('.' + classs).remove();
    }, 4000);
    /*     $('iframe:last').load(function() {
          $(this).remove();
       });*/

}