<template>
	<view class="content">
		<textscroll :list="list"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:['1分钟前，无夏购买了会员','2分钟前，无夏购买了会员','3分钟前，无夏购买了会员']
			};
		},
		onLoad() {},
		methods: {
		
		}
	};
</script>

<style>
	
</style>
