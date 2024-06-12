<template>
	<view class="content">
		<view class="header">
			<view class="store-img-area">
				<view class="store-img" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
				秋水伊人望京店备份
			</view>
			<view class="group">
				浙江省杭州市萧山区市心北路1888号A座
			</view>
			<view class="group" @tap="tel">
				0571-88998888
			</view>
		</view>
		<view class="flex-box tc tab">
			<view :class="['item-3',{'active':tabIndex === 0}]" @tap="tabIndexChange(0)">企业介绍</view>
			<view :class="['item-3',{'active':tabIndex === 1}]" @tap="tabIndexChange(1)">企业环境</view>
			<view :class="['item-3',{'active':tabIndex === 2}]" @tap="tabIndexChange(2)">员工风采</view>
		</view>
		<view class="flex-box list">
			<view class="item-2">
				<view class="img-show" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
			</view>
			<view class="item-2">
				<view class="img-show" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
			</view>
			<view class="item-2">
				<view class="img-show" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
			</view>
			<view class="item-2">
				<view class="img-show" :style="{backgroundImage:'url('+imgs[0]+')'}"></view>
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
			};
		},
		methods: {
			tabIndexChange(index) {
				this.tabIndex = index;
			},
			tel(){
				uni.makePhoneCall({
				    phoneNumber: '114' 
				});
			}
		}
	}
</script>

<style lang="scss">
	.content {
		background: #F7F7F7;
	}

	.header {
		padding: 40upx 22upx 20upx;
		box-sizing: border-box;
		margin-bottom: 20upx;
		background: #FFFFFF;

		.store-img-area {
			margin-bottom: 38upx;
			border-radius:6upx;

			.store-img {
				display: inline-block;
				width: 120upx;
				height: 120upx;
				background-size: cover;
				vertical-align: middle;
				margin-right: 20upx;
				font-size: 38upx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
		}

		.group {
			font-size: 24upx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			margin-bottom: 20upx;
		}
	}

	.tab {
		background: #FFFFFF;

		.item-3 {
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

	.list {
		padding: 0 22upx 22upx;

		.item-2 {
			margin-top: 22upx;

			box-sizing: border-box;
			height: 230upx;

			&:nth-of-type(odd) {
				padding-right: 11upx;
			}

			&:nth-of-type(even) {
				padding-left: 11upx;
			}

			.img-show {
				background:rgba(255,255,255,1);
				border-radius:10px;
				height: 100%;
				background-size: cover;
			}
		}
	}
</style>
