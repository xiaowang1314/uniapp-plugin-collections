<!-- 
<savefile  :url="payInfo.qrUrl" @hide="hidePhoto"></savefile>
url：是否显示图片
 //隐藏预览图片
 hidePhoto(){
 	this.isShowPhoto=false;
 },
 
 -->
<template>
	<!-- 预览图片 -->
	<view class="preview-photo-box flex-box">
		<view class="preview-photo-bg" @tap="hide"></view>
		<view class="item tc">
			<image class="receive-qrcode-img" :src="url" mode="widthFix" @tap="hide" @longtap="toSave"></image>
		</view>
		<view class="download-img" @tap="save">
			<image
				src="https://stylist2017-1252470632.cos.ap-shanghai.myqcloud.com/resources/DPC/icon/download.png"
			></image>
		</view>
	</view>
</template>


<script>
export default {
	props: {
		url: {
			type: String,
			default: ''
		}
	},
	data() {
		return {};
	},
	methods: {
		hide() {
			this.$emit('hide');
		},
		save() {
			console.log('url:',this.url);
			uni.getImageInfo({
				src: this.url,
				success: function(image) {
					console.log('图片信息：', JSON.stringify(image));
					uni.saveImageToPhotosAlbum({
						filePath: image.path,
						success: function() {
							console.log('save success');
							uni.showToast({
								title: '图片保存成功',
								icon: 'none',
								duration: 2200
							});
						}
					});
				}
			});
		},
		toSave() {
			uni.showModal({
				title: '图片保存',
				content: '确定要保存图片吗',
				success: e => {
					if (e['confirm']) {
						this.save();
					}
				}
			});
		}
	},
	created() {}
};
</script>

<style lang="scss">
.preview-photo-box {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 99;
	justify-content: center;
	align-items: center;
	.item {
		flex: 1 0 auto;
		.receive-qrcode-img {
			position: relative;
			z-index: 2;
			width: 100%;
		}
	}
	.download-img {
		position: absolute;
		bottom: 30upx;
		right: 30upx;
		z-index: 100;
		background: rgba(255,255,255,0.5);
		font-size: 0;
		image {
			width: 64upx;
			height: 64upx;
		}
	}
	.preview-photo-bg {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}
}
</style>
