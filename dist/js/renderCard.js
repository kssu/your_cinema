import { getVideo } from "./servises.js";

const listCards = document.querySelector('.other-films__list');


const renderCard = async (data, type = 'all') => {

    listCards.textContent = '';

    Promise.all(data.map(async (item) => {
		const mediaType = item.media_type ?? type;

        const video = await getVideo(item.id, mediaType);
        const key = video.results[0]?.key;
        const card = document.createElement('li');
        card.className = 'other-films__item';
     

        const link = document.createElement('a');
        if (key) link.href = `https://www.youtube.com/watch?v=${key}`;
        link.className = 'other-films__link tube';

        const img = document.createElement('img');
        img.className = 'other-films__img';
        img.alt = `poster ${item.title || item.name}`;
        
        img.src = item.poster_path ?
        `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}` :
        'img/no-poster.png';

        link.append(img);
        card.append(link);
        return card;
    })).then(cards => listCards.append(...cards));
    


       // listCards.append(...cards);
 
};


export default renderCard;