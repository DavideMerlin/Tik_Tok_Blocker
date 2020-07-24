chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["*://www.tiktok.com/*"]
    },
    ["blocking"]
);
