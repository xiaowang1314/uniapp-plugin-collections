<template>
	<view class="modal-container">
		<view class="bg" @tap="maskClose"></view>
		<view class="box">
			<view class="content-box">
				<slot></slot>
			</view>
			<view class="footer">
				<view v-if="cancelVisble" class="item-cancel" @tap="cancel">{{cancelText}}</view>
				<view :class="['item-ok',{'ghost':okGhost}]" @tap="ok">{{okText}}</view>
			</view>
			<view v-if="closable" class="close-btn" @tap="close">
				<image :src="config.imgs[0]" class="icon-close"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
	defineOptions({ name: 'Modal' });
	const emit = defineEmits(['cancel','ok'])
	const props = defineProps({
		// 取消按钮文字
		cancelText:{
			type:String,
			default:"取消"
		},
		// 	取消按钮是否显示
		cancelVisble:{
			type:Boolean,
			default:true
		},
		// 确认按钮文字
		okText:{
			type:String,
			default:"确定"
		},
		// 幽灵属性，使按钮背景透明
		okGhost:{
			type:Boolean,
			default:false
		},
		// 点击蒙层是否允许关闭
		maskClosable:{
			type:Boolean,
			default:true
		},
		// 是否显示关闭按钮
		closable:{
			type:Boolean,
			default:true
		},
	})
	import {
		ref,
		reactive,
		computed,
		onMounted
	} from 'vue'
	const config = reactive({
		imgs:[
			'https://frontend-c.oss-cn-hangzhou.aliyuncs.com/wz-mini-program/v2/icons/close.png'
		]
	})
	
	const maskClose=()=>{
		if(props.maskClosable){
			// console.log("maskClose")
			emit("cancel")
		}
	}
	
	const close =()=>{
		// console.log("close")
		emit("cancel")
	}
	
	const cancel =()=>{
		// console.log("cancel")
		emit("cancel")
	}
	
	const ok =()=>{
		// console.log("ok")
		emit("ok")
	}
	
	
	onMounted(()=>{
		
	})
	
</script>

<style lang="scss" scoped>
	.modal-container{
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 103;
		background-color: rgba(0, 0, 0, 0.6);
		.bg{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		.box{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			min-width: 590rpx;
			min-height: 338rpx;
			background: #FFFFFF;
			border-radius: 22rpx;
			padding: 90rpx 26rpx 50rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			.content-box{
				flex: 1;
				text-align: center;
				font-family: PingFangSC, PingFang SC;
				font-weight: 500;
				font-size: 34rpx;
				color: #222222;
			}
			.footer{
				padding-top: 20rpx;
				box-sizing: border-box;
				display: flex;
				gap: 0 20rpx;
				.item-cancel,.item-ok{
					flex: 1;
					height: 80rpx;
					border-radius: 40rpx;
					border: 1rpx solid #979797;
					transform: rotateZ(360deg);
					display: flex;
					align-items: center;
					justify-content: center;
					font-family: PingFangSC, PingFang SC;
					font-weight: 400;
					font-size: 34rpx;
				}
				.item-cancel{
					background: #FFFFFF;
					color: #000000;
				}
				.item-ok{
					background: linear-gradient( 90deg, #77C708 0%, #34B834 100%);
					color: #FFFFFF;
					border-color: transparent;
					&.ghost{
						border-color: #1FA71F;
						background: #FFFFFF;
						color: #1FA71F;
					}
				}
			}
			.close-btn{
				position: absolute;
				bottom: -174rpx;
				left: 50%;
				z-index: 2;
				transform: translateX(-50%);
				padding: 40rpx;
				box-sizing: border-box;
				.icon-close{
					width: 64rpx;
					height: 64rpx;
				}
			}
		}
	}
</style>