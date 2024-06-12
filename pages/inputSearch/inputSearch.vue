<template>
	<view class="content">
		<inputSearch :dataSource="dataSource" @select="handleChange" placeholder="请输入商品名称" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//数据源
				dataSource: [{
						id: 1,
						name: '耐克1'
					},
					{
						id: 2,
						name: '耐克2'
					}
				],
			};
		},
		methods: {
			//用户点击获取的数据
			handleChange(data) {
				// console.log(data)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding:20upx;
	}
</style>
