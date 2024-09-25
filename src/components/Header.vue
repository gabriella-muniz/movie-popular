<template>
    <header class="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 shadow-lg">
        <div class="max-w-screen-xl mx-auto flex items-center justify-between">
            <!-- Logo e Título -->
            <router-link to="/" class="text-2xl font-semibold">
                <h1 class="text-4xl font-font">Movie Popular</h1>
            </router-link>

            <!-- Menu para Desktop -->
            <nav class="hidden md:flex space-x-6">
                <router-link to="/" class="hover:text-yellow-500 transition">Home</router-link>
            </nav>

            <!-- Botão do Menu Mobile -->
            <div class="md:hidden">
                <button @click="toggleMenu" class="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Menu Mobile -->
        <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-2">
            <router-link to="/" class="block text-center p-2 bg-gray-800 rounded hover:bg-gray-700 transition">Home</router-link>
            
        </div>

        <!-- Barra de Pesquisa -->
        <div class="mt-4 flex justify-center">
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Busque por filmes..."
                class="p-2 w-full max-w-md rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-yellow-500 border border-gray-600"
                @keyup.enter="searchMovies"
            />
        </div>

        <hr class="border-gray-600 w-full mt-4 mb-4" />
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
            searchQuery: ''
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        searchMovies() {
            // Verifica se a pesquisa não está vazia
            if (this.searchQuery.trim()) {
                // Redireciona para a página de resultados de pesquisa
                this.$router.push(`/search?query=${encodeURIComponent(this.searchQuery)}`);
                // Limpa a barra de pesquisa após a busca
                this.searchQuery = '';
            }
        }
    }
}
</script>



