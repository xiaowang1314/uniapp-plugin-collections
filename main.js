import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import countUp from './components/countUp.vue'
import validCode from './components/validCode.vue'

Vue.component('countup',countUp)
Vue.component('validcode',validCode)


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

