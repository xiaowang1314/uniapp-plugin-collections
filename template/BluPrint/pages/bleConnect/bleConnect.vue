<template>
	<view class="content">
		
		<button class="btn" type="primary" :loading="isSearching" @tap="startSearch">开始搜索 </button>
		<button class="btn" type="warn" @tap="stopSearch">停止搜索</button>
		
		
		<view v-for="(item) in list" :data-title="item.deviceId" :data-name="item.name" :data-advertisData="item.advertisServiceUUIDs"
		 :key="item.deviceId" @tap="bindViewTap">
			<view class="item">
				<view class="deviceId block">{{item.deviceId}}</view>
				<view class="name block">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				isSearching: false, //是否正在搜索中
				list: [],
				services: [],
				serviceId: 0,
				writeCharacter: false,
				readCharacter: false,
				notifyCharacter: false
			};
		},
		computed: mapState(['sysinfo', 'Bluetooth']),
		onLoad() {
			// console.log(this.Bluetooth)
			
		},
		onUnload() {
			//停止搜索蓝牙设备
			if (this.isSearching) {
				uni.stopBluetoothDevicesDiscovery();
			}
		},
		methods: {
			//错误码提示
			errorCodeTip(code) {
				if (code == 0) {
					//正常
				} else if (code == 10000) {
					uni.showToast({
						title: '未初始化蓝牙适配器',
						icon: 'none'
					})
				} else if (code == 10001) {
					uni.showToast({
						title: '当前蓝牙适配器不可用',
						icon: 'none'
					})
				} else if (code == 10002) {
					uni.showToast({
						title: '没有找到指定设备',
						icon: 'none'
					})
				} else if (code == 10003) {
					uni.showToast({
						title: '连接失败',
						icon: 'none'
					})
				} else if (code == 10004) {
					uni.showToast({
						title: '没有找到指定服务',
						icon: 'none'
					})
				} else if (code == 10005) {
					uni.showToast({
						title: '没有找到指定特征值',
						icon: 'none'
					})
				} else if (code == 10006) {
					uni.showToast({
						title: '当前连接已断开',
						icon: 'none'
					})
				} else if (code == 10007) {
					uni.showToast({
						title: '当前特征值不支持此操作',
						icon: 'none'
					})
				} else if (code == 10008) {
					uni.showToast({
						title: '其余所有系统上报的异常',
						icon: 'none'
					})
				} else if (code == 10009) {
					uni.showToast({
						title: 'Android 系统特有，系统版本低于 4.3 不支持 BLE',
						icon: 'none'
					})
				}
			},
			//开始搜索蓝牙
			startSearch() {
				let that = this
				uni.openBluetoothAdapter({
					success(res) {
						uni.getBluetoothAdapterState({
							success(res2) {
								console.log('getBluetoothAdapterState:', res2)
								if (res2.available) {
									that.isSearching = true;
									if (res2.discovering) {
										uni.showToast({
											title: '正在搜索附近打印机设备',
											icon: "none"
										})
										return;
									}
			
									//获取蓝牙设备信息
									that.getBluetoothDevices()
			
									// that.checkPemission()
								} else {
									uni.showModal({
										title: '提示',
										content: '本机蓝牙不可用',
									})
								}
							}
						});
					},
					fail() {
						uni.showModal({
							title: '提示',
							content: '蓝牙初始化失败，请打开蓝牙',
						})
					}
				})
			},
			stopSearch() {
				uni.stopBluetoothDevicesDiscovery({
					success: (res) => {
						this.isSearching = false;
						console.log('stop:', res)
					},
					fail: (e) => {
						console.log('stop:', e)
						this.errorCodeTip(e.errCode);
					}
				})
			},
			//校验权限
			checkPemission() {
				let that = this
				let {
					BLEInformation
				} = that.Bluetooth;
				let platform = BLEInformation.platform;
				that.getBluetoothDevices();
			},
			//获取蓝牙设备信息
			getBluetoothDevices() {
				let that = this
				that.list = [];
				uni.startBluetoothDevicesDiscovery({
					success(res) {
						// console.log(res)
						//蓝牙设备监听 uni.onBluetoothDeviceFound
						plus.bluetooth.onBluetoothDeviceFound((result) => {
							console.log('onBluetoothDeviceFound:', result)
							let arr = that.list;
							let devices = [];
							let list = result.devices;
							for (let i = 0; i < list.length; ++i) {
								if (list[i].name && list[i].name != "未知设备") {
									let arrNew = arr.filter((item) => {
										return item.deviceId == list[i].deviceId;
									});
									// console.log('arrNew:',arrNew.length)
									if (arrNew.length == 0) {
										devices.push(list[i]);
									}
								}
							}
			
							that.list = arr.concat(devices);
						});
						that.time = setTimeout(() => {
							// uni.getBluetoothDevices
							plus.bluetooth.getBluetoothDevices({
								success(res2) {
									let devices = [];
									let list = res2.devices;
									for (let i = 0; i < list.length; ++i) {
										if (list[i].name && list[i].name != "未知设备") {
											devices.push(list[i]);
										}
									}
			
									that.list = devices;
									console.log('getBluetoothDevices:',res2);
								},
							})
			
							clearTimeout(that.time);
						}, 3000);
					}
				});
			
			},
			//绑定蓝牙
			bindViewTap(e) {
				let that = this;
				let {
					title
				} = e.currentTarget.dataset;
				let {
					BLEInformation
				} = that.Bluetooth;
				this.stopSearch();
				
				that.serviceId = 0;
				that.writeCharacter = false;
				that.readCharacter = false;
				that.notifyCharacter = false;
				uni.showLoading({
					title: '正在连接',
				})
				console.log('deviceId:', title)
				// uni.createBLEConnection
				plus.bluetooth.createBLEConnection({
					deviceId: title,
					success(res) {
						console.log('createBLEConnection success:', res)
						BLEInformation.deviceId = title;
						that.$store.commit('BLEInformationSet', BLEInformation);
						uni.hideLoading()
						that.getSeviceId()
					},
					fail(e) {
						that.errorCodeTip(e.errCode);
						uni.hideLoading()
					}
				})
			},
			//获取蓝牙设备所有服务(service)。
			getSeviceId() {
				let that = this;
				let {
					BLEInformation
				} = that.Bluetooth;
				console.log('BLEInformation.deviceId:',BLEInformation.deviceId)
				// uni.getBLEDeviceServices
				let t=setTimeout(()=>{
					plus.bluetooth.getBLEDeviceServices({
						deviceId: BLEInformation.deviceId,
						success(res) {
							console.log('getBLEDeviceServices success:',res)
							that.services = res.services;
							that.getCharacteristics()
						},
						fail: function(e) {
							that.errorCodeTip(e.code);	
							console.log('getBLEDeviceServices fail:',e)
						}
					})
					clearTimeout(t);
				},1500)
			},
			getCharacteristics() {
				var that = this
				let {
					services: list,
					serviceId: num,
					writeCharacter: write,
					readCharacter: read,
					notifyCharacter: notify
				} = that;
				let {
					BLEInformation
				} = that.Bluetooth;
				// uni.getBLEDeviceCharacteristics
				plus.bluetooth.getBLEDeviceCharacteristics({
					deviceId: BLEInformation.deviceId,
					serviceId: list[num].uuid,
					success(res) {
						// console.log(res)
						for (var i = 0; i < res.characteristics.length; ++i) {
							var properties = res.characteristics[i].properties
							var item = res.characteristics[i].uuid
							if (!notify) {
								if (properties.notify) {
									BLEInformation.notifyCharaterId = item;
									BLEInformation.notifyServiceId = list[num].uuid;
									that.$store.commit('BLEInformationSet', BLEInformation);
									notify = true
								}
							}
							if (!write) {
								if (properties.write) {
									BLEInformation.writeCharaterId = item;
									BLEInformation.writeServiceId = list[num].uuid;
									that.$store.commit('BLEInformationSet', BLEInformation);
									write = true
								}
							}
							if (!read) {
								if (properties.read) {
									BLEInformation.readCharaterId = item;
									BLEInformation.readServiceId = list[num].uuid;
									that.$store.commit('BLEInformationSet', BLEInformation);
									read = true
								}
							}
						}
						if (!write || !notify || !read) {
							num++
							that.writeCharacter = write;
							that.readCharacter = read;
							that.notifyCharacter = notify;
							that.serviceId = num;
							if (num == list.length) {
								uni.showModal({
									title: '提示',
									content: '找不到该读写的特征值',
								})
							} else {
								that.getCharacteristics()
							}
						} else {
							that.openControl()
						}
					},
					fail: function(e) {
						console.log("getBLEDeviceCharacteristics fail：",e);
						that.errorCodeTip(e.errCode);	
					}
				})
			},
			openControl: function() {
				uni.navigateTo({
					url: '/pages/sendCommand/sendCommand',
				})
			},
		}
	}
</script>

<style lang="less">
	.btn {
		margin-top: 50rpx;
		height: 40px;
		width: 600rpx;
		line-height: 40px;
	}

	.item {
		display: block;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 14px;
		margin: 0 30px;
		margin-top: 10px;
		background-color: #FFA850;
		border-radius: 5px;
		border-bottom: 2px solid #68BAEA;
	}

	.block {
		display: block;
		color: #ffffff;
		padding: 5px;
	}
</style>
