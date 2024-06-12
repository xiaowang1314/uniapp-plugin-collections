# 输入框模糊搜索

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/inputSearch.md)

### 插件预览图
![](https://github.com/xiaowang1314/u-validcode/blob/master/static/search.png)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下/inputSearch/inputSearch.vue文件拷贝到自己项目目录下
 
2.插件使用

- vue页面使用

```

<template>
	<view class="content">
		<inputSearch :dataSource="dataSource" @select="handleChange" placeholder="请输入商品名称" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				console.log(data)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		padding:20upx;
	}
</style>



```





##### 兼容性
uni-app项目中使用都兼容

##### 样式可以自己在组件里面调整