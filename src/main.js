import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createPinia } from 'pinia'
import { createYmaps } from 'vue-yandex-maps'
const app = createApp(App)

app.use(store)
app.use(router)
app.use(createPinia())
app.use(createYmaps({
    apikey: '7ea6a1cc-6a25-4ff0-8df3-114c9b0766a4',
}));

app.mount('#app')