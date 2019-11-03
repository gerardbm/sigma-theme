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

function scrollToTop() {
	var button = document.getElementsByClassName("scrollup")[0];
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
	var icon_select = document.getElementsByClassName("icon-select")[0];
	icon_select.classList.add("not-visible")
	window.location = document.getElementById("goto").value;
}

document.addEventListener("DOMContentLoaded", function(event) {
	var rtime;
	var delta = 250;
	var timeout = false;
	var element = document.getElementsByClassName("home")[0];

	function resize() {
		rtime = new Date();
		if (timeout === false) {
			timeout = true;
			setTimeout(resize_end, delta);
		}
		element.classList.add('no-transition');
	}

	window.onresize = resize;

	function resize_end() {
		if (new Date() - rtime < delta) {
			setTimeout(resize_end, delta);
		} else {
			timeout = false;
			element.classList.remove('no-transition');
		}
	}
});
