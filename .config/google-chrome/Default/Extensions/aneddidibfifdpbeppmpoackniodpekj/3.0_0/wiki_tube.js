var allow_path = function(path){
    var banned_paths = [
        //landing pages
        '/wiki/Main_Page',
        '/wiki/Wikipedia:Portada',
        '/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8',
        '/wiki/Wikip%C3%A9dia:Accueil_principal',
        '/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal',
        '/wiki/Wikipedia:%E9%A6%96%E9%A1%B5',
        '/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna',
        '/wiki/Pagina_principale',
        '/wiki/Wikipedia:Hauptseite',
        '/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'
    ];
    for (var i = 0; i < banned_paths.length; i++) {
        if(path == banned_paths[i]){
            return false;
        }
    }
    if (path.indexOf(':') != -1) {
        //portals, users, categories
        return false;
    }
    return true;
}

var title_text;
var num_videos_to_load;
var num_videos_loaded = 0;
var more_videos_button = $('<div class="plusBtn" title="Load more videos!"></div>');
var container = $('<div id="wikitube_container"></div>');

var first_load = function(){
    container.insertBefore('#mw-content-text');
    container.append(more_videos_button);

    var plusImgURL = chrome.extension.getURL("plus.png");
    more_videos_button.css('background-image', 'url(' + plusImgURL + ')');

    more_videos_button.click(function(){
        load_new_videos(false);
    });
}

var load_new_videos = function(is_first_load){
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+title_text+'&key=AIzaSyC1ucHysupgOH1JQmPaGqfFGoO1QCCOhQA&maxResults='+(num_videos_loaded+num_videos_to_load);
    $.getJSON(url, function(response){
        if(response['items'].length > 0){
            if (is_first_load) {
                first_load();
            }
            var new_videos = videos = response['items'];
            new_videos = new_videos.slice(num_videos_loaded);
            num_videos_loaded += num_videos_to_load;
            add_videos_to_page(new_videos);
        }
    });
}

var add_videos_to_page = function(new_videos){
    for (var i = 0; i < new_videos.length; i++) {
        video = new_videos[i];
        var videoHtml = '<div><iframe width="350" height="200" frameborder="0" allowfullscreen src="//www.youtube.com/embed/'+video['id']['videoId']+'"></iframe></div>';
        more_videos_button.before(videoHtml);
    };
}

var test_func = function(){
    url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=memes&key=AIzaSyC1ucHysupgOH1JQmPaGqfFGoO1QCCOhQA';
    $.getJSON(url, function(response){
        console.log(response);
    })
}

$(document).ready(function(){
    if(allow_path(window.location.pathname)){
        chrome.runtime.sendMessage({activate: true});
        title_text = document.getElementById('firstHeading').innerHTML;
        num_videos_to_load = Math.ceil($('#bodyContent').width() / 350); //video width = 350px
		load_new_videos(true);
    }
});