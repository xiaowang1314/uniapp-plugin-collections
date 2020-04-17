<!-- 数字键盘 -->
<template>
	<view  class="digit-keyboard">
		<view class="digit-keyboard_bg" @tap="hide"></view>
		<view class="digit-keyboard_area">
			<view class="input-area">
				<view class="item">{{label}}：</view>
				<view class="item">
					<input :placeholder="inputVal" v-model="val" class="input" disabled />
				</view>
				<view class="item">
					<button type="primary" size="mini" @tap="confirm">确定</button>
				</view>
			</view>
			<view class="number-area">
				<view class="item" @tap="modifyNum(1)">1</view>
				<view class="item" @tap="modifyNum(2)">2</view>
				<view class="item" @tap="modifyNum(3)">3</view>
				<view class="item" @tap="modifyNum('del')">
					<icon type="cancel" size="20" />
				</view>
				<view class="item" @tap="modifyNum(4)">4</view>
				<view class="item" @tap="modifyNum(5)">5</view>
				<view class="item" @tap="modifyNum(6)">6</view>
				<view class="item" @tap="modifyNum('add')">加1</view>
				<view class="item" @tap="modifyNum(7)">7</view>
				<view class="item" @tap="modifyNum(8)">8</view>
				<view class="item" @tap="modifyNum(9)">9</view>
				<view class="item" @tap="modifyNum('minus')">减1</view>
				<view class="item" @tap="modifyNum('-')">-</view>
				<view class="item" @tap="modifyNum(0)">0</view>
				<view class="item" @tap="modifyNum('.')">.</view>
				<view class="item" @tap="modifyNum('clear')">清除</view>
			</view>
		</view>
	</view>
</template>

<script>
	import NP from '../../util/numberPrecision/numberPrecision.js'
	export default {
		props: {
			inputVal: {
				type: [String],
				default: ''
			},
			label:{
				type:String,
				default:'现金'
			},
		},
		data() {
			return {
				val: ''
			};
		},
		created() {
	 
		},
		methods: {
			//隐藏
			hide(){
				this.$emit('cancel');
			},
			confirm(){
				let val =this.val;
				let valNew = val.slice(-1);
				if(valNew == '.'){
					val= val.slice(0,-1);
				}
				this.$emit('confirm',val);
			},
			modifyNum(sign) {
				let {
					val
				} = this;
				//删除
				if (sign == 'del') {
					if (val.length > 0) {
						let valNew = val.slice(0, -1);
						if (valNew.length == 0) {
							val = '';
						} else {
							val = valNew;
						}
					}
				} else if (sign == 'add') { //加1
					val = NP.plus(Number(val), 1) + '';
				} else if (sign == 'minus') { //减1
					val = NP.minus(Number(val), 1) + '';
				} else if (sign == 'clear') { //清除
					val = '';
				} else if (sign == '-') { //代表负数
					if (val.indexOf('-') == -1) {
						val = '-' + val;
					}
				} else if (sign == '.') { //点符号
					if (val.indexOf('.') == -1 && val.length > 0) {
						val = val + '.';
					}
				} else {
					if ((val == '0' && sign == '0') || (val == '-0' && sign == '0') || (val == '0' && sign != '.') || (val == '-0' && sign != '.')) {
						return;
					}
					val = val + sign;
				}
				//小数点大于3位不赋值
				let arr = val.split('.');
				if (arr.length == 2 && arr[1].length > 3) {
					return;
				}
				this.val = val;
			}
		}
	}
</script>


<style lang="scss" scoped>
	.digit-keyboard {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
	}

	.digit-keyboard_bg {
		width: 100%;
		height: 100%;
		background: rgba($color: #000000, $alpha: 0.5);
	}

	.digit-keyboard_area {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #efefef;
		padding-bottom: 20upx;
	}

	.input-area {
		display: flex;
		align-items: center;
		padding: 10upx;
		background: #FFFFFF;

		.item {
			font-size: 28upx;

			&:nth-of-type(2) {
				flex: 1 0 auto;
				padding-right: 10upx;
			}

			&:nth-of-type(3) {
				font-size: 0;
			}
		}

		.input {
			background: #eeeeee;
			text-indent: 10upx;
			font-size: 28upx;
			height: 60upx;
		}
	}

	.number-area {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		text-align: center;

		.item {
			margin-top: 20upx;
			flex: 0 0 22%;
			background: #FFFFFF;
			line-height: 80upx;
			font-size: 30upx;
			font-weight: bold;
		}
	}
</style>
