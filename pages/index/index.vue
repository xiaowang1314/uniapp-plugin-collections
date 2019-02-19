<template>
	<view class="content">
		<view>验证码：</view>
		<validcode :maxlength="4" :isPwd="false" @finish="getCode"></validcode>
		<view>密码:</view>
		<validcode :maxlength="6" :isPwd="true" @finish="getPwd"></validcode>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		getCode(val) {
			console.log(val);
		},
		getPwd(val){
			console.log(val);
		}
	}
};
</script>

<style>
.content {
	height: 400upx;
}
</style>
