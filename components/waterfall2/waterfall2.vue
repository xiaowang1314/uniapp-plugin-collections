<template>
	<!-- 
		瀑布流横向实现flex
		备注：容器必须有固定高度且高度大于最高的列高  固定高度可以根据当前渲染内容自行计算
	 -->
	<view class="container">
		<view class="item" style="height: 140px"></view>
		<view class="item" style="height: 190px"></view>
		<view class="item" style="height: 170px"></view>
		<view class="item" style="height: 120px"></view>
		<view class="item" style="height: 160px"></view>
		<view class="item" style="height: 180px"></view>
		<view class="item" style="height: 140px"></view>
		<view class="item" style="height: 150px"></view>
		<view class="item" style="height: 170px"></view>
		<view class="item" style="height: 170px"></view>
		<view class="item" style="height: 80px"></view>
		<view class="item" style="height: 100px"></view>
		<view class="item" style="height: 270px"></view>
		<view class="item" style="height: 170px"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
		.container {
		display: flex;
		flex-flow: column wrap;
		align-content: space-between;
		//容器必须有固定高度且高度大于最高的列高
		height: 1660px;
		border-radius: 3px;
		padding: 20px;
		width: 100%;
		counter-reset: items;
		box-sizing: border-box;
	}
	
	.item {
		width: 32%;
		margin-bottom: 2%;
		border-radius: 3px;
		background-color: #a1cbfa;
		border: 1px solid #4290e2;
		color: #fff;
		padding: 15px;
		box-sizing: border-box;
	}
	
	/* 仅用于打印数字 */
	.item::before {
		counter-increment: items;
		content: counter(items);
	}
	
	/* 将内容块重排为3列 */
	.item:nth-child(3n+1) {
		order: 1;
	}
	
	.item:nth-child(3n+2) {
		order: 2;
	}
	
	.item:nth-child(3n) {
		order: 3;
	}
	
	/* 强制换列 */
	.container::before,
	.container::after {
		content: "";
		flex-basis: 100%;
		width: 0;
		order: 2;
	}
</style>
