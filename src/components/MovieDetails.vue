<template>
    <div class=" bg-gradient-to-r from-gray-900 to-gray-800 p-6 flex items-center">
        <div class="max-w-screen-lg mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row ">
            <!-- Imagem do Filme -->
            <div class="flex justify-center items-center md:w-1/3 p-4">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" class="w-full h-auto min-h-[300px] object-cover" />
            </div>

            <div class="p-6 flex flex-col justify-between md:w-2/3">
                <div>
                    <h1 class="text-4xl font-bold text-white font-font">{{ movie.title }}</h1>
                  
                    
                    <!-- Estrelas -->
                    <div class="flex items-center mt-1">
                        <span class="text-yellow-500">
                            <span v-for="star in Math.round(movie.vote_average / 2)" :key="star" class="material-icons">star</span>
                            <span v-for="star in 5 - Math.round(movie.vote_average / 2)" :key="star" class="material-icons text-gray-400">star</span>
                        </span>
                    </div>
                </div>
                <h2 class="text-2xl font-semibold mt-4 text-white font-font">Sinopse</h2>
                <p class="text-gray-300 ">{{ movie.overview }}</p>
                
                <div class="mt-6">
                    <h3 class="text-2xl font-semibold text-white font-font">Detalhes Adicionais:</h3>
                    <ul class="list-disc list-inside mt-2 text-gray-300">
                        <li><strong>Data de Lançamento:</strong> {{ movie.release_date }}</li>
                        <li><strong>Duração:</strong> {{ movie.runtime }} minutos</li>
                        <li><strong>Gêneros:</strong> 
                            <span v-for="(genre, index) in movie.genres" :key="genre.id">
                                {{ genre.name }}<span v-if="index < movie.genres.length - 1">, </span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tmdbApi from '../api/tmdb';

export default {
    data() {
        return {
            movie: {},
        };
    },
    async created() {
        await this.fetchMovieDetails();
    },
    methods: {
        async fetchMovieDetails() {
            const movieId = this.$route.params.id;
            try {
                const response = await tmdbApi.get(`/movie/${movieId}`);
                this.movie = response.data;
            } catch (error) {
                console.error('Erro ao buscar detalhes do filme:', error);
            }
        },
    },
};
</script>



