<template>
	<view class="content">
		<view class="status-area tc">
			<view class="status">待领取</view>
			<view class="remain-time">剩余2小时自动关闭订单</view>
		</view>
		<view class="flex-box address-area">
			<view class="item tr">
				<image :src="icons[0]" class="icon-location"></image>
			</view>
			<view class="item">
				<view>
					<view class="real-name">叶舟舟<text class="tel">135****6559</text></view>
					<view class="address-info">浙江省杭州市拱墅区北城天地9幢</view>
				</view>
			</view>
		</view>
		<view class="goods-info-area">
			<view class="flex-box group">
				<view class="item">
					<view class="goods-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
				</view>
				<view class="item">
					<view class="goods-name">质乳酸素洗发露 头皮精华洗发水 男女孕…质乳酸素洗发露 头皮精华洗发水 男女孕…</view>
					<view class="flex-box sku-area">
						<view class="m-item">1瓶装/清新茉莉花香</view>
						<view class="m-item tr">x2</view>
					</view>
					<view class="goods-price">¥134</view>
				</view>
			</view>
			<view class="postage">邮费：0.00元</view>
			<view class="total-area">
				<text class="num">共2件</text>，小计：¥268
			</view>
		</view>
		<view class="ul">
			<view class="li">订单编号：125648997859</view>
			<view class="li">订单创建时间：2019-8-12 12:00:32</view>
		</view>
		
		<view class="flex-box bottom">
			<view class="item">
				<button class="btn gray">关闭订单</button>
			</view>
			<view class="item">
				<button class="btn">去付款</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icons: [
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/icons/location.png',
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/icons/wechat.png'
				],
				imgs: [
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4067865560,4104866691&fm=15&gp=0.jpg'
				]
			};
		}
	}
</script>

<style lang="scss">
	.content {
		background: rgba(247, 247, 247, 1);
		padding-bottom: 110upx;
	}

	.icon-location {
		width: 40upx;
		height: 46upx;
	}

	.status-area {
		background: rgba(153, 153, 153, 1);
		padding: 20upx;

		.status {
			font-size: 36upx;
			font-family: PingFang-SC-Bold, PingFang-SC;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
		}

		.remain-time {
			font-size: 24upx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}

	.address-area {
		background: #FFFFFF;
		min-height: 134upx;
		align-items: center;
		border-radius: 14upx;

		.item:nth-of-type(1) {
			flex: 0 0 76upx;
		}

		.item:nth-of-type(2) {
			position: relative;
			flex: 1 0 auto;
			padding-left: 16upx;
			box-sizing: border-box;
		}

		.address-tip {
			font-size: 28upx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: rgba(255, 84, 110, 1);
		}

		.real-name {
			font-size: 28upx;
			font-family: PingFang-SC-Bold, PingFang-SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);

			.tel {
				margin-left: 10upx;
				font-size: 26upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}
		}

		.address-info {
			font-size: 26upx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}

	.goods-info-area {
		background: rgba(255, 255, 255, 1);
		border-radius: 14upx;
		margin: 20upx 0;
		padding: 40upx 20upx;
		box-sizing: border-box;

		.group {
			.item:nth-of-type(2) {
				padding-left: 16upx;
				padding-top: 12upx;
				box-sizing: border-box;
			}

			.goods-img {
				width: 160upx;
				height: 160upx;
				background-size: cover;
				border-radius: 4upx;
			}

			.goods-name {
				font-size: 26upx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				width: 490upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.sku-area {
				margin-top: 16upx;
				margin-bottom: 16upx;
				font-size: 22upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);

				.m-item:nth-of-type(1) {
					flex: 1 0 auto;
				}

				.m-item:nth-of-type(2) {
					flex: 0 0 100upx;

				}
			}

			.goods-price {
				font-size: 24upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}

		.postage {
			margin-top: 50upx;
			margin-bottom: 30upx;
			font-size: 26upx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}

	.total-area {
		font-size: 26upx;
		font-family: PingFang-SC-Medium, PingFang-SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
		color: #333333;

		.num {
			color: #999999;
			font-size: 22upx;
		}
	}

	.ul {
		background: rgba(255, 255, 255, 1);
		padding:30upx 0  54upx 22upx;
		font-size:24upx;
		font-family:PingFang-SC-Medium,PingFang-SC;
		font-weight:500;
		color:rgba(102,102,102,1);
		.li{
			margin-bottom: 20upx;
		}
	}
	
	.bottom {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 9;
		width: 100%;
		justify-content: flex-end;
		padding: 20upx 22upx 24upx;
		background: #FFFFFF;
		box-sizing: border-box;
	
		.btn {
			margin-left: 20upx;
			width: 144upx;
			line-height: 56upx;
			background: rgba(255, 255, 255, 1);
			border-radius: 28upx;
			border: 1upx solid rgba(255, 84, 110, 1);
			padding: 0;
			font-size: 24upx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: rgba(255, 84, 110, 1);
			text-align: center;
	
			&.gray {
				border: 1px solid rgba(204, 204, 204, 1);
				color: rgba(102, 102, 102, 1);
			}
		}
	}
</style>
