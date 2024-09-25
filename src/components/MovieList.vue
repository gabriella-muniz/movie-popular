<template>
    <div class="p-4">
        <div v-for="(genreMovies, genre) in groupedMovies" :key="genre" class="mb-6">
            <h2 class="text-xl font-bold text-white mb-4">{{ genre }}</h2>
            <div class="flex overflow-x-auto overflow-y-hidden gap-4 scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
                <div
                    v-for="movie in genreMovies"
                    :key="movie.id"
                    class="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105 min-w-[150px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[250px]"
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
                            <h3 class="text-base sm:text-lg font-medium text-white">{{ movie.title }}</h3>
                            <div class="flex items-center">
                                <span class="text-yellow-500">
                                    <span
                                        v-for="star in Math.round(movie.vote_average / 2)"
                                        :key="star"
                                        class="material-icons text-sm sm:text-base"
                                    >star</span>
                                    <span
                                        v-for="star in 5 - Math.round(movie.vote_average / 2)"
                                        :key="star"
                                        class="material-icons text-gray-400 text-sm sm:text-base"
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
import tmdbApi from '../api/tmdb';

export default {
    data() {
        return {
            groupedMovies: {}
        };
    },
    async mounted() {
        await this.fetchAndGroupMoviesByGenre();
    },
    methods: {
        async fetchAndGroupMoviesByGenre() {
            try {
                const genresResponse = await tmdbApi.get('/genre/movie/list');
                const genres = genresResponse.data.genres;

                this.groupedMovies = {};
                for (const genre of genres) {
                    this.groupedMovies[genre.name] = await this.fetchMoviesByGenre(genre.id);
                }
            } catch (error) {
                console.error('Erro ao buscar filmes por gênero:', error);
            }
        },
        async fetchMoviesByGenre(genreId) {
            try {
                const response = await tmdbApi.get(`/discover/movie`, {
                    params: {
                        with_genres: genreId,
                        sort_by: 'popularity.desc',
                        page: 1
                    }
                });
                return response.data.results;
            } catch (error) {
                console.error(`Erro ao buscar filmes do gênero ${genreId}:`, error);
                return [];
            }
        }
    }
}
</script>

<style scoped>
/* Custom scrollbar styles */
.scrollbar-thin::-webkit-scrollbar {
  height: 8px;
  background-color: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background-color: transparent;
}

.scrollbar-thin::-webkit-scrollbar-button {
  display: none;
}

.overflow-y-hidden {
  overflow-y: hidden;
}
</style>

