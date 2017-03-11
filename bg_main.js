chrome.contextMenus.create({
    "title": "히토미로 가버렷",
    "contexts": ["selection"],
    "onclick": function (info) {
		//alert(info.selectionText);
		chrome.windows.create({
			"url":"https://hitomi.la/galleries/"+info.selectionText+".html",
			"incognito": true,
			"state": "maximized"
		});
		
		
		
    }
  });