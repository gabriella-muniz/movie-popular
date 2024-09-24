<template>
    <div class="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
        <h1 class="font-font2 text-center text-white text-3x2">Clique nos filmes e veja mais detalhes</h1>
        <MovieList />
    </div>
</template>

<script>

import MovieList from './MovieList.vue';

export default {
    components: {
        MovieList
    }
}
</script>
