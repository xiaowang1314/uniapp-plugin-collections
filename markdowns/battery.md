# 模拟电池充电

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/battery.md)

### 插件预览图
![](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/static/battery.gif)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下/battery/battery.vue文件拷贝到自己项目目录下

2.插件使用

- vue页面使用

```
<template>
	<view>
		<battery class="battery"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.battery{
	margin: auto;
}
</style>



```

##### 兼容性
uni-app项目中使用都兼容