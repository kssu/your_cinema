const openMenu = (nav, active) => {
    nav.classList.add(active);
};

const closeMenu = (nav, active) => {
    nav.classList.remove(active);
};

const slideMenu = ({openBtn, menu, classActiveMenu, closeTrigger}) => {



    let burgerBtn = document.querySelector(openBtn),
        nav = document.querySelector(menu),
        navClose = document.querySelectorAll(closeTrigger);


        burgerBtn.addEventListener('click', function() {
            openMenu(nav, classActiveMenu);
        });

        navClose.forEach((item )=> {
            item.addEventListener('click', () => {
                closeMenu(nav, classActiveMenu);
            });
        }); 
};

export default slideMenu;