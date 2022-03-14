import { getPopular, getTop } from './servises.js';
import renderCard from './renderCard.js';

const title = document.querySelector('.other-films__title'),
    filmWeek = document.querySelector('.film-week'),
    getNav = document.querySelectorAll('.get_nav');


const menuLink = () => {
    getNav.forEach(nav => {
        nav.addEventListener('click', event => {
            
            const target = event.target.closest('.get_nav__link');

            if (target) {
                event.preventDefault();

                filmWeek.style.display = 'none';
                title.textContent = target.textContent;

                if(target.classList.contains('get_nav__link_trends')) {
                    getPopular()
                    .then(data => renderCard(data.results));
                }

                if(target.classList.contains('get_nav__link_popular-movies')) {
                    getPopular('movie')
                    .then(data => renderCard(data.results, 'movie'));
                }
                if(target.classList.contains('get_nav__link_popular-series')) {
                    getPopular('tv')
                    .then(data => renderCard(data.results, 'tv'));
                }

                if(target.classList.contains('get_nav__link_top-movies')) {
                    getTop('movie')
                    .then(data => renderCard(data.results, 'movie'));
                }
                if(target.classList.contains('get_nav__link_top-series')) {
                    getTop('tv')
                    .then(data => renderCard(data.results, 'tv'));
                }
            }
        });
    });
};

export default menuLink;