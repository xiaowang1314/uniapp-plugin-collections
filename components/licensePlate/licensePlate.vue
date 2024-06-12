<template>
	<!-- 选择车牌 -->
	<view class="license-plate-container">
		<view class="item"></view>
		<view class="item">
			<view class="close-box">
				<image :src="imgs[0]" class="close-img"></image>
			</view>
			<view class="title-box">
				输入车牌号，离场时可享受<text class="hour">免费停车2小时</text>
			</view>
			<view class="input-box">
				<view :class="['item',{'active':index == 0}]" @tap="showKeyboard(0)">{{licensePlateId[0]}}</view>
				<view :class="['item',{'active':index == 1}]" @tap="showKeyboard(1)">{{licensePlateId[1]}}</view>
				<view :class="['item',{'active':index == 2}]" @tap="showKeyboard(2)">{{licensePlateId[2]}}</view>
				<view :class="['item',{'active':index == 3}]" @tap="showKeyboard(3)">{{licensePlateId[3]}}</view>
				<view :class="['item',{'active':index == 4}]" @tap="showKeyboard(4)">{{licensePlateId[4]}}</view>
				<view :class="['item',{'active':index == 5}]" @tap="showKeyboard(5)">{{licensePlateId[5]}}</view>
				<view :class="['item',{'active':index == 6}]" @tap="showKeyboard(6)">{{licensePlateId[6]}}</view>
				<view :class="['item',{'active':index == 7}]" @tap="showKeyboard(7)">{{licensePlateId[7]}}</view>
			</view>
			<view class="tip">请如实填写，以免影响停车费用结算</view>
			<view :class="['send-btn',{'active':licensePlateId.join('').length == 8}]" @tap="send">确认提交</view>
			<view v-if="isShowKeyboad1 || isShowKeyboad2 || isShowKeyboad3" class="keyboard-box">
				<view class="keyboard-close-box" @tap="hideKeyboard">
					<image :src="imgs[1]" class="hide-img"></image>
				</view>
				<view v-if="isShowKeyboad1" class="keyboard-content">
					<view v-for="(item,i) in licensePlateFirst" :key="i" class="item" @tap="keyboardSelect(item)">
						{{item}}</view>
					<view class="del-btn" @tap="delLicensePlate">
						<image :src="imgs[2]" class="del-img"></image>
					</view>
				</view>
				<view v-if="isShowKeyboad2" class="keyboard-content">
					<view v-for="(item,i) in licensePlateteTwo" :key="i" :class="['item',{'disable':disableGet(item)}]"
						@tap="keyboardSelect(item)">{{item}}</view>
					<view class="item" @tap="delLicensePlate">
						<image :src="imgs[2]" class="del-img"></image>
					</view>
				</view>
				<view v-if="isShowKeyboad3" class="keyboard-content">
					<view v-for="(item,i) in licensePlateteThree" :key="i" class="item" @tap="keyboardSelect(item)">
						{{item}}</view>
					<view class="item" @tap="delLicensePlate">
						<image :src="imgs[2]" class="del-img"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				imgs: [
					'https://frontend-c.oss-cn-hangzhou.aliyuncs.com/wz-mini-program/chargeDetail/licensePlate/close.png',
					'https://frontend-c.oss-cn-hangzhou.aliyuncs.com/wz-mini-program/chargeDetail/licensePlate/arrow-bottom.png',
					'https://frontend-c.oss-cn-hangzhou.aliyuncs.com/wz-mini-program/chargeDetail/licensePlate/del.png'
				],
				isShowKeyboad1: false,
				isShowKeyboad2: false,
				isShowKeyboad3: false,
				licensePlateId: ['', '', '', '', '', '', '', ''], //车牌号
				licensePlateFirst: [
					'京', '津', '晋', '冀', '蒙', '辽', '黑', '吉', '沪', '苏',
					'浙', '皖', '闽', '赣', '鲁', '豫', '鄂', '湘', '粤', '桂',
					'琼', '川', '贵', '云', '藏', '渝', '陕', '甘', '青', '宁',
					'新', '使', '港', '澳', '台', '学', '虚', 'W'
				],
				licensePlateteTwo: [
					'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
					'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'O', 'P', '领',
					'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '警',
					'Z', 'X', 'C', 'V', 'B', 'N', 'M', '港', '澳'
				],
				licensePlateteThree: [
					'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
					'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'P', '学', '领',
					'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '警',
					'Z', 'X', 'C', 'V', 'B', 'N', 'M', '港', '澳'
				],
				index: 0, //当前输入框下标
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				let {
					index
				} = this;
				this.showKeyboard(index);
			},
			// 键盘选择
			keyboardSelect(val) {
				let {
					licensePlateId,
					index
				} = this;
				let disable = this.disableGet(val)
				if (disable) return;
				licensePlateId[index] = val;
				this.licensePlateId = licensePlateId;
				let nextIndex = ++index
				if (nextIndex > 7) return;
				this.index = nextIndex;
				// console.log(val)
				this.showKeyboard(nextIndex);
			},
			// 显示键盘
			showKeyboard(index) {
				this.index = index;
				if (index == 0) {
					this.isShowKeyboad1 = true;
					this.isShowKeyboad2 = false;
					this.isShowKeyboad3 = false;
				} else if ([6, 7].includes(index)) {
					this.isShowKeyboad1 = false;
					this.isShowKeyboad2 = false;
					this.isShowKeyboad3 = true;
				} else {
					this.isShowKeyboad1 = false;
					this.isShowKeyboad2 = true;
					this.isShowKeyboad3 = false;
				}
			},
			// 隐藏键盘
			hideKeyboard() {
				this.isShowKeyboad1 = false;
				this.isShowKeyboad2 = false;
				this.isShowKeyboad3 = false;
			},
			// 删除车牌号
			delLicensePlate() {
				let {
					licensePlateId,
					index
				} = this;
				licensePlateId[index] = '';
				this.licensePlateId = licensePlateId;
				let preIndex = --index
				if (preIndex < 0) return;
				this.index = preIndex;
				this.showKeyboard(preIndex);
			},
			disableGet(item) {
				let {
					index
				} = this;
				// console.log(index,item)
				let flag = false;
				if ([1].includes(index) && ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '领', '警', '港', '澳'].includes(
						item)) {
					flag = true
				} else if ([2, 3, 4].includes(index) && ['领', '警', '港', '澳'].includes(item)) {
					flag = true
				} else if ([5].includes(index) && ['O', '领', '警', '港', '澳'].includes(item)) {
					flag = true
				}
				return flag
			},
			send() {
				let {
					licensePlateId
				} = this;
				let licensePlate = licensePlateId.join('');
				if (licensePlate.length < 8) return;
				console.log(licensePlate)
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.license-plate-container {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 101;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		flex-direction: column;

		>.item {
			&:nth-of-type(1) {
				flex: 1;
			}

			&:nth-of-type(2) {
				position: relative;
				min-height: 994rpx;
				background: #FFFFFF;
				border-radius: 40rpx 40rpx 0px 0px;
				background-image: url("https://frontend-c.oss-cn-hangzhou.aliyuncs.com/wz-mini-program/chargeDetail/licensePlate/bg.png");
				background-repeat: no-repeat;
				background-size: 750rpx 310rpx;

				&::after {
					content: "";
					position: absolute;
					left: 0;
					top: -238rpx;
					width: 100%;
					height: 400rpx;
					background-image: url("https://frontend-c.oss-cn-hangzhou.aliyuncs.com/wz-mini-program/chargeDetail/licensePlate/car-bg.png");
					background-size: 750rpx 400rpx;
				}

				.close-box {
					position: absolute;
					top: 0rpx;
					right: 7rpx;
					padding: 38rpx;

					.close-img {
						width: 24rpx;
						height: 24rpx;
					}
				}

				.title-box {
					padding-left: 40rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 500;
					font-size: 34rpx;
					color: #222222;
					line-height: 44rpx;
					margin-top: 235rpx;

					.hour {
						font-weight: 600;
						color: #FD291A;
						margin-left: 8rpx;
					}
				}

				.input-box {
					display: flex;
					justify-content: space-between;
					padding: 29rpx 40rpx;
					box-sizing: border-box;

					>.item {
						width: 70rpx;
						height: 88rpx;
						background: #F7F7F7;
						border-radius: 6rpx;
						border: 1rpx solid #DBDBDB;
						transform: rotateZ(360deg);
						display: flex;
						align-items: center;
						justify-content: center;
						font-family: PingFangSC, PingFang SC;
						font-weight: 600;
						font-size: 44rpx;
						color: #222222;

						&.active {
							border: 2rpx solid #1FA71F;
							background: rgba(125, 211, 6, 0.08);
						}
					}
				}

				.tip {
					padding-left: 40rpx;
					font-family: PingFangSC, PingFang SC;
					font-weight: 400;
					font-size: 24rpx;
					color: #FD631A;
					line-height: 44rpx;
				}

				.send-btn {
					margin: 50rpx auto 20rpx;
					width: 710rpx;
					height: 96rpx;
					background: #E6E6E6;
					border-radius: 48rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					font-family: PingFangSC, PingFang SC;
					font-weight: 500;
					font-size: 40rpx;
					color: #FFFFFF;

					&.active {
						background: linear-gradient(90deg, #77C708 0%, #34B834 100%);
					}
				}

			}
		}


		.keyboard-box {
			background: #E5E5E5;
			margin-bottom: 64rpx;

			.keyboard-close-box {
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #FFFFFF;
				height: 68rpx;
				border-top: 1rpx solid #EEEEEE;
				transform: rotateZ(360deg);

				.hide-img {
					width: 50rpx;
					height: 50rpx;
				}
			}

			.keyboard-content {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				padding: 14rpx 10rpx 2rpx;
				box-sizing: border-box;

				.item,
				.del-btn {
					width: 70rpx;
					height: 90rpx;
					background: #FFFFFF;
					border-radius: 8rpx;
					margin-bottom: 12rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-family: PingFangTC, PingFangTC;
					font-weight: 600;
					font-size: 32rpx;
					color: #111111;

					&.disable {
						color: #CCCCCC;
					}
				}

				.del-btn {
					width: 143rpx;
				}

				.del-img {
					width: 60rpx;
					height: 50rpx;
				}
			}
		}
	}
</style>