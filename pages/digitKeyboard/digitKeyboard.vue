<template>
	<view>
		<!-- 数字键盘 -->
		<digitKeyboard v-if="isShowKeyboardWindow" :inputVal="inputVal" :label="label" @cancel="isShowKeyboardWindow = false" @confirm="keyboardConfirm"/>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				inputVal:'1',
				label:'现金支付',
				isShowKeyboardWindow:true,//是否显示键盘窗口
			};
		},
		methods:{
			keyboardConfirm(val){
				console.log(val)
				uni.showToast({
					title:'当前输入的值:'+val,
					icon:'none',
					duration:4000
				})
			}
		}
	}
</script>

<style lang="less">

</style>
