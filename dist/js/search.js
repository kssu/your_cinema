import { search as searchGet } from "./servises.js";
import renderCard from "./renderCard.js";

const title = document.querySelector('.other-films__title'),
    filmWeek = document.querySelector('.film-week'),
    searchForm = document.querySelector('.header__search-form'),
    searchInput = document.querySelector('.header__search-input');

const search = () => {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!searchInput.value) return;
        searchGet(searchInput.value)
        .then(data => {
            console.log('data : ', data);
            if(data.results.length) {
                renderCard(data.results);
            } else {
                throw 'Unfortunatelly, it doesnt work';
            } 
        })
        .then(() => {
            filmWeek.remove();
            title.textContent = 'Search results';
        });
    });
};

export default search;