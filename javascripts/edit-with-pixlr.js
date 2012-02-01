chrome.contextMenus.create({
  type: "normal",
  title: "Edit with Pixlr",
  contexts: ["image"],
  onclick: function(info) {
    chrome.tabs.create({
      url: "http://pixlr.com/editor/?image=" + info.srcUrl
    });
  }
});
