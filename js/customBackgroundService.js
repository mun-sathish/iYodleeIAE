chrome.tabs.onUpdated.addListener(function(e,t,c){"complete"==t.status&&chrome.tabs.executeScript(c.id,{file:"js/customBackgroundHandler.js",runAt:"document_end"})});