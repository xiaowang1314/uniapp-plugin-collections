import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//蓝牙设置
import Bluetooth from '@/store/bluetooth/index.js'



const store = new Vuex.Store({
	modules: {
		Bluetooth
	},
	state: {
		sysinfo: uni.getSystemInfoSync(),//系统信息
	},
	mutations: {
	
	}
})

export default store
