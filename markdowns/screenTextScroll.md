# uni-app项目展示屏幕文字滚动效果

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/screenTextScroll.md)

### 插件预览图
![](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/static/textScroll.gif)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下screenTextScroll.vue文件拷贝到自己项目目录下


2.插件使用

- vue页面使用

```
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


```


##### 兼容性
uni-app项目中使用都兼容