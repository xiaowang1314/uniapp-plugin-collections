<template>
	<view>
		<!-- 预览图片 -->
		<saveFile v-if="isShowPhoto" :url="qrUrl" @hide="hidePhoto"></saveFile>
	</view>
</template>



<script>
export default {
	data() {
		return {
			qrUrl:'/static/img/img1.jpg',
			isShowPhoto:true,
		};
	},
	onLoad() {},
	methods: {
		hidePhoto(){
			this.isShowPhoto = false;
			uni.showToast({
				title:'图片已隐藏',
				icon:'none'
			})
		}
	}
};
</script>

<style>

</style>
