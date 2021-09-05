chartTradingView = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.tradingview.com/chart/?symbol=" + query});
  chrome.tabs.create({url: "https://www.barchart.com/stocks/quotes/" + query});
  chrome.tabs.create({url: "https://seekingalpha.com/symbol/" + query});
  chrome.tabs.create({url: "https://sg.finance.yahoo.com/quote/" + query});
};

chrome.contextMenus.create({
  title: "Stock Spotlight",
  contexts:["selection"],
  onclick: chartTradingView
});
