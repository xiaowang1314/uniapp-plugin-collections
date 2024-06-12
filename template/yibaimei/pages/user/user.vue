<template>
	<view class="content">
		<view class="header" :style="{backgroundImage:'url('+imgs[0]+')'}">
			<view class="head-img-area">
				<view class="head-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
				这只大象怕蚂蚁
			</view>
		</view>
		<view class="order-status-area">
			<view class="flex-box title">
				<view class="item">我的订单</view>
				<view  class="item tr">
					<navigator url="/pages/orderList/orderList"  hover-class="none">全部订单</navigator>
				</view>
			</view>
			<view class="flex-box tc status-area">
				<navigator url="/pages/orderList/orderList" hover-class="none" class="item-3">
					<image :src="icons[0]" class="order-img"></image>
					<view class="status">待付款</view>
				</navigator>
				<navigator url="/pages/orderList/orderList" hover-class="none" class="item-3">
					<image :src="icons[1]" class="order-img"></image>
					<view class="status">待领取</view>
				</navigator>
				<navigator url="/pages/orderList/orderList" hover-class="none" class="item-3">
					<image :src="icons[2]" class="order-img"></image>
					<view class="status">已领取</view>
				</navigator>
			</view>
		</view>
		<view class="link-area">
			<navigator  hover-class="none" url="/pages/storeInfo/storeInfo" class="flex-box" >
				<view class="item">我的店</view>
				<view class="item tr">秋水伊人(望京店）</view>
			</navigator>
			<navigator url="/pages/myCommission/myCommission" class="flex-box" hover-class="none">
				<view class="item">我的佣金</view>
				<view class="item tr red">2980</view>
			</navigator>
			<navigator url="/pages/invite/invite" class="flex-box" hover-class="none">
				<view class="item">我的推广码</view>
				<view class="item tr"></view>
			</navigator>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		data() {
			return {
				icons: [
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/order/order1.png',
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/order/order2.png',
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/order/order3.png'
				],
				imgs: [
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4067865560,4104866691&fm=15&gp=0.jpg'
				]
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin'])
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.header {
		position: relative;
		background-size: cover;
		height: 320upx;

		.head-img-area {
			position: absolute;
			bottom: 82upx;
			left: 0;
			width: 100%;
			padding-left: 50upx;
			box-sizing: border-box;
			font-size: 36upx;
			font-family: PingFang-SC-Bold, PingFang-SC;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);

			.head-img {
				display: inline-block;
				width: 110upx;
				height: 110upx;
				background-size: cover;
				border-radius: 50%;
				border: 6upx solid rgba(255, 255, 255, 0.5);
				vertical-align: middle;
				margin-right: 20upx;
			}
		}

	}

	.order-img {
		width: 48upx;
		height: 48upx;
	}

	.order-status-area {
		position: relative;
		top: -40upx;
		background: #FFFFFF;
		border-radius: 30upx 30upx 0px 0px;
		z-index: 2;
		padding: 40upx 0 46upx;
		border-bottom: 20upx solid rgba(247, 247, 247, 1);

		.title {
			padding: 0 50upx;

			.item:nth-of-type(1) {
				flex: 1 0 auto;
				font-size: 28upx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}

			.item:nth-of-type(2) {
				position: relative;
				flex: 0 0 200upx;
				font-size: 24upx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(153, 153, 153, 1);
				display: flex;
				align-items: center;
				justify-content: flex-end;

				&:after {
					content: '';
					position: absolute;
					right: -10upx;
					top: 50%;
					transform: rotate(45deg) translateY(-50%);
					width: 15upx;
					height: 15upx;
					border: 4upx solid #999999;
					border-width: 4upx 4upx 0 0;
				}
			}
		}
	}

	.status-area {
		padding-top: 50upx;
		.status {
			font-size: 24upx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
		}
	}

	.link-area {
		margin-top: -40upx;
		line-height: 120upx;
		padding-left: 50upx;

		.flex-box {
			border-bottom: 1upx solid #F8F8F8;

			.item:nth-of-type(1) {
				flex: 0 0 200upx;
				font-size: 28upx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}

			.item:nth-of-type(2) {
				position: relative;
				flex: 1 0 auto;
				padding-right: 76upx;
				font-size: 24upx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);

				&.red {
					color: #FF546E;
				}

				&:after {
					content: '';
					position: absolute;
					right: 50upx;
					top: 50%;
					transform: rotate(45deg) translateY(-50%);
					width: 15upx;
					height: 15upx;
					border: 4upx solid #666666;
					border-width: 4upx 4upx 0 0;
				}
			}
		}
	}
</style>
