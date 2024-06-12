<template>
	<view>
		<!--属性 direction：left(默认右往左滑动) right(左往右滑动)-->
		<drawer :show="drawerShow" @cancel="cancel" @ensure="ensure" >
			<view>右往左滑动</view>
			<view>自定义内容</view>
		</drawer>
		<drawer :show="drawerShow2" @cancel="cancel2" @ensure="ensure2" direction="right">
			<view>左往右滑动</view>
			<view>自定义内容</view>
		</drawer>
		<button type="primary" @tap="show">右往左滑动</button>
		<button type="warn" @tap="show2">左往右滑动</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				drawerShow: false,
				drawerShow2: false,
			};
		},
		methods: {
			//显示抽屉
			show(){
				this.drawerShow = true;
			},
			show2(){
				this.drawerShow2 = true;
			},
			//取消
			cancel() {
				console.log('您点击了取消按钮')
				this.drawerShow = false;
			},
			//确定
			ensure(){
				console.log('您点击了确定按钮')
				this.drawerShow = false;
			},
			//取消
			cancel2() {
				console.log('您点击了取消按钮')
				this.drawerShow2 = false;
			},
			//确定
			ensure2(){
				console.log('您点击了确定按钮')
				this.drawerShow2 = false;
			}
		}
	}
</script>

<style lang="less">

</style>
