<template>
	<view class="content">
		<textscroll :list="list" @getCurrentIndex="getIndex" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['1分钟前，无夏购买了会员', '2分钟前，无夏购买了会员', '3分钟前，无夏购买了会员'],
				index: 0,
			};
		},
		onLoad() {},
		methods: {
			getIndex(index) {
				this.index = index;
				// console.log(index)
			}
		}
	};
</script>

<style>
	.button {
		margin-top: 100upx;
	}
</style>
