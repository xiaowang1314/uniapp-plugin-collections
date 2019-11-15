<template>
	<view class="content">
		<view class="flex-box address-area">
			<view class="item tr">
				<image :src="icons[0]" class="icon-location"></image>
			</view>
			<view class="item">
				<view v-if="isHaveAddress">
					<view class="real-name">叶舟舟<text class="tel">135****6559</text></view>
					<view class="address-info">浙江省杭州市拱墅区北城天地9幢</view>
				</view>
				<view v-else>
					<view class="address-tip">请填写收货地址</view>
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
				<text class="num">共2件</text>，小计：<text class="money">¥268</text>
			</view>
		</view>
		<view class="flex-box pay-type-area">
			<view class="item tr">
				<image :src="icons[1]" class="icon-wechat"></image>
			</view>
			<view class="item">微信支付</view>
			<view class="item">
				<radio checked="true" color="#FF546E" />
			</view>
		</view>
		<view class="flex-box footer">
			<view class="item">
				<view class="total-area">
					<text class="num">共2件</text>，小计：<text class="money">¥268</text>
				</view>
			</view>
			<view class="item">
				<button class="send-order-btn" @tap="send">提交订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isHaveAddress:true,
				icons:[
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/icons/location.png',
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/icons/wechat.png'
				],
				imgs: [
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4067865560,4104866691&fm=15&gp=0.jpg'
				]
			};
		},
		methods:{
			send(){
				uni.navigateTo({
					url:'/pages/paySuccess/paySuccess'
				})
			}
		}
	}
</script>

<style lang="scss">
.content{
	background:rgba(247,247,247,1);
	padding: 22upx 22upx 110upx;
}
.icon-location{
	width: 40upx;
	height: 46upx;
}
.icon-wechat{
	width: 40upx;
	height: 40upx;
}
.address-area{
	background: #FFFFFF;
	min-height: 134upx;
	align-items: center;
	border-radius:14upx;
	.item:nth-of-type(1){
		flex: 0 0 76upx;
	}
	.item:nth-of-type(2){
		position: relative;
		flex: 1 0 auto;
		padding-left: 16upx;
		box-sizing: border-box;
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
	.address-tip{
		font-size:28upx;
		font-family:PingFang-SC-Medium,PingFang-SC;
		font-weight:500;
		color:rgba(255,84,110,1);
	}
	.real-name{
		font-size:28upx;
		font-family:PingFang-SC-Bold,PingFang-SC;
		font-weight:bold;
		color:rgba(51,51,51,1);
		.tel{
			margin-left: 10upx;
			font-size:26upx;
			font-family:PingFang-SC-Medium,PingFang-SC;
			font-weight:500;
			color:rgba(102,102,102,1);
		}
	}
	.address-info{
		font-size:26upx;
		font-family:PingFang-SC-Medium,PingFang-SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
}

.goods-info-area{
	background:rgba(255,255,255,1);
	border-radius:14upx;
	margin: 20upx 0;
	padding: 40upx 20upx;
	box-sizing: border-box;
	.group{
		.item:nth-of-type(2){
			padding-left: 16upx;
			padding-top: 12upx;
			box-sizing: border-box;
		}
		.goods-img{
			width:160upx;
			height:160upx;
			background-size: cover;
			border-radius:4upx;
		}
		.goods-name{
			font-size:26upx;
			font-family:PingFang-SC-Bold,PingFang-SC;
			font-weight:bold;
			color:rgba(51,51,51,1);
			width: 490upx;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
		}
		.sku-area{
			margin-top: 16upx;
			margin-bottom: 16upx;
			font-size:22upx;
			font-family:PingFang-SC-Medium,PingFang-SC;
			font-weight:500;
			color:rgba(102,102,102,1);
			.m-item:nth-of-type(1){
				flex: 1 0 auto;
			}
			.m-item:nth-of-type(2){
				flex:0 0 100upx;

			}
		}
		.goods-price{
			font-size:24upx;
			font-family:PingFang-SC-Medium,PingFang-SC;
			font-weight:500;
			color:rgba(51,51,51,1);
		}
	}
	
	.postage{
		margin-top: 50upx;
		margin-bottom: 30upx;
		font-size:26upx;
		font-family:PingFang-SC-Medium,PingFang-SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
}

.total-area{
	font-size:26upx;
	font-family:PingFang-SC-Medium,PingFang-SC;
	font-weight:500;
	color:rgba(153,153,153,1);
	color: #333333;
	
	.num{
		color: #999999;
		font-size:22upx;
	}
	.money{
		color: #FF546E;
	}
}

.pay-type-area{
	height:120upx;
	background:rgba(255,255,255,1);
	border-radius:14px;
	align-items: center;
	.item:nth-of-type(1){
		flex: 0 0 60upx;
		font-size: 0;
	}
	.item:nth-of-type(2){
		flex: 1 0 auto;
		padding-left: 16upx;
		box-sizing: border-box;
		font-size:24upx;
		font-family:PingFang-SC-Medium,PingFang-SC;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	.item:nth-of-type(3){
		flex: 0 0 40upx;
	}
}
.footer{
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	background:rgba(255,255,255,1);
	border:1upx solid rgba(247,247,247,1);
	padding: 15upx 36upx 15upx 42upx;
	align-items: center;
	box-sizing: border-box;
	.item:nth-of-type(1){
		flex: 1 0 auto;
	}
	.item:nth-of-type(2){
		flex: 0 0 196upx;
		.send-order-btn{
			line-height:70upx;
			background:rgba(255,84,110,1);
			border-radius:35upx;
			padding: 0;
			font-size:28upx;
			font-family:PingFang-SC-Bold,PingFang-SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
		}
	}
}
</style>
