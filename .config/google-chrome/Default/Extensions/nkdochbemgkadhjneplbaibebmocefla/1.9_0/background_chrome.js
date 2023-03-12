chrome.contextMenus.onClicked.addListener(contextMenuAction);


    chrome.contextMenus.create({  id: "archive",  title: " Archive.org",  contexts: ["selection"]   });

    
    chrome.contextMenus.create({  id: "dict",  title: " Dictionary ",  contexts: ["selection"]  });

            chrome.contextMenus.create({  id: "oxford",  title: " Oxford",  contexts: ["selection"] ,parentId : "dict"    });

            chrome.contextMenus.create({  id: "cambridge",  title: " Cambridge",  contexts: ["selection"] , parentId : "dict"  });

            chrome.contextMenus.create({  id: "dictionary",  title: " Dictionary",  contexts: ["selection"] , parentId : "dict"   });

            chrome.contextMenus.create({  id: "collins",  title: " Collins",  contexts: ["selection"] , parentId : "dict"   });

            chrome.contextMenus.create({  id: "merriam-webster",  title: " Meriam-Webster",  contexts: ["selection"] , parentId : "dict"   });


      chrome.contextMenus.create({  id: "github",  title: " Github",  contexts: ["selection"]   });  
      
      
      chrome.contextMenus.create({  id: "gd",  title: " Google Dork ",  contexts: ["selection"]  });

            chrome.contextMenus.create({  id: "cache",  title: " Cache",  contexts: ["selection"]  , parentId:"gd" });

            chrome.contextMenus.create({  id: "link",  title: " Link",  contexts: ["selection"] , parentId: "gd" });

            chrome.contextMenus.create({  id: "related",  title: " Related",  contexts: ["selection"] , parentId: "gd"  });

            chrome.contextMenus.create({  id: "info",  title: " Info",  contexts: ["selection"] , parentId : "gd"  });

            chrome.contextMenus.create({  id: "site",  title: " Site",  contexts: ["selection"] , parentId : "gd" });

            chrome.contextMenus.create({  id: "allintitle",  title: " Allintitle",  contexts: ["selection"] , parentId : "gd" });

            chrome.contextMenus.create({  id: "intitle",  title: " Intile",  contexts: ["selection"] , parentId : "gd" });

            chrome.contextMenus.create({  id: "allinurl",  title: " Allinurl",  contexts: ["selection"] , parentId : "gd" });

            chrome.contextMenus.create({  id: "inurl",  title: " Inurl",  contexts: ["selection"] , parentId : "gd" });

            chrome.contextMenus.create({  id: "ext",  title: " Extension",  contexts: ["selection"] , parentId : "gd" });

      
      chrome.contextMenus.create({  id: "os",  title: " Online Shopping",  contexts: ["selection"]  });

            chrome.contextMenus.create({  id: "amazon",  title: " Amazon",  contexts: ["selection"] , parentId : "os"  });

            chrome.contextMenus.create({  id: "flipkart",  title: " Flipkart",  contexts: ["selection"] , parentId : "os"   });

            chrome.contextMenus.create({  id: "snapdeal",  title: " Snapdeal",  contexts: ["selection"] , parentId : "os"   });

            chrome.contextMenus.create({  id: "ebay",  title: " Ebay",  contexts: ["selection"] , parentId : "os"   });


      chrome.contextMenus.create({  id: "se",  title: " Search engine ",  contexts: ["selection"]   });

            chrome.contextMenus.create({  id: "google",  title: " Google",  contexts: ["selection"] ,parentId : "se"  });

            chrome.contextMenus.create({  id: "bing", title: " Bing", contexts: ["selection"]  , parentId : "se"  });

            chrome.contextMenus.create({  id: "ddg",  title: " DuckDuckGo",  contexts: ["selection"]  , parentId : "se"  });

            chrome.contextMenus.create({  id: "aol",  title: " Aol",  contexts: ["selection"]  , parentId : "se"   });

            chrome.contextMenus.create({  id: "yahoo",  title: " Yahoo",  contexts: ["selection"]  , parentId : "se"   });

            chrome.contextMenus.create({  id: "ask",  title: " Ask",  contexts: ["selection"]  , parentId : "se"   });

            chrome.contextMenus.create({  id: "lycos",  title: " Lycos",  contexts: ["selection"]  , parentId : "se"   });

            chrome.contextMenus.create({  id: "excite",  title: " Excite",  contexts: ["selection"]  , parentId : "se"  });

            chrome.contextMenus.create({  id: "baidu",  title: " Baidu (Chinese)",  contexts: ["selection"]  , parentId : "se"   });

            chrome.contextMenus.create({  id: "yandex",  title: " Yandex (Russian)",  contexts: ["selection"] ,parentId : "se"  });


      chrome.contextMenus.create({  id: "sn",  title: " Social network ",  contexts: ["selection"]   });

            chrome.contextMenus.create({  id: "facebook",  title: " Facebook",  contexts: ["selection"] ,parentId : "sn"   });

            chrome.contextMenus.create({  id: "linkedin",  title: " LinkedIn",  contexts: ["selection"] , parentId : "sn"   });

            chrome.contextMenus.create({  id: "twitter",  title: " Twitter",  contexts: ["selection"] , parentId : "sn"   });

            chrome.contextMenus.create({  id: "insta",  title: " Instagram",  contexts: ["selection"] , parentId : "sn"   });

            chrome.contextMenus.create({  id: "tumblr",  title: " Tumblr",  contexts: ["selection"] , parentId : "sn"   });
      
      
      chrome.contextMenus.create({  id: "aftership",  title: " Track Package",  contexts: ["selection"]    });

      
      chrome.contextMenus.create({  id: "translate",  title: " Translate",  contexts: ["selection"] });

            chrome.contextMenus.create({  id: "hindi",  title: " Hindi",  contexts: ["selection"],  parentId: "translate" });
            
            chrome.contextMenus.create({  id: "english",  title: " English",  contexts: ["selection"],  parentId: "translate"  });
            
            chrome.contextMenus.create({  id: "german",  title: " German",  contexts: ["selection"],  parentId: "translate"  });
            
            chrome.contextMenus.create({  id: "french",  title: " French",  contexts: ["selection"],  parentId: "translate"  });

            chrome.contextMenus.create({  id: "spanish",  title: " Spanish",  contexts: ["selection"],  parentId: "translate"  });

            chrome.contextMenus.create({  id: "tamil",  title: " Tamil",  contexts: ["selection"],  parentId: "translate"  });
  
            chrome.contextMenus.create({  id: "telugu",  title: " Telugu",  contexts: ["selection"],  parentId: "translate"   });

      
      chrome.contextMenus.create({  id: "tc",  title: " True Caller ",  contexts: ["selection"]  });

            chrome.contextMenus.create({  id: "in",  title: " India",  contexts: ["selection"]  , parentId:"tc"  });

            chrome.contextMenus.create({  id: "us",  title: " United States",  contexts: ["selection"] , parentId: "tc"  });

            chrome.contextMenus.create({  id: "uk",  title: " United Kngdom",  contexts: ["selection"] , parentId: "tc"  });

            chrome.contextMenus.create({  id: "au",  title: " Australia",  contexts: ["selection"]  , parentId:"tc"  });

            chrome.contextMenus.create({  id: "ru",  title: " Russia",  contexts: ["selection"] , parentId: "tc"  });

            chrome.contextMenus.create({  id: "cn",  title: " China",  contexts: ["selection"] , parentId: "tc"   });

            chrome.contextMenus.create({  id: "fr",  title: " France",  contexts: ["selection"] , parentId: "tc"  });

            chrome.contextMenus.create({  id: "de",  title: " Germany",  contexts: ["selection"] , parentId: "tc"  });

            chrome.contextMenus.create({  id: "es",  title: " Spain",  contexts: ["selection"] , parentId: "tc"   });
     

      chrome.contextMenus.create({  id: "video",  title: " Video Sites",  contexts: ["selection"]   });

            chrome.contextMenus.create({  id: "youtube",  title: " YouTube",  contexts: ["selection"] ,parentId : "video"  });

            chrome.contextMenus.create({  id: "vimeo",  title: " Vimeo",  contexts: ["selection"] , parentId : "video"   });

            chrome.contextMenus.create({  id: "dailymotion",  title: " DailyMotion ",  contexts: ["selection"]  , parentId : "video"  });

     
      chrome.contextMenus.create({  id: "whois",  title: " WhoIs",  contexts: ["selection"]   });


      chrome.contextMenus.create({  id: "wiki",  title: " Wikipedia",  contexts: ["selection"]   });    

      
      chrome.contextMenus.create({  id: "wordpress",  title: " Wordpress",  contexts: ["selection"]  });


