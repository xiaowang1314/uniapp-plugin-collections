<template>
	<view id="barcode"></view>
</template>

<script>
	export default {
		data() {
			return {
				// #ifdef APP-PLUS
				barcode: [
					plus.barcode.QR,
					plus.barcode.EAN13,
					plus.barcode.EAN8,
					plus.barcode.UPCA,
					plus.barcode.UPCE,
					plus.barcode.CODABAR,
					plus.barcode.CODE39,
					plus.barcode.CODE93,
					plus.barcode.CODE128,
					plus.barcode.ITF,
				],//码类型
				// #endif
			};
		},
		created() {
			var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;//状态栏
			var height = statusBarHeight + 44 +104+'px';
			var pages = getCurrentPages();
			var page = pages[pages.length - 1];
			// #ifdef APP-PLUS
			var currentWebview = page.$getAppWebview();
			this.barcode = plus.barcode.create('barcode', this.barcode, {
				top: '0',
				left: '0px',
				width: '100%',
				height: height,//这里可以设置扫码框的高度
				position: 'static'
			});
			this.barcode.onmarked = this.onmarked;
			currentWebview.append(this.barcode);
			const res = uni.getSystemInfoSync();
			if(res.platform == 'android'){//安卓机
				this.barcode.start();
			}
			// #endif
		},
		onUnload() {
			clearTimeout(this.t);
		},
		methods: {
			onmarked(type, result) {
				// console.log(type +':'+ result);
				this.$emit('getCode',result);
				this.t=setTimeout(() => {
					this.barcode.start();
				}, 1000)
			}
		}
	}
</script>

<style lang="less">

</style>
