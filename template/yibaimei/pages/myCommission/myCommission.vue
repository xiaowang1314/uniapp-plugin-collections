<template>
	<view class="content">
		<view class="flex-box header" :style="{backgroundImage:'url('+imgs[0]+')'}">
			<view class="item">
				<view class="total">56897</view>
				<view class="freeze">冻结中：528</view>
			</view>
			<view class="item">
				<button class="apply-btn" @tap="showOrHideApplyWindow">申请提现</button>
			</view>
		</view>
		<view class="flex-box tc tab">
			<view :class="['item-3',{'active':tabIndex === 0}]" @tap="tabIndexChange(0)">全部</view>
			<view :class="['item-3',{'active':tabIndex === 1}]" @tap="tabIndexChange(1)">收入</view>
			<view :class="['item-3',{'active':tabIndex === 2}]" @tap="tabIndexChange(2)">支出</view>
		</view>
		<view class="flex-box group">
			<view class="item">
				<view>
					<view class="name">分享商品</view>
					<view class="time">2019.02.12 23:00:02</view>
				</view>
			</view>
			<view class="item">
				<view class="num">+20</view>
				<view class="status">锁定中</view>
			</view>
		</view>
		<view class="flex-box group">
			<view class="item">
				<view>
					<view class="name">线下支付</view>
					<view class="time">2019.02.12 23:00:02</view>
				</view>
			</view>
			<view class="item">
				<view class="num">+20</view>
				<view class="status">已入账</view>
			</view>
		</view>
		<view class="flex-box group">
			<view class="item">
				<view>
					<view class="name">您推广的商品</view>
					<view class="time">2019.02.12 23:00:02</view>
				</view>
			</view>
			<view class="item">
				<view class="num minus">-20</view>
				<view class="status">处理中</view>
			</view>
		</view>
		<view class="flex-box group">
			<view class="item">
				<view>
					<view class="name">分享商品</view>
					<view class="time">2019.02.12 23:00:02</view>
				</view>
			</view>
			<view class="item">
				<view class="num minus">-20</view>
				<view class="status">已到账</view>
			</view>
		</view>
		<!-- 提现 -->
		<view class="apply-money-area" v-if="isShowApplyWindow">
			<view class="box">
				<icon type="clear" size="22" color="#CCCCCC" class="hide-btn" @tap="showOrHideApplyWindow"></icon>
				<view class="title">提现佣金</view>
				<input placeholder="最多可提取1990" class="input" placeholder-class="input-pl" />
				<view class="tips-area">
					<view>注意事项</view>
					<view>系统将在1～3批到账，如遇高峰期，可能延迟到账</view>
				</view>
				<button class="sure-btn active">确定</button>
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
				],
				isShowApplyWindow: false, //是否显示提现窗口
			};
		},
		methods: {
			tabIndexChange(index) {
				this.tabIndex = index;
			},
			showOrHideApplyWindow() {
				this.isShowApplyWindow = !this.isShowApplyWindow;
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 22upx;
	}

	.header {
		position: relative;
		background-size: cover;
		height: 266upx;
		border-radius: 14upx;

		.item:nth-of-type(1) {
			flex: 1 0 auto;
			padding: 78upx 0 0 116upx;
			box-sizing: border-box;

			.total {
				font-size: 60upx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);
				line-height: 44upx;
				text-shadow: 0px 1upx 1upx rgba(255, 49, 84, 1);
			}

			.freeze {
				margin-top: 22upx;
				font-size: 26upx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);
				line-height: 30upx;
			}
		}

		.item:nth-of-type(2) {
			flex: 0 0 272upx;
			padding-top: 104upx;
			box-sizing: border-box;

			.apply-btn {
				width: 190upx;
				background: rgba(255, 255, 255, 1);
				border-radius: 29upx;
				padding: 0;
				font-size: 28upx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: rgba(255, 84, 110, 1);
				line-height: 58upx;
			}
		}
	}

	.tab {
		background: #FFFFFF;

		.item-3 {
			position: relative;
			line-height: 144upx;
			font-size: 28upx;
			font-family: PingFang-SC-Medium, PingFang-SC;
			font-weight: 500;
			color: rgba(102, 102, 102, 1);

			&:after {
				content: '';
				position: absolute;
				left: 50%;
				bottom: 36upx;
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

	.group {
		border-bottom: 1upx solid rgba(247, 247, 247, 1);
		margin: 0 -22upx;
		padding: 0 22upx;
		box-sizing: border-box;

		.item:nth-of-type(1) {
			flex: 1 0 auto;
			display: flex;
			align-items: center;

			.name {
				font-size: 29upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 41upx;
			}

			.time {
				font-size: 22upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
				line-height: 30upx;
			}
		}

		.item:nth-of-type(2) {
			flex: 0 0 175upx;
			padding: 21upx 0;

			.num {
				font-size: 32upx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: rgba(255, 84, 110, 1);
				line-height: 45upx;

				&.minus {
					color: #05B097;
				}
			}

			.status {
				margin-top: 10upx;
				font-size: 24upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
				line-height: 33upx;
			}
		}
	}

	.apply-money-area {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		top: 0;
		z-index: 9;
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

			.title {
				font-size: 30upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 42upx;
				margin-bottom: 40upx;
			}

			.input {
				background: rgba(247, 247, 247, 1);
				border-radius: 14upx;
				padding-left: 32upx;
				box-sizing: border-box;
				height: 91upx;
				font-size: 28upx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}

			.input-pl {
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}

			.tips-area {
				margin-top: 36upx;
				margin-bottom: 140upx;
				font-size: 24upx;
				font-family: PingFang-SC-Medium, PingFang-SC;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}

			.sure-btn {
				height: 86upx;
				background: rgba(255, 84, 110, 1);
				border-radius: 49upx;
				opacity: 0.18;
				font-size: 32upx;
				font-family: PingFang-SC-Bold, PingFang-SC;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);

				&.active {
					opacity: 1;
				}
			}
		}
	}
</style>
