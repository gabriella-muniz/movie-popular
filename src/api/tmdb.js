import axios from 'axios';

const apiKey = 'b05a2f32f2e5baa2386abe3cffbd21e6'; 
const baseUrl = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: apiKey,
        language: 'pt-BR', // ou o idioma que preferir
    },
});

export default tmdbApi;
