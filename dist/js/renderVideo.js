import { getTrends } from "./servises.js";

const filmWeek = document.querySelector('.film-week');

const firstRender = data => {
    filmWeek.innerHTML = `
        <div class="container film-week__container" >
            <img src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}" alt="poster ${data.title || data.name}" class="film-week__poster">
            <h2 class="film-week__title">${data.original_title || data.original_name}</h2>
            <div class="film-week__tagline">${data.overview}</div>
            <button class="film-week__btn">Watch trailer</button>
            <a class="film-week__watch-trailer" href="https://www.youtube.com/watch?v=8g18jFHCLXk" aria-label="watch trailer"></a>
        </div>
    `;

    
};

const renderVideo = async () => {
    const data = await getTrends();

    firstRender(data.results[0]);
};
export default renderVideo;