window.onscroll = function() { stickyMenu(); scrollToTop(); }

function stickyMenu() {
	var menu = document.getElementsByClassName("sticky")[0];
	var sticky = menu.offsetTop;
	if (window.pageYOffset > sticky) {
		menu.classList.add("fixed-menu");
	} else {
		menu.classList.remove("fixed-menu");
	}
}

var button = document.getElementsByClassName("scrollup")[0];

function scrollToTop() {
	if (window.pageYOffset > 250) {
		button.classList.add("is-visible");
	} else {
		button.classList.remove("is-visible");
	}
}

function topFunction(scrollDuration) {
	var cosParameter = window.scrollY / 2,
		scrollCount = 0,
		oldTimestamp = performance.now();
	function step (newTimestamp) {
		scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
		if (scrollCount >= Math.PI) window.scrollTo(0, 0);
		if (window.scrollY === 0) return;
		window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
		oldTimestamp = newTimestamp;
		window.requestAnimationFrame(step);
	}
	window.requestAnimationFrame(step);
}

function gotoUrl() {
	window.location = document.getElementById("goto").value;
}

function hideIcon() {
	var icon_select = document.getElementsByClassName("icon-select")[0]
	icon_select.classList.add("not-visible")
}
