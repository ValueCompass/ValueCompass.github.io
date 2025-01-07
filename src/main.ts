import { createApp } from 'vue'
import 'element-plus/dist/index.css'

import './common/reset.css'
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'virtual:svg-icons-register'
import SvgIcon from './components/svgIcon.vue'

const app = createApp(App);
app.component('SvgIcon', SvgIcon)
app.use(router)
app.mount('#app')