<template>
	<view class="content">
		<image :src="imgs[0]" class="bg"></image>
		<image :src="images[0]" class="qr"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgs: ['https://qmh.oss-cn-hangzhou.aliyuncs.com/miniconf/yibaimei/invite/bg.png'],
				images: [
					'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4067865560,4104866691&fm=15&gp=0.jpg'
				]
			};
		}
	}
</script>

<style lang="scss">
	.content{
		position: relative;
		font-size: 0;
	}
	.bg {
		width: 750upx;
		height: 1204upx;
	}
	.qr{
		position: absolute;
		top:903upx;
		left: 292upx;
		z-index: 3;
		width: 150upx;
		height: 150upx;
	}
</style>
