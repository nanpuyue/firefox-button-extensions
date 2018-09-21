browser.browserAction.onClicked.addListener(async () => {
	try {
		browser.windows.getCurrent().then((currentWindow) => {
			if (currentWindow.state == "normal") {
				browser.windows.update(currentWindow.id, { state: "maximized" });
			} else {
				browser.windows.update(currentWindow.id, { state: "normal" });
			};
		});
	} catch (err) { console.error(err) }
})