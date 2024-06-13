<template>
	<view>
		<licensePlate :licensePlateDefault="licensePlateDefault" @success="licensePlateGet"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				licensePlateDefault:"",//默认车牌号
			}
		},
		methods: {
			// 获取车牌号
			licensePlateGet(val){
				uni.showToast({
					title:val+'',
					icon:"none"
				})
			}
		}
	}
</script>

<style>

</style>
