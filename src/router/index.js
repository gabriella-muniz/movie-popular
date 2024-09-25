import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
import MovieDetails from '../components/MovieDetails.vue'; 

const router = createRouter({
    history: createWebHashHistory(), 
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/movie/:id', 
        name: 'MovieDetails',
        component: MovieDetails,
    },
    {
        path: '/search',
        name: 'SearchResults',
        component: () => import('../components/SearchResults.vue'), 
    },
]
});

export default router;

