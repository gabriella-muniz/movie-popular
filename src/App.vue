<template>
  <div class="bg-gradient-to-r from-gray-900 to-gray-800">
      <Header/>
     <main>
      <RouterView />
     </main>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';

export default {
  components: {
      Header,
      Home
  }
}
</script>
