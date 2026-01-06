import { createApp } from 'vue'
import 'element-plus/dist/index.css'

import './scss/reset.css'
import './scss/style.css'
import './scss/common.scss'

import App from './App.vue'
import router from './router/index'
import 'virtual:svg-icons-register'
import SvgIcon from './components/svgIcon.vue'

import { createPinia } from 'pinia'
import Vue3Spline from 'vue3-spline'


const app = createApp(App);
app.component('SvgIcon', SvgIcon)


app.use(router)
app.use(Vue3Spline)

app.use(createPinia())

app.mount('#app')