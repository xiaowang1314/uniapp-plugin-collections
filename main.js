import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import countUp from './components/countUp.vue'
import validCode from './components/validCode.vue'
import savefile from './components/saveFile.vue'
import screenTextScroll from './components/screenTextScroll.vue'
import loading from './components/loading/loading.vue'

Vue.component('countup',countUp)
Vue.component('validcode',validCode)
Vue.component('savefile',savefile)
Vue.component('textscroll',screenTextScroll)
Vue.component('loading',loading)


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