function contextMenuAction(info)
      {
          if(info != null && info.hasOwnProperty('menuItemId') && info.hasOwnProperty('selectionText'))
          {
              var searchURL = findChoice(info.menuItemId);
              var url = '';
    
              if(searchURL != '')
                  {   url = searchURL + info.selectionText;  }
           
              chrome.tabs.create({url: url})
          }
      }  

function findChoice(searchEngText)
{
          if(searchEngText == 'whois')
          {  return 'https://www.whois.com/whois/';   }

          else if(searchEngText == 'archive')
          {  return 'https://web.archive.org/web/*/';    }



  
          else if(searchEngText == 'cache')
          {  return 'https://www.google.co.in/search?q=cache%3A';  }
  
          else if(searchEngText == 'link')
          {  return 'https://www.google.co.in/search?q=link%3A';  }
  
          else if(searchEngText == 'related')
          {  return 'https://www.google.co.in/search?q=related%3A';  }
  
          else if(searchEngText == 'info')
          {  return 'https://www.google.co.in/search?q=info%3A';  }
  
          else if(searchEngText == 'site')
          {  return 'https://www.google.co.in/search?q=site%3A';  }
  
          else if(searchEngText == 'allintitle')
          {  return 'https://www.google.co.in/search?q=allintitle%3A';  }
  
          else if(searchEngText == 'intitle')
          {  return 'https://www.google.co.in/search?q=intitle%3A';  }
  
          else if(searchEngText == 'allinurl')
          {  return 'https://www.google.co.in/search?q=allinurl%3A';  }
  
          else if(searchEngText == 'inurl')
          {  return 'https://www.google.co.in/search?q=inurl%3A';  }
  
          else if(searchEngText == 'ext')
          {  return 'https://www.google.co.in/search?q=ext%3A';  }

          else if(searchEngText == 'wiki')
          {  return 'https://wikipedia.org/wiki/Search?search=';  }
        

          else if(searchEngText == 'aftership')
          {  return 'https://track.aftership.com/';    }



          else if(searchEngText == 'google')
          {  return 'https://www.google.co.in/search?q=';  }
        
          else if(searchEngText == 'bing')
          {  return 'http://www.bing.com/search?q=';  }
       
          else if(searchEngText == 'ddg')
          {  return 'https://duckduckgo.com/?q=';  }

          else if(searchEngText == 'aol')
          {  return 'https://search.aol.com/aol/search?s_chn=prt_bon&q=';  }

          else if(searchEngText == 'yahoo')
          {  return 'https://in.search.yahoo.com/search?p=';  }

          else if(searchEngText == 'baidu')
          {  return 'http://www.baidu.com/s?&wd=';  }

          else if(searchEngText == 'excite')
          {  return 'http://msxml.excite.com/search/web?q=';  }

          else if(searchEngText == 'yandex')
          {  return 'https://www.yandex.com/search/?text=';  }

          else if(searchEngText == 'ask')                                 
          {  return 'https://www.ask.com/web?q=';  }

          else if(searchEngText == 'lycos')                               
          {  return 'http://search14.lycos.com/web/?q=';  }  
        



          else if(searchEngText == 'youtube')
          {  return 'https://www.youtube.com/results?search_query=';  }

          else if(searchEngText == 'vimeo')
          {  return 'https://vimeo.com/search?q=';  }          

          else if(searchEngText == 'dailymotion')
          {  return 'http://www.dailymotion.com/relevance/universal/search/';  }     




          else if(searchEngText == 'facebook')
          {  return 'https://www.facebook.com/search/top/?q=';  }

          else if(searchEngText == 'twitter')
          {  return 'https://twitter.com/search?q=';  }

          else if(searchEngText == 'linkedin')
          {  return 'https://www.linkedin.com/search/results/index/?keywords=';  }

          else if(searchEngText == 'insta')
          {  return 'https://www.instagram.com/';  }

          else if(searchEngText == 'tumblr')
          {  return 'https://www.tumblr.com/search/';  }



          else if(searchEngText == 'github')
          {  return 'https://github.com/search?q=';  }

          

          else if(searchEngText == 'wordpress')
          {  return 'https://en.search.wordpress.com/?src=organic&q=';  }



          else if(searchEngText == 'oxford')
          {  return 'https://en.oxforddictionaries.com/definition/';  }

          else if(searchEngText == 'cambridge')
          {  return 'http://dictionary.cambridge.org/dictionary/english/';  }
  
          else if(searchEngText == 'dictionary')
          {  return 'http://www.dictionary.com/browse/';  }
  
          else if(searchEngText == 'collins')
          {  return 'https://www.collinsdictionary.com/dictionary/english/';  }
  
          else if(searchEngText == 'merriam-webster')
          {  return 'https://www.merriam-webster.com/dictionary/';  }

          


          else if(searchEngText == 'hindi')
          {  return 'https://translate.google.com/#auto/hi/';  }

          else if(searchEngText == 'english')
          {  return 'https://translate.google.com/#auto/en/';  }

          else if(searchEngText == 'french')
          {  return 'https://translate.google.com/#auto/fr/';  }
    
          else if(searchEngText == 'spanish')
          {  return 'https://translate.google.com/#auto/es/';  }

          else if(searchEngText == 'german')
          {  return 'https://translate.google.com/#auto/de/';  }

          else if(searchEngText == 'tamil')
          {  return 'https://translate.google.com/#auto/ta/';  }

          else if(searchEngText == 'telugu')
          {  return 'https://translate.google.com/#auto/en/';  }



        
          else if(searchEngText == 'amazon')
          {  return 'https://www.amazon.com/s/field-keywords=';  }

          else if(searchEngText == 'flipkart')
          {  return 'https://www.flipkart.com/search?q=';  }

          else if(searchEngText == 'snapdeal')
          {  return 'https://www.snapdeal.com/search?keyword=';  }

          else if(searchEngText == 'ebay')
          {  return 'https://www.ebay.in/sch/i.html?_nkw=';  }
            
      return '';
}