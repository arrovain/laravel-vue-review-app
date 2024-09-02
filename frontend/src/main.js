import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'vue-toastification/dist/index.css'
import Toast from 'vue-toastification'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)

.use(Toast)

mount('#app')
