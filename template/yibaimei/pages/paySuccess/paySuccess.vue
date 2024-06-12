<template>
	<view class="content">
		<view class="header tc">
			<image :src="imgs[0]" mode="widthFix" class="success-img"></image>
			<view class="tip">提交成功</view>
			<view class="action-area">
				<navigator url="/pages/main/main" class="link">返回首页</navigator>
				<navigator url="/pages/orderDetail/orderDetail" class="link detail-link">查看详情</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgs: [
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/paySuccess/success.png'
				]
			};
		}
	}
</script>

<style lang="scss">
	.header {
		.success-img {
			width: 150upx;
			height: 189upx;
			margin: 114upx 0 53upx;
		}

		.tip {
			font-size: 34upx;
			font-family: PingFang-SC-Bold, PingFang-SC;
			font-weight: bold;
			color: rgba(102, 102, 102, 1);
		}
	}
	
	.action-area{
		margin-top: 82upx;
		.link{
			display: inline-block;
			width:236upx;
			background:rgba(255,255,255,1);
			border-radius:35upx;
			border:1upx solid rgba(102,102,102,1);
			font-size:26upx;
			font-family:PingFang-SC-Medium,PingFang-SC;
			font-weight:500;
			color:rgba(102,102,102,1);
			line-height:70upx;
		}
		.detail-link{
			margin-left: 60upx;
			border:1upx solid rgba(255,84,110,1);
			color:rgba(255,84,110,1);
		}
	}
</style>
