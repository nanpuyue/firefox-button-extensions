browser.browserAction.onClicked.addListener(async () => {
	try {
		browser.windows.getCurrent().then((currentWindow) => {
			var updateInfo = {
				state: "minimized"
			};
			browser.windows.update(currentWindow.id, updateInfo);
		});
	} catch (err) { console.error(err) }
})