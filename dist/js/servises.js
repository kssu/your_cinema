const API_KEY = 'ec5fcfd6c7265257066eb8a08479c651',
    BASE_URL = 'https://api.themoviedb.org/3/';
const LANGUAGE = '&language=en-EN';


    const getData = url => fetch(url)
        .then(response =>  {
            if (response.ok) {
                return response.json();
            } 
            throw `ERROR! ${response.status}`;
        })
        .catch(err => console.error(err));
    

    export const getTrends = async (type = 'all', period = 'day', page = 1) => {
        const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
        return await getData(url);   
    };

    export const getTop = async (type, page = 1) => {
        const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANGUAGE}&page=${page}`;

        return await getData(url);
    };


    export const getPopular = async (type, page = 1) => {
        const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANGUAGE}&page=${page}`;

        return await getData(url);
    };

    export const getVideo = async (id, type) => {
        const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANGUAGE}`;
        return await getData(url);
    };


    export const search = async(query, page) => {
        const url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANGUAGE}&page=${page}&include_adult=false&query=${query}`;
        return await getData(url);
    };