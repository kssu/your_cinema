import slideMenu from "./menu.js";
import renderVideo from "./renderVideo.js";
import menuLink from "./menuLink.js";
import search from "./search.js";

slideMenu({
	openBtn: '.header__burger-btn',
	menu: '.nav', 
	classActiveMenu: 'nav_active', 
	closeTrigger: '.nav__link, .nav__close'
});

renderVideo();
menuLink();
search();