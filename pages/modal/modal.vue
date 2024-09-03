<template>
	<view>
		<button type="primary" @tap="isShowAdTip = true">显示</button>
		<modal v-if="isShowAdTip" :cancelVisble="false" @cancel="cancel" @ok="ok">这是提示内容</modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowAdTip:true
			}
		},
		methods: {
			cancel(){
				console.log("cancel回调")
				this.isShowAdTip = false
			},
			ok(){
				console.log("ok回调")
				this.isShowAdTip = false
			}
		}
	}
</script>

<style>

</style>
