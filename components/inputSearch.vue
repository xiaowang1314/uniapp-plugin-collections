<template>
	<!--
	<inputSearch :dataSource="dataSource" @select="handleChange" placeholder="请输入商品名称" />
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
	 
	 //用户点击获取的数据
	 handleChange(data) {
	 	console.log(data)
	 }
	 
	 -->
	<view class="input-group">
		<input :placeholder="placeholder" @input="search" @blur="hideList" v-model="name" />
		<view class="ul">
			<view class="li" v-for="(item,index) in list" :key="index" @tap="select(item)">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			placeholder: String, //默认提示
			searchKey: String, //模糊搜索的key值
			dataSource: {
				type: Array,
				default: function() { //数据源
					return [];
				}
			}
		},
		data() {
			return {
				list: [],
				name: '',
				backName: ''
			};
		},
		destroyed() {
			clearTimeout(this.t);
		},
		methods: {
			search(e) {
				let val = e.detail.value;
				let {
					dataSource
				} = this;
				let arr = [];
				for (let i = 0; i < dataSource.length; i++) {
					if (dataSource[i].name.indexOf(val) !== -1) {
						arr.push(dataSource[i]);
					}
				}
				// console.log(arr)
				if (!val) {
					this.list = [];
				} else {
					this.list = arr;
				}

			},
			select(item) {
				this.backName = item.name;
				this.list = [];
				this.$emit('select', item);
			},
			hideList() {
				this.list = [];
				this.t = setTimeout(() => {
					this.name = this.backName;
				}, 0);
			}
		}
	}
</script>


<style lang="scss">
	.input-group {
		position: relative;


		input {
			border: 1upx solid gray;
			height: 90upx;
			padding-left: 10upx;
			font-size: 30upx;
			box-sizing: border-box;
		}

		.ul {
			position: absolute;
			left: 0;
			top: 100%;
			width: 100%;
			background: #eaeaea;

			.li {
				border-bottom: 1upx solid gray;
				line-height: 60upx;
			}
		}
	}
</style>
