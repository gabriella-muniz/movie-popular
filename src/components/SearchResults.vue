<template>
    <div class="p-4">
        <h2 class="text-2xl font-bold text-white mb-4">Resultados da Pesquisa</h2>
        <div v-if="loading" class="text-white">Carregando...</div>
        <div v-else-if="movies.length === 0" class="text-white">Nenhum filme encontrado.</div>
        <div v-else>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                <div
                    v-for="movie in movies"
                    :key="movie.id"
                    class="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105"
                >
                    <router-link :to="`/movie/${movie.id}`">
                        <div class="aspect-[2/3]"> 
                            <img
                                :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                                :alt="movie.title"
                                class="w-full h-full object-cover"
                            />
                        </div>
                        <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
                        <div class="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4">
                            <h3 class="text-lg font-medium text-white">{{ movie.title }}</h3>
                            <div class="flex items-center">
                                <span class="text-yellow-500">
                                    <span
                                        v-for="star in Math.round(movie.vote_average / 2)"
                                        :key="star"
                                        class="material-icons"
                                    >star</span>
                                    <span
                                        v-for="star in 5 - Math.round(movie.vote_average / 2)"
                                        :key="star"
                                        class="material-icons text-gray-400"
                                    >star</span>
                                </span>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tmdbApi from '../api/tmdb'; // Certifique-se de importar sua API

export default {
    data() {
        return {
            movies: [],
            loading: true,
        };
    },
    async mounted() {
        await this.fetchMovies();
    },
    methods: {
        async fetchMovies() {
            const query = this.$route.query.query;
            if (query) {
                try {
                    const response = await tmdbApi.get('/search/movie', {
                        params: { query: query }
                    });
                    this.movies = response.data.results;
                } catch (error) {
                    console.error('Erro ao buscar filmes:', error);
                } finally {
                    this.loading = false;
                }
            } else {
                this.loading = false; // Se não houver consulta, pare de carregar
            }
        }
    }
}
</script>

<style scoped>
/* Adicione qualquer estilo adicional aqui */
.relative {
    height: 100%;
}
</style>

