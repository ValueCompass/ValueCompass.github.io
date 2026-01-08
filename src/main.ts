import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './scss/reset.css'
import './scss/style.css'
import './scss/common.scss'

import App from './App.vue'
import router from './router/index'
import 'virtual:svg-icons-register'
import SvgIcon from './components/svgIcon.vue'

import { createPinia } from 'pinia'
import i18n from './i18n/index'


const app = createApp(App);
app.component('SvgIcon', SvgIcon)

app.use(ElementPlus)
app.use(router)
app.use(i18n)

app.use(createPinia())

app.mount('#app')