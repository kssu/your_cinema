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