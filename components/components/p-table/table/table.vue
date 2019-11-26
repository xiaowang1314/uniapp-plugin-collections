<template>
	<view class="content">
		<view class="title">普通表格</view>
		<view class="genaral-area">
			<view class="flex-box tc thead">
				<view class="item-2">功率范围(瓦)</view>
				<view class="item-2">分钟</view>
			</view>
			<view class="flex-box table tc">
				<view class="item-2">
					1-100
				</view>
				<view class="item-2">
					每元240分钟
				</view>
			</view>
			<view class="flex-box table tc">
				<view class="item-2">
					1-100
				</view>
				<view class="item-2">
					每元240分钟
				</view>
			</view>
		</view>
		<view class="title">多行合并表格</view>
		<view  class="advance-area">
			<view class="flex-box tc thead">
				<view class="item-3">功率范围(瓦)</view>
				<view class="item-3">金额(元)</view>
				<view class="item-3">分钟</view>
			</view>
			<view class="flex-box table tc">
				<view class="item-3">
					1-100
				</view>
				<view class="item-3">
					<view class="table-flex">
						<view class="item">1</view>
						<view class="item">2</view>
						<view class="item">2</view>
					</view>
				</view>
				<view class="item-3">
					<view class="table-flex">
						<view class="item">1</view>
						<view class="item">2</view>
						<view class="item">2</view>
					</view>
				</view>
			</view>
			<view class="flex-box table tc">
				<view class="item-3">
					1-100
				</view>
				<view class="item-3">
					<view class="table-flex">
						<view class="item">1</view>
						<view class="item">2</view>
						<view class="item">3</view>
					</view>
				</view>
				<view class="item-3">
					<view class="table-flex">
						<view class="item">1</view>
						<view class="item">2</view>
						<view class="item">3</view>
					</view>
				</view>
			</view>
			<view class="flex-box table tc">
				<view class="item-3">
					1-100
				</view>
				<view class="item-3">
					<view class="table-flex">
						<view class="item">1</view>
						<view class="item">2</view>
					</view>
				</view>
				<view class="item-3">
					<view class="table-flex">
						<view class="item">1</view>
						<view class="item">2</view>
					</view>
				</view>
			</view>
		</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	$color:#e0e0e0;
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #fbf9fe;
	}
	
	.flex-box {
		display: flex;
		flex-wrap: wrap;
	}
	
	
	.flex-box>.item-2 {
		flex: 0 0 50%;
	}
	
	.flex-box>.item-3 {
		flex: 0 0 33.3333%;
	}
	
	.title{
		margin: 20upx 0;
		color: red;
	}
	
	//普通表格
	.genaral-area {
		.item-2 {
			font-size: 26upx;
			border: 1upx solid $color;
			border-width: 1upx 1upx 0 0;
			padding: 16upx 0;
			box-sizing: border-box;
			text-align: center;
	
			&:first-child {
				border-left-width: 1upx;
			}
	
			&:last-child {
				border-right-width: 1upx;
			}
		}
	
		.thead {
			.item-2 {
				font-weight: bold;
	
				box-sizing: border-box;
			}
		}
	
		.table {
			&:last-child {
				border-bottom: 1upx solid $color;
			}
	
			.item-2 {
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
			}
		}
	}
	
	
	// 多行合并表格
	.advance-area {
		.item-3 {
			font-size: 26upx;
			border: 1upx solid $color;
			border-width: 1upx 1upx 0 0;
			box-sizing: border-box;
			text-align: center;
	
			&:first-child {
				border-left-width: 1upx;
			}
	
			&:last-child {
				border-right-width: 1upx;
			}
		}
	
		.thead {
			.item-3 {
				font-weight: bold;
				padding: 16upx 0;
				box-sizing: border-box;
			}
		}
	
		.table {
			&:last-child {
				border-bottom: 1upx solid $color;
			}
	
			.item-3 {
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
			}
		}
	
		.table-flex {
			flex: 1;
	
			.item {
				border-bottom: 1upx solid $color;
				padding: 10upx 0;
				box-sizing: border-box;
	
				&:last-child {
					border-width: 0;
				}
			}
		}
	}
</style>
