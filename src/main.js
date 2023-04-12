import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import '@/assets/css/style.css'

window.app =  createApp(App)
                .use(router)
                .mount('#app')
