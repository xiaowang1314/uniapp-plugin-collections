<template>
	<view class="content">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
		 circular="true" indicator-color="#ffffff" indicator-active-color="#FF546E">
			<swiper-item>
				<navigator url="/pages/goodsDetail/goodsDetail" hover-class="none" class="swiper-item" :style="{backgroundImage:'url('+imgs[0]+')'}"></navigator>
			</swiper-item>
			<swiper-item>
				<navigator url="/pages/goodsDetail/goodsDetail" hover-class="none" class="swiper-item" :style="{backgroundImage:'url('+imgs[0]+')'}"></navigator>
			</swiper-item>
			<swiper-item>
				<navigator url="/pages/goodsDetail/goodsDetail" hover-class="none" class="swiper-item" :style="{backgroundImage:'url('+imgs[0]+')'}"></navigator>
			</swiper-item>
		</swiper>
		<image :src="images[4]" mode="widthFix" class="lable-img"></image>
		<view class="flex-box link-area">
			<navigator url="/pages/goodsDetail/goodsDetail" class="item-2" hover-class="none">
				<image :src="images[0]" mode="widthFix" class="img"></image>
			</navigator>
			<navigator url="/pages/goodsDetail/goodsDetail" class="item-2" hover-class="none">
				<image :src="images[1]" mode="widthFix" class="img"></image>
			</navigator>
		</view>
		<navigator url="/pages/goodsDetail/goodsDetail" hover-class="none">
			<image :src="images[2]" mode="widthFix" class="img"></image>
		</navigator>
		<navigator url="/pages/goodsDetail/goodsDetail" hover-class="none">
			<image :src="images[3]" mode="widthFix" class="img"></image>
		</navigator>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				images:[
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/main/img1.png',
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/main/img2.png',
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/main/img3.png',
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/main/img4.png',
					'https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/main/img5.png'
				],
				imgs: [
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4067865560,4104866691&fm=15&gp=0.jpg'
				]
			}
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 22upx;
	}
	
	.lable-img{
		margin: 36upx 0;
		width: 180upx;
		height: 63upx;
	}

	.swiper {
		height: 280upx;

		.swiper-item {
			height: 100%;
			background-size: cover;
			border-radius: 10upx;
		}
	}

	.img {
		width: 100%;
		border-radius: 10px;
		margin-bottom: 22upx;
	}

	.link-area {
		.item-2 {
			box-sizing: border-box;
		}

		.item-2:nth-of-type(1) {
			padding-right: 11upx;
		}

		.item-2:nth-of-type(2) {
			padding-left: 11upx;
		}
	}
</style>
