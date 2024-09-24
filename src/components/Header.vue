<template>
    <header class="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 shadow-lg">
        <div class="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
            <router-link to="/" class="mb-2">
                <h1 class="text-4xl font-semibold font-font">Movie Popular</h1>
            </router-link>
            <input
                type="text"
                placeholder="Busque por filmes..."
                class="mt-2 p-2 w-full max-w-md rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-yellow-500 border border-gray-600"
            />
        </div>
       
        <hr class="border-gray-600 w-full mt-4 mb-4" />
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}
</style>
