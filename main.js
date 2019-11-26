import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import countUp from './components/countUp.vue'
import validCode from './components/validCode.vue'
import savefile from './components/saveFile.vue'
import screenTextScroll from './components/screenTextScroll.vue'
import loading from './components/loading/loading.vue'
//瀑布流纵向display:flex 支持H5 Ios Android
import waterfall from './components/waterfall.vue'
//瀑布流横向display:flex 支持H5 Ios Android
import waterfall2 from './components/waterfall2.vue'
// 自定义扫码
import scan from './components/scan.vue'
//模拟电池充电
import battery from './components/battery/battery.vue'
//flex实现表格布局
import table from './components/table/table.vue'


Vue.component('countup', countUp)
Vue.component('validcode', validCode)
Vue.component('savefile', savefile)
Vue.component('textscroll', screenTextScroll)
Vue.component('loading', loading)
Vue.component('waterfall', waterfall)
Vue.component('waterfall2', waterfall2)
Vue.component('scan', scan)
Vue.component('battery', battery)
Vue.component('m-table', table)


App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
