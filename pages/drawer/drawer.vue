<template>
	<view>
		<drawer :show="drawerShow" @cancel="cancel" @ensure="ensure">
			<view>这里是自定义内容区域</view>
		</drawer>
		<button type="primary" @tap="show">显示</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				drawerShow: false,
			};
		},
		methods: {
			//显示抽屉
			show(){
				this.drawerShow = true;
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
			}
		}
	}
</script>

<style lang="less">

</style>
