window.onscroll = function() { stickyMenu(); displayScrollButton(); }
window.onload = function() { stickyMenu(); displayScrollButton(); }

// Make the menu sticky
var menu = document.getElementsByClassName('menu-bar')[0];
var sticky = menu.offsetTop;

function stickyMenu() {
	if (window.pageYOffset > sticky) {
		menu.classList.add('fixed-menu');
	} else {
		menu.classList.remove('fixed-menu');
	}
}

// Display the scroll button
var buttonScroll = document.getElementById('button-scrollup');

function displayScrollButton() {
	if (window.pageYOffset > 250) {
		buttonScroll.classList.add('is-visible');
	} else {
		buttonScroll.classList.remove('is-visible');
	}
}

// Click and scroll to top
buttonScroll.onclick = function topFunction() {
	var cosParameter = window.pageYOffset / 2,
		scrollCount = 0,
		oldTimestamp = performance.now();

	function step (newTimestamp) {
		scrollCount += Math.PI / (1000 / (newTimestamp - oldTimestamp));
		if (scrollCount >= Math.PI) window.scrollTo(0, 0);
		if (window.pageYOffset === 0) return;
		window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
		oldTimestamp = newTimestamp;
		window.requestAnimationFrame(step);
	}
	window.requestAnimationFrame(step);
}

// Select menu: go to url
var buttonGoto = document.getElementById('button-goto');

buttonGoto.onchange = function gotoUrl() {
	var icon_select = document.getElementsByClassName('icon-select')[0];
	icon_select.classList.add('not-visible')
	window.location = document.getElementById('button-goto').value;
}

// Toggle light/dark modes
var buttonColors = document.getElementById('button-colors')
var colorized = document.body;

buttonColors.onclick = function colorMode() {
	if (window.localStorage.toggled != 'dark' ) {
		colorized.classList.add('dark');
		colorized.classList.remove('default');
		window.localStorage.toggled = 'dark';
	} else {
		colorized.classList.add('default');
		colorized.classList.remove('dark');
		window.localStorage.toggled = 'default';
	}
}

// No transitions
function noTr() {
	var rtime;
	var delta = 250;
	var timeout = false;
	var element = document.getElementsByClassName('no-tr')[0];

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
}

noTr()
