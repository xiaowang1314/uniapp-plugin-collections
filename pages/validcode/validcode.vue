<template>
	<view class="content">
		<view>验证码：</view>
		<validcode ref="code" :maxlength="4" :isPwd="false" @finish="getCode" ></validcode>
		<view>密码:</view>
		<validcode ref="pwd" :maxlength="6" :isPwd="true" @finish="getPwd"></validcode>
		<button type="primary" @tap="clearCode">清空验证码</button>
		<button type="primary" @tap="clearPwd">清空密码</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		onLoad() {},
		methods: {
			//获取code码
			getCode(val) {
				console.log(val);
			},
			//获取密码
			getPwd(val) {
				console.log(val);
			},
			// 清空验证码
			clearCode(){
				 this.$refs.code.clear();
			},
			// 清空密码
			clearPwd(){
				 this.$refs.pwd.clear();
			}
		}
	};
</script>

<style>
	.content {
		height: 400upx;
	}
	button{
		margin-top: 30upx;
	}
</style>
