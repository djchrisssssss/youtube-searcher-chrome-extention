chrome.runtime.onInstalled.addListener(function (details) {
chrome.contextMenus.create({
type: 'normal',
title: 'Search YouTube for "%s"',
id: 'myContextMenuItem',
contexts: ['all']
}, function () {
console.log('contextMenus are create.');
});
});

function onClickHandler(info, tab) {
// alert(info.selectionText);
var newwin = window.open();
newwin.location= "https://www.youtube.com/results?search_query=" + encodeURI(info.selectionText);
}
chrome.contextMenus.onClicked.addListener(onClickHandler);