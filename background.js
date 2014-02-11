chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
	chrome.tabs.executeScript(null, {file:"content.js"});
});

chrome.webRequest.onCompleted.addListener(function(details) {
    chrome.tabs.executeScript({'file' : 'content.js'});
}, {urls : ["*://*.facebook.com/*"]});
