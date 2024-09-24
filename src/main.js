import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

// Crie a aplicação Vue e use o router antes de montá-la
createApp(App)
    .use(router) // Adiciona o Vue Router
    .mount('#app'); // Monta a aplicação no elemento com id "app"
