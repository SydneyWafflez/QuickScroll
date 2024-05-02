chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: scrollToBottom
    });
});

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}
