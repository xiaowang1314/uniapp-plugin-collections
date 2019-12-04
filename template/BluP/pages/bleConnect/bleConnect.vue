<template>
	<view class="content">
		<button class="btn" type="primary" @tap="startSearch">开始搜索 </button>
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
			clearTimeout(this.time);
		},
		methods: {
			//开始搜索蓝牙
			startSearch() {
				let that = this
				uni.openBluetoothAdapter({
					success(res) {
						uni.getBluetoothAdapterState({
							success(res2) {
								if (res2.available) {
									if (res2.discovering) {
										uni.stopBluetoothDevicesDiscovery({
											success: function(res3) {
												uni.showToast({
													title:'设备已是连接状态',
													icon:"none"
												})
												console.log('stop:', res3)
												
											}
										})
									}
									that.checkPemission()
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
				uni.showLoading({
					title: '正在搜索',
				})
				uni.startBluetoothDevicesDiscovery({
					success(res) {
						// console.log(res)
						that.time = setTimeout(() => {
							uni.getBluetoothDevices({
								success(res2) {						
									let devices = [];
									for (let i = 0; i < res2.devices.length; ++i) {
										if (res2.devices[i].name != "未知设备") {
											devices.push(res2.devices[i]);
										}
									}
									that.list = devices;
									// console.log(JSON.stringify(devices))
									uni.hideLoading()
								},
							})
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
				uni.stopBluetoothDevicesDiscovery({
					success(res) {
						console.log('stopBluetooth:', res)
					},
				})
				that.serviceId = 0;
				that.writeCharacter = false;
				that.readCharacter = false;
				that.notifyCharacter = false;
				uni.showLoading({
					title: '正在连接',
				})
				uni.createBLEConnection({
					deviceId: title,
					success(res) {
						// console.log(res)
						BLEInformation.deviceId = title;
						that.$store.commit('BLEInformationSet', BLEInformation);
						uni.hideLoading()
						that.getSeviceId()
					},
					fail(e) {
						uni.showModal({
							title: '提示',
							content: '连接失败',
						})
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
				uni.getBLEDeviceServices({
					deviceId: BLEInformation.deviceId,
					success(res) {
						// console.log(res)
						that.services = res.services;
						that.getCharacteristics()
					},
					fail: function(e) {
						console.log(e)
					}
				})
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
				uni.getBLEDeviceCharacteristics({
					deviceId: BLEInformation.deviceId,
					serviceId: list[num].uuid,
					success(res) {
						console.log(res)
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
						console.log(e)
					},
					complete: function(e) {
						// console.log("write:", BLEInformation.writeCharaterId)
						// console.log("read:", BLEInformation.readCharaterId)
						// console.log("notify:", BLEInformation.notifyCharaterId)
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
