import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import MovieDetails from '../components/MovieDetails.vue'; 

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/movie/:id', // Rota dinâmica para detalhes do filme
        name: 'MovieDetails',
        component: MovieDetails,
    },
    {
        path: '/search',
        name: 'SearchResults',
        component: () => import('@/components/SearchResults.vue'), 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

