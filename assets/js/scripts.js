window.onscroll = function() { stickyMenu(); displayScrollButton(); }
window.onload = function() { stickyMenu(); displayScrollButton(); }

// Make the menu sticky
var menu = document.getElementsByClassName('menu-bar')[0];
var sticky_menu = document.getElementsByClassName('sticky-menu')[0];
var offTop = menu.offsetTop;

function stickyMenu() {
	if (sticky_menu) {
		if (window.pageYOffset > offTop) {
			menu.classList.add('fixed-menu');
		} else {
			menu.classList.remove('fixed-menu');
		}
	}
}

// Display the scroll button
var buttonScroll = document.getElementById('button-scrollup');

function displayScrollButton() {
	if (buttonScroll) {
		if (window.pageYOffset > 250) {
			buttonScroll.classList.add('is-visible');
		} else {
			buttonScroll.classList.remove('is-visible');
		}
	}
}

// Click and scroll to top
if (buttonScroll) {
	buttonScroll.onclick = function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	}
}

// Toggle light/dark modes
var buttonColors = document.getElementById('button-colors');
var colorized = document.body;

if (buttonColors) {
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
}

// Responsive menu
var buttonNav = document.getElementById('button-nav');
var closeNav = document.getElementById('close-nav');
var listNav = document.getElementById('navigation');

if (buttonNav) {
	buttonNav.onclick = function toggleMenu() {
		if (listNav.classList.contains("menu-visible")) {
			listNav.classList.remove('menu-visible');
			buttonNav.classList.remove('is-open');
		} else {
			listNav.classList.add('menu-visible');
			buttonNav.classList.add('is-open');
		}
	}
}

if (closeNav) {
	closeNav.onclick = function closeMenu() {
		listNav.classList.remove('menu-visible');
		buttonNav.classList.remove('is-open');
	}
}
