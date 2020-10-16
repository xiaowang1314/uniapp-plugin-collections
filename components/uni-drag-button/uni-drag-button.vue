<template>
	<view class="scan-fixed" :style="{ bottom: bottom + 'px', right: right + 'px' }"  @touchstart="start" @touchmove="move" @touchend="end">
		<text class="icon" >拖动</text>
	</view>
</template>

<script>
export default {
	data() {
		let xy=uni.getStorageSync('xy');
		let bottom = 100;
		let right = 15;
		if(xy){
			bottom = xy.bottom;
			right = xy.right;
		}
		return {
			bottom: bottom,
			right: right,
			pageX:0,
			pageY:0
		};
	},
	methods: {
		start(e) {
			let page = e.changedTouches[0];
			this.pageX = page.pageX;
			this.pageY = page.pageY;
			// console.log('start:', page.pageX,page.pageY);
		},
		move(e) {
			let {pageX,pageY,bottom,right}=this;
			let page = e.changedTouches[0];
			let x = page.pageX-pageX;
			let y = page.pageY-pageY;
			this.pageX = page.pageX;
			this.pageY = page.pageY;
			this.right = right - x;
			this.bottom = bottom - y;
			
		
			uni.setStorageSync('xy', {
				right:this.right,
				bottom:this.bottom
			});
			
			
			// console.log('move:',page.pageX,page.pageY,  page.pageX-pageX,page.pageY-pageY);
		},
		end(e) {
			let page = e.changedTouches[0];
			// console.log('end:',  page.pageX,page.pageY);
		}
	}
};
</script>

<style lang="less" scoped>
.scan-fixed {
	position: fixed;
	// bottom: 100px;
	// right: 15px;
	z-index: 9999;
	background: #ffffff;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}
.icon {
	color: rgba(212, 48, 48, 1);
	font-size: 40upx;
	font-weight: bold;
}
</style>
