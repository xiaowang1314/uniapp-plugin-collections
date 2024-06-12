<template>
	<view class="content">
		<view class="header">
			<view class="swiper-area">
				<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
				 circular="true" indicator-color="#ffffff" indicator-active-color="#FF546E" @change="swiperChange">
					<swiper-item>
						<view class="swiper-item" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
					</swiper-item>
				</swiper>
				<view class="dot-area tc">{{current}}/3</view>
			</view>
			<view class="title">质乳酸素洗发露 头皮精华洗发水 男女孕妇适用 套装质乳酸素洗发露 头皮精华洗发水 男女孕妇适用 套装</view>
			<view class="flex-box price-area">
				<view class="item-2">
					￥134<text class="small">¥288</text>
				</view>
				<view class="item-2 tr">销量:10098</view>
			</view>
		</view>
		<view class="sku-select-area">选择规格</view>
		<view class="flex-box tc tab">
			<view :class="['item-2',{'active':tabIndex === 0}]" @tap="tabIndexChange(0)">商品详情</view>
			<view :class="['item-2',{'active':tabIndex === 1}]" @tap="tabIndexChange(1)">购买记录</view>
		</view>
		<!-- 详情内容 -->
		<view class="detail" v-if="tabIndex === 0">
			<image :src="imgs[0]" mode="widthFix"></image>
		</view>
		<!-- 购买记录 -->
		<view class="record-area" v-if="tabIndex === 1">
			<view class="flex-box">
				<view class="item">
					<view class="head-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
				</view>
				<view class="item">
					<text class="nickname">郑嘉嘉</text>
					<text class="time">2019-07-04 12:24:23</text>
				</view>
			</view>
			<view class="flex-box">
				<view class="item">
					<view class="head-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
				</view>
				<view class="item">
					<text class="nickname">郑嘉嘉</text>
					<text class="time">2019-07-04 12:24:23</text>
				</view>
			</view>
			<view class="flex-box">
				<view class="item">
					<view class="head-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
				</view>
				<view class="item">
					<text class="nickname">郑嘉嘉</text>
					<text class="time">2019-07-04 12:24:23</text>
				</view>
			</view>
			<view class="flex-box">
				<view class="item">
					<view class="head-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
				</view>
				<view class="item">
					<text class="nickname">郑嘉嘉</text>
					<text class="time">2019-07-04 12:24:23</text>
				</view>
			</view>
			<view class="flex-box">
				<view class="item">
					<view class="head-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
				</view>
				<view class="item">
					<text class="nickname">郑嘉嘉</text>
					<text class="time">2019-07-04 12:24:23</text>
				</view>
			</view>
		</view>
		<view class="flex-box footer">
			<view class="item">
				￥134<text class="sm-price">¥288</text>
			</view>
			<view class="item">
				<button class="buy-btn" @tap="toBuy">立刻购买</button>
			</view>
		</view>

		<!-- 店铺列表 -->
		<view class="store-area" v-if="isShowStoreWindow">
			<view class="box">
				<icon type="clear" size="22" color="#CCCCCC" class="hide-btn" @tap="showOrHideApplyWindow"></icon>
				<view class="store-list">
					<view class="flex-box">
						<view class="item">
							<view class="store-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
						</view>
						<view class="item">
							<view class="store-name">韩国军美医疗美容</view>
							<view class="store-address">浙江省杭州市西湖区北城天地店</view>
							<view class="store-distance">54km</view>
						</view>
						<view class="item">
							<radio :checked="false" color="#FE7C90" />
						</view>
					</view>
					<view class="flex-box">
						<view class="item">
							<view class="store-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
						</view>
						<view class="item">
							<view class="store-name">韩国军美医疗美容</view>
							<view class="store-address">浙江省杭州市西湖区北城天地店</view>
							<view class="store-distance">54km</view>
						</view>
						<view class="item">
							<radio :checked="false" color="#FE7C90" />
						</view>
					</view>
					<view class="flex-box">
						<view class="item">
							<view class="store-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
						</view>
						<view class="item">
							<view class="store-name">韩国军美医疗美容</view>
							<view class="store-address">浙江省杭州市西湖区北城天地店</view>
							<view class="store-distance">54km</view>
						</view>
						<view class="item">
							<radio checked="true" color="#FE7C90" />
						</view>
					</view>
					<view class="flex-box">
						<view class="item">
							<view class="store-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
						</view>
						<view class="item">
							<view class="store-name">韩国军美医疗美容</view>
							<view class="store-address">浙江省杭州市西湖区北城天地店</view>
							<view class="store-distance">54km</view>
						</view>
						<view class="item">
							<radio checked="true" color="#FE7C90" />
						</view>
					</view>
					<view class="flex-box">
						<view class="item">
							<view class="store-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
						</view>
						<view class="item">
							<view class="store-name">韩国军美医疗美容</view>
							<view class="store-address">浙江省杭州市西湖区北城天地店</view>
							<view class="store-distance">54km</view>
						</view>
						<view class="item">
							<radio checked="true" color="#FE7C90" />
						</view>
					</view>
				</view>
				<button class="select-btn">选择该店</button>
			</view>
		</view>
		<!-- 规格选择 -->
		<view class="sku-area" v-if="isSkuWindow">
			<view class="box">
				<icon type="clear" size="22" color="#CCCCCC" class="hide-btn" @tap="showOrHideSkuWindow"></icon>
				<view class="flex-box goods-img-area">
					<view class="item">
						<view class="goods-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
					</view>
					<view class="item">
						<view class="price">¥134</view>
						<view class="sku-name">2瓶装</view>
					</view>
				</view>
				<view class="goods-title">选择规格</view>
				<view class="flex-box sku-ul">
					<view class="item active">1瓶装</view>
					<view class="item">2瓶装</view>
					<view class="item">2瓶装</view>
					<view class="item">2瓶装</view>

				</view>
				<view class="goods-title">选择味道</view>
				<view class="flex-box sku-ul">
					<view class="item active">清新茉莉花香</view>
					<view class="item">2瓶装</view>
					<view class="item">2瓶装</view>
					<view class="item">2瓶装</view>
				</view>
				<view class="flex-box num-area">
					<view class="item-2">购买数量</view>
					<view class="item-2 tr">
						<uni-number-box :min="1" :max="100" :value="1" />
					</view>
				</view>
				<button class="sure-btn" @tap="toConfirm">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 1,
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				imgs: [
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4067865560,4104866691&fm=15&gp=0.jpg'
				],
				current: 1, //当前下标
				isShowStoreWindow: false, //是否显示店铺列表
				isSkuWindow: false, //是否显示sku
			};
		},
		methods: {
			tabIndexChange(index) {
				this.tabIndex = index;
			},
			swiperChange(e) {
				this.current = e.detail.current + 1;
			},
			//显示或隐藏sku
			showOrHideSkuWindow(){
				this.isSkuWindow=!this.isSkuWindow;
			},
			toBuy(){
				this.showOrHideSkuWindow()
			},
			toConfirm(){
				uni.navigateTo({
					url:'/pages/orderConfirm/orderConfirm'
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding-bottom: 110upx;
	}

	.header {
		padding: 0 22upx 30upx;
		border-bottom: 16upx solid rgba(247, 247, 247, 1);

		.swiper-area {
			position: relative;

			.swiper {
				height: 430upx;

				.swiper-item {
					height: 100%;
					border-radius: 20upx;
					background-size: cover;
				}
			}

			.dot-area {
				width: 79upx;
				height: 40upx;
				line-height: 40upx;
				background: rgba(0, 0, 0, 1);
				border-radius: 20px;
				opacity: 0.5;
				position: absolute;
				bottom: 20upx;
				right: 20upx;
				font-size: 18upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
			}
		}

		.title {
			margin-top: 22upx;
			width: 706upx;
			font-size: 30upx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			line-height: 42upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.price-area {
			margin-top: 35upx;

			.item-2:nth-of-type(1) {
				font-size: 30upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(255, 84, 110, 1);

				.small {
					margin-left: 8upx;
					font-size: 24upx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}

			.item-2:nth-of-type(2) {
				font-size: 22upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}
	}

	.sku-select-area {
		position: relative;
		padding: 0 22upx;
		font-size: 26upx;
		font-family: PingFang-SC-Medium, PingFang-SC;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 90upx;
		border-bottom: 16upx solid rgba(247, 247, 247, 1);

		&:after {
			content: '';
			position: absolute;
			right: 50upx;
			top: 50%;
			transform: rotate(45deg) translateY(-50%);
			width: 15upx;
			height: 15upx;
			border: 4upx solid #999999;
			border-width: 4upx 4upx 0 0;
		}
	}

	.tab {
		background: #FFFFFF;
		border: 1upx solid #F7F7F7;

		.item-2 {
			position: relative;
			line-height: 120upx;
			font-size: 28upx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: rgba(102, 102, 102, 1);

			&:after {
				content: '';
				position: absolute;
				left: 50%;
				bottom: 10upx;
				transform: translateX(-50%);
				width: 59upx;
				height: 4upx;
				background: rgba(255, 84, 110, 1);
				border-radius: 2upx;
				visibility: hidden;
			}

			&.active {
				color: #FF546E;

				&:after {
					visibility: visible;
				}
			}
		}
	}

	.detail {
		padding: 0 22upx;

		image {
			width: 100%;
		}
	}

	.record-area {
		padding: 30upx 22upx;

		.head-img {
			width: 70upx;
			height: 70upx;
			border-radius: 50%;
			background-size: cover;
		}

		.flex-box {
			padding-bottom: 40upx;
		}

		.item:nth-of-type(2) {
			display: flex;
			align-items: center;

			.nickname {
				margin-left: 14upx;
				font-size: 24upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}

			.time {
				margin-left: 14upx;
				font-size: 22upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}
	}

	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		background: #FFFFFF;
		border: 1upx solid rgba(247, 247, 247, 1);
		padding: 15upx 22upx 15upx 60upx;
		box-sizing: border-box;

		.item:nth-of-type(1) {
			flex: 1 0 auto;
			font-size: 30upx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: rgba(255, 84, 110, 1);
			line-height: 34upx;
			padding-top: 16upx;

			.sm-price {
				margin-left: 4upx;
				font-size: 22upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}

		.item:nth-of-type(2) {
			flex: 0 0 196upx;
		}

		.buy-btn {
			width: 196upx;
			height: 70upx;
			line-height: 79upx;
			background: linear-gradient(180deg, rgba(255, 141, 167, 1) 0%, rgba(255, 84, 110, 1) 100%);
			border-radius: 35upx;
			font-size: 28upx;
			font-family: PingFang-SC-Bold, PingFang-SC;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
			padding: 0;
		}
	}

	.store-area {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		top: 0;
		z-index: 100;
		background: rgba($color: #000000, $alpha: 0.5);
		display: flex;
		align-items: flex-end;

		.box {
			position: relative;
			width: 100%;
			background: #FFFFFF;
			border-radius: 40upx 40upx 0px 0px;
			padding: 104upx 22upx 20upx;
			box-sizing: border-box;

			.hide-btn {
				position: absolute;
				right: 30upx;
				top: 30upx;
			}

			.store-list {
				max-height: 700upx;
				overflow-y: auto;
			}

			.store-img {
				width: 120upx;
				height: 120upx;
				background: rgba(247, 247, 247, 1);
				border-radius: 6upx;
				border: 1upx solid rgba(247, 247, 247, 1);
			}

			.flex-box {
				padding-bottom: 50upx;
			}

			.item:nth-of-type(2) {
				flex: 1 0 auto;
				padding-left: 19upx;
				box-sizing: border-box;

				.store-name {
					font-size: 32upx;
					font-family: PingFang-SC-Bold, PingFang-SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
				}

				.store-address {
					font-size: 24upx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: rgba(102, 102, 102, 1);
					margin-bottom: 12upx;
				}

				.store-distance {
					font-size: 24upx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: rgba(102, 102, 102, 1);
				}
			}

			.item:nth-of-type(3) {
				flex: 0 0 40upx;
				display: flex;
				align-items: center;

			}

			.select-btn {
				margin-top: 20upx;
				height: 86upx;
				background: linear-gradient(180deg, rgba(255, 141, 167, 1) 0%, rgba(255, 84, 110, 1) 100%);
				border-radius: 49upx;
				font-size: 32upx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);
			}
		}
	}

	.sku-area {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		top: 0;
		z-index: 100;
		background: rgba($color: #000000, $alpha: 0.5);
		display: flex;
		align-items: flex-end;

		.box {
			position: relative;
			width: 100%;
			max-height: 1200upx;
			overflow-y: auto;
			background: #FFFFFF;
			border-radius: 40upx 40upx 0px 0px;
			padding: 104upx 22upx 20upx;
			box-sizing: border-box;

			.hide-btn {
				position: absolute;
				right: 30upx;
				top: 30upx;
			}

			.goods-img-area {
				.item:nth-of-type(2) {
					padding-top: 54upx;
					padding-left: 30upx;
					box-sizing: border-box;
				}

				.goods-img {
					width: 192upx;
					height: 192upx;
					border-radius: 6upx;
				}

				.price {
					font-size: 26upx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: rgba(255, 84, 110, 1);
					margin-bottom: 24upx;
				}

				.sku-name {
					font-size: 26upx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: rgba(102, 102, 102, 1);
				}

			}

			.goods-title {
				font-size: 26upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				margin-top: 50upx;
			}

			.sku-ul {
				.item {
					margin-top: 26upx;
					border-radius: 4upx;
					border: 2upx solid rgba(255, 84, 110, 1);
					padding: 18upx 20upx;
					box-sizing: border-box;
					font-size: 24upx;
					font-family: PingFang-SC-Medium, PingFang-SC;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					margin-right: 20upx;
					background: rgba(245, 245, 245, 1);
					border-color: transparent;

					&.active {
						color: rgba(255, 84, 110, 1);
						background:rgba(255,84,110,0.1);
						border-color:rgba(255, 84, 110, 1);
					}
				}
			}
		
			.num-area{
				margin-top: 63upx;
				font-size:26upx;
				font-family:PingFang-SC-Medium,PingFang-SC;
				font-weight:500;
				color:rgba(51,51,51,1);
				.item-2:nth-of-type(1){
					line-height: 70upx;
				}
			}
			
			.sure-btn{
				width:706upx;
				height:86upx;
				background:linear-gradient(180deg,rgba(255,141,167,1) 0%,rgba(255,84,110,1) 100%);
				border-radius:49upx;
				font-size:32upx;
				font-family:PingFang-SC-Bold,PingFang-SC;
				font-weight:bold;
				color:rgba(255,255,255,1);
				margin-top: 99upx;
			}
		}
	}
</style>
