<template>
	<!--
	 模拟电池充电
	 usage:
	 <battery/>
	 -->
	<view class="battery-area">
		<view class="line" v-for="i in plannum" :key="i"></view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				plannum: 5,
			}
		},
		created() {
			this.refreshTime = setInterval(() => {
				let numNew = this.plannum + 1
				this.plannum = numNew % 6;
				if (!this.plannum) {
					this.plannum = 1;
				}
			}, 1000);
		},
		destroyed() {
			clearInterval(this.refreshTime);
		}
	}
</script>

<style lang="scss" scoped>
	.battery-area {
		width: 14upx;
		height: 72upx;
		background: #FFFFFF;
		border-radius: 6upx;
		border: 2upx solid #ff4300;
		padding: 8upx 2upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	
		.line {
			width: 100%;
			height: 8upx;
			background: #ff4300;
			margin-top: 3upx;
	
			&:first-child {
				margin-top: 0;
			}
		}
	}
</style>
