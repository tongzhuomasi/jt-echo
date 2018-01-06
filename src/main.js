// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// css
import '@/assets/css/reset.css'

// 第三方库
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'
import 'material-design-icons/iconfont/material-icons.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueProgressBar from 'vue-progressbar'

// mock数据
import './mock/mock.js'

// 自定义组件
import musicBar from '@/components/musicBar'
import sheet from '@/components/sheet'
import banner from '@/components/banner'
import list from '@/components/list'

Vue.config.productionTip = false

Vue.use(MuseUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

Vue.component('music-bar', musicBar)
Vue.component('my-sheet', sheet)
Vue.component('my-banner', banner)
Vue.component('my-list', list)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
