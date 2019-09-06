(function() {
	"use strict";
	window.onscroll = function() {stickyMenu()};

	function stickyMenu() {
		var menu = document.getElementsByClassName("sticky")[0];
		var sticky = menu.offsetTop;
		if (window.pageYOffset > sticky) {
			menu.classList.add("fixed-menu");
		} else {
			menu.classList.remove("fixed-menu");
		}
		console.log(sticky);
	}
})();
