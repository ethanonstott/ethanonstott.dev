var userAgent = new UserAgent().parse(navigator.userAgent);
function determinePlatform() {
	var orientation = window.screen.orientation;
	var landscape = (userAgent.isTablet && (orientation.type == "landscape-primary" || orientation.type == "landscape-secondary") && window.innerWidth >= 1200)

	if (!userAgent.isMobile || landscape) {
		// change display to grid if not on mobile
		document.getElementById('grid-parent').style.display = "grid";
		// display links in different places depending on platform
		document.getElementById('desktop-links').style.display = "inline"
		document.getElementsByClassName('one')[0].style.height = "100vh";
		document.getElementsByClassName('two')[0].style.height = "100vh";
		// change link to open in new tab
		document.getElementById('stormlink').target = "_blank";
		document.getElementById('sitelink').target = "_blank";
	}
	else {
		document.getElementById('mobile-links').style.display = "inline";
		document.getElementById('desktop-links').style.display = "none"
		document.getElementById('grid-parent').style.display = "inline";
		document.getElementById('stormlink').target = "_self";
		document.getElementById('sitelink').target = "_self";
		document.getElementsByClassName('one')[0].style.height = "50px";
		document.getElementsByClassName('two')[0].style.height = window.innerHeight - 110 + "px"
	}
}

window.addEventListener("load", () => { determinePlatform() })

window.addEventListener("resize", () => { determinePlatform() })