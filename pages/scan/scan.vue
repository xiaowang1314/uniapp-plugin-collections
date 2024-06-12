<template>
	<view>
		<scan @getCode="getScanCode"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//获取扫码控件
			getScanCode(val){
				console.log(val)
			},
		}
	}
</script>

<style>

</style>
