import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import validCode from './components/validCode.vue'

Vue.component('validcode',validCode)


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
