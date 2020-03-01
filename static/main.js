window.addEventListener("load", () => {
	var userAgent = new UserAgent().parse(navigator.userAgent);

	if (!userAgent.isMobile) {
		// change display to grid if not on mobile
		document.getElementById('grid-parent').style.display = "grid";
		// display links in different places depending on platform
		document.getElementById('desktop-links').style.display = "inline"
		// change link to open in new tab
		document.getElementById('stormlink').target = "_blank";
		document.getElementById('sitelink').target = "_blank";
	}
	else {
		document.getElementById('mobile-links').style.display = "inline"
	}
})