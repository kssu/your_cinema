window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let burgerBtn = document.querySelector('.header__burger-btn'),
        closeBtn = document.querySelector('.nav__close'),
        navigation = document.querySelector('.nav');

    burgerBtn.addEventListener('click', function() {
        navigation.style.display = 'flex';
    });
    closeBtn.addEventListener('click', function() {
        navigation.style.display = 'none';
    });
});