import { getTrends, getVideo} from "./servises.js";
import renderCard from "./renderCard.js";

const filmWeek = document.querySelector('.film-week');

const firstRender = (data, { key }) => {
  const {
    backdrop_path: backdropPath,
    original_title: originalTitle,
    original_name: originalName,
    title,
    overview,
    name
  } = data;
    filmWeek.innerHTML = `
        <div class="container film-week__container" >
            <img src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdropPath}" alt="poster ${title || name}" class="film-week__poster">
            <h2 class="film-week__title">${originalTitle || originalName}</h2>
            <div class="film-week__tagline">${overview}</div>
            
            ${key ? 
                `<a class="film-week__watch-trailer tube" href="https://www.youtube.com/watch?v=${key}" aria-label="watch trailer">
                </a>` : 
                ''}
           
        </div>
    `;

    
};

const renderVideo = async () => {
    const data = await getTrends();

    const [ firstCard, ...otherCard ] = data.results;
    otherCard.length = 16;

    const video = await getVideo(firstCard.id, firstCard.media_type);

    firstRender(firstCard, video.results[0]);
    renderCard(otherCard);
};
export default renderVideo;