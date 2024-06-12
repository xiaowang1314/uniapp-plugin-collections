<!-- 
自定义验证码输入、密码输入使用
 
使用方法：
maxlength：输入最大长度
isPwd：是否是密码模式
@finish：回调函数
 <validcode :maxlength="4" :isPwd="false" @finish="finish"></validcode>
 -->
<template>
	<view class="code-area">
		<view class="flex-box">
			<input
			    :value="val"
				type="number"
				focus="true"
				:maxlength="maxlength"
				class="hide-input"
				@input="getVal"
			/>
			<view v-bind:class="['item', { active: codeIndex == 1 }]">
				<view class="line"></view>
				<block v-if="isPwd && codeArr.length >= 1">
					<text class="dot">.</text>
				</block>
				<block v-else>	{{ codeArr[0] ? codeArr[0] : ''}}</block>
			</view>
			<view v-bind:class="['item', { active: codeIndex == 2 }]">
				<view class="line"></view>
				<block v-if="isPwd && codeArr.length >= 2">
					<text class="dot">.</text>
				</block>
				<block v-else>	{{ codeArr[1] ? codeArr[1] : ''}}</block>
			</view>
			<view v-bind:class="['item', { active: codeIndex == 3 }]">
				<view class="line"></view>
				<block v-if="isPwd && codeArr.length >= 3">
					<text class="dot">.</text>
				</block>
				<block v-else>	{{ codeArr[2] ? codeArr[2] : ''}}</block>
			</view>
			<view v-bind:class="['item', { active: codeIndex == 4 }]">
				<view class="line"></view>
				<block v-if="isPwd && codeArr.length >= 4">
					<text class="dot">.</text>
				</block>
				<block v-else>	{{ codeArr[3] ? codeArr[3] : ''}}</block>
			</view>
			<block v-if="maxlength === 6">				
				<view v-bind:class="['item', { active: codeIndex == 5 }]">
					<view class="line"></view>
					<block v-if="isPwd && codeArr.length >= 5">
						<text class="dot">.</text>
					</block>
					<block v-else>	{{ codeArr[4] ? codeArr[4] : ''}}</block>
				</view>
				<view v-bind:class="['item', { active: codeIndex == 6 }]">
					<view class="line"></view>
					<block v-if="isPwd && codeArr.length >= 6">
						<text class="dot">.</text>
					</block>
					<block v-else>	{{ codeArr[5] ? codeArr[5] : ''}}</block>
				</view>
			</block>
			
			
		</view>
	</view>
</template>

<script>
export default {
	props: {
		//最大长度 值为4或者6
		maxlength: {
			type: Number,
			default: 4
		},
		//是否是密码
		isPwd: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			codeIndex: 1, //下标
			codeArr: [],
			val:'',//输入框的值
		};
	},
	methods: {
		//取值
		getVal(e) {
			let { value } = e.detail;
			this.val=value;
			// console.log('验证码:', value);
			let arr = value.split('');
			this.codeIndex = arr.length + 1;
			this.codeArr = arr;
			// console.log(this.codeIndex, this.pwdArr);
			if (this.codeIndex > Number(this.maxlength)) {
				//输入完成
				this.$emit('finish',this.codeArr.join(''));
			}
		},
		//清除验证码或者密码
		clear(){
			this.codeIndex=1;
			this.codeArr=[];
			this.val="";
		}
	}
};
</script>

<style lang="scss">
.code-area {
	text-align: center;
	.flex-box {
		display: flex;
		flex-wrap: wrap;
		position: relative;
		justify-content: center;
	}

	.item {
		position: relative;
		width: 100upx;
		height: 100upx;
		margin-right: 18upx;
		font-size: 30upx;
		font-weight: bold;
		color: #333333;
		line-height: 100upx;
		box-sizing: border-box;
		border: 2upx solid #cccccc;
	}

	.item:last-child {
		margin-right: 0;
	}

	.active {
		border-color: #ff4b4b;
	}
	.active .line {
		display: block;
	}

	.line {
		display: none;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 2upx;
		height: 40upx;
		background: #ff4b4b;
		animation: twinkling 1s infinite ease;
	}

	.hide-input {
		position: absolute;
		top: 0;
		left: -100%;
		width: 200%;
		height: 100%;
		text-align: left;
		z-index: 9;
		opacity: 1;
	}

	@keyframes twinkling {
		0% {
			opacity: 0.2;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 0.2;
		}
	}
	
	.dot{
		font-size: 80upx;
		line-height: 40upx;
	}
}
</style>
