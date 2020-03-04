let sysinfo = uni.getSystemInfoSync();
const Bluetooth = {
	state: {
		//蓝牙信息
		BLEInformation: {
			platform: sysinfo.platform || "",
			deviceId: "",
			writeCharaterId: "",
			writeServiceId: "",
			notifyCharaterId: "",
			notifyServiceId: "",
			readCharaterId: "",
			readServiceId: "",
		}
	},
	mutations:{
		BLEInformationSet(state, info){
			state.BLEInformation = info;
		}
	}
}

export default Bluetooth;
