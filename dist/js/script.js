import slideMenu from "./menu.js";
import renderVideo from "./renderVideo.js";

slideMenu({
	openBtn: '.header__burger-btn',
	menu: '.nav', 
	classActiveMenu: 'nav_active', 
	closeTrigger: '.nav__link, .nav__close'
});

renderVideo();
