import Vue from 'vue'
import App from './App'


import store from './store'

Vue.config.productionTip = false

import uniNumberBox from './components/uni-number-box/uni-number-box.vue'

Vue.prototype.$store = store

App.mpType = 'app'

Vue.component('uniNumberBox',uniNumberBox)



const app = new Vue({
    store,
    ...App
})
app.$mount()
