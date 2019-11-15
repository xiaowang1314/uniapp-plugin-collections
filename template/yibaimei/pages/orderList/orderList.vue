<template>
	<view class="content">
		<view class="flex-box tc tab">
			<view :class="['item-4',{'active':tabIndex === 0}]" @tap="tabIndexChange(0)">全部</view>
			<view :class="['item-4',{'active':tabIndex === 1}]" @tap="tabIndexChange(1)">待付款</view>
			<view :class="['item-4',{'active':tabIndex === 2}]" @tap="tabIndexChange(2)">待领取</view>
			<view :class="['item-4',{'active':tabIndex === 3}]" @tap="tabIndexChange(3)">已领取</view>
		</view>
		<view class="list">
			<view class="group">
				<navigator url="/pages/orderDetail/orderDetail" hover-class="none">
					<view class="flex-box top">
						<view class="item">订单编号 15071139038326</view>
						<view class="item">待付款</view>
					</view>
					<view class="flex-box center">
						<view class="item">
							<view class="goods-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
						</view>
						<view class="item">
							<view class="goods-name">质乳酸素洗发露 头皮精质乳酸素洗发露 头皮精华…</view>
							<view class="sku">1瓶装/清新茉莉花香</view>
							<view class="price">￥134</view>
						</view>
						<view class="item tr">x1</view>
					</view>
				</navigator>
				<view class="flex-box bottom">
					<view class="item">
						<button class="btn gray">关闭订单</button>
					</view>
					<view class="item">
						<button class="btn">去付款</button>
					</view>
				</view>
			</view>
			<view class="group">
				<view class="flex-box top">
					<view class="item">订单编号 15071139038326</view>
					<view class="item">待付款</view>
				</view>
				<view class="flex-box center">
					<view class="item">
						<view class="goods-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
					</view>
					<view class="item">
						<view class="goods-name">质乳酸素洗发露 头皮精质乳酸素洗发露 头皮精华…</view>
						<view class="sku">1瓶装/清新茉莉花香</view>
						<view class="price">￥134</view>
					</view>
					<view class="item tr">x1</view>
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

			<view class="group">
				<view class="flex-box top">
					<view class="item">订单编号 15071139038326</view>
					<view class="item">待付款</view>
				</view>
				<view class="flex-box center">
					<view class="item">
						<view class="goods-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
					</view>
					<view class="item">
						<view class="goods-name">质乳酸素洗发露 头皮精质乳酸素洗发露 头皮精华…</view>
						<view class="sku">1瓶装/清新茉莉花香</view>
						<view class="price">￥134</view>
					</view>
					<view class="item tr">x1</view>
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

			<view class="group">
				<view class="flex-box top">
					<view class="item">订单编号 15071139038326</view>
					<view class="item">待付款</view>
				</view>
				<view class="flex-box center">
					<view class="item">
						<view class="goods-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
					</view>
					<view class="item">
						<view class="goods-name">质乳酸素洗发露 头皮精质乳酸素洗发露 头皮精华…</view>
						<view class="sku">1瓶装/清新茉莉花香</view>
						<view class="price">￥134</view>
					</view>
					<view class="item tr">x1</view>
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

			<view class="group">
				<view class="flex-box top">
					<view class="item">订单编号 15071139038326</view>
					<view class="item">待付款</view>
				</view>
				<view class="flex-box center">
					<view class="item">
						<view class="goods-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
					</view>
					<view class="item">
						<view class="goods-name">质乳酸素洗发露 头皮精质乳酸素洗发露 头皮精华…</view>
						<view class="sku">1瓶装/清新茉莉花香</view>
						<view class="price">￥134</view>
					</view>
					<view class="item tr">x1</view>
				</view>
				<view class="flex-box bottom">
					<view class="item">
						<navigator url="/pages/goodsDetail/goodsDetail" hover-class="none" class="btn">再次购买</navigator>
					</view>
				</view>
			</view>

			<view class="group">
				<view class="flex-box top">
					<view class="item">订单编号 15071139038326</view>
					<view class="item">待付款</view>
				</view>
				<view class="flex-box center">
					<view class="item">
						<view class="goods-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
					</view>
					<view class="item">
						<view class="goods-name">质乳酸素洗发露 头皮精质乳酸素洗发露 头皮精华…</view>
						<view class="sku">1瓶装/清新茉莉花香</view>
						<view class="price">￥134</view>
					</view>
					<view class="item tr">x1</view>
				</view>
				<view class="flex-box bottom">
					<view class="item">
						<button class="btn gray">删除订单</button>
					</view>
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				imgs: [
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4067865560,4104866691&fm=15&gp=0.jpg'
				]
			}
		},
		methods: {
			tabIndexChange(index) {
				this.tabIndex = index;
			},
		}
	}
</script>

<style lang="scss">
	.content {
		background: rgba(247, 247, 247, 1);
	}

	.tab {
		position: sticky;
		left: 0;
		top: 0;
		width: 100%;
		background: #FFFFFF;


		.item-4 {
			position: relative;
			line-height: 68upx;
			font-size: 26upx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: #999999;

			&:after {
				content: '';
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translateX(-50%);
				width: 59upx;
				height: 4upx;
				background: #FF546E;
				border-radius: 2upx;
				visibility: hidden;
			}

			&.active {
				color: #FF546E;
				font-size: 30upx;

				&:after {
					visibility: visible;
				}
			}
		}
	}

	.list {
		padding: 22upx;
	}

	.group {
		border-radius: 20px;
		background: #FFFFFF;
		margin-bottom: 22upx;

		.top {
			border-bottom: 1upx solid rgba(247, 247, 247, 1);
			padding: 0 20upx;
			line-height: 80upx;
			box-sizing: border-box;

			.item:nth-of-type(1) {
				font-size: 24upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}

			.item:nth-of-type(2) {
				font-size: 26upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}
		}

		.center {
			padding: 22upx 20upx;
			box-sizing: border-box;

			.item:nth-of-type(2) {
				flex: 1 0 auto;
				padding-left: 16upx;
				box-sizing: border-box;
			}

			.item:nth-of-type(3) {
				flex: 0 0 100upx;
				font-size: 24upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}

			.goods-name {
				margin: 7upx 0 16upx;
				width: 320upx;
				font-size: 26upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.sku {
				font-size: 22upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
				margin-bottom: 20upx;
			}

			.goods-img {
				width: 140upx;
				height: 140upx;
				background-size: cover;
			}

			.price {
				font-size: 20upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}

		}

		.bottom {
			justify-content: flex-end;
			padding: 20upx 22upx 24upx;

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
	}
</style>
