# uni-app 选择车牌号

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/licensePlate.md)

### 插件预览图
![](https://github.com/xiaowang1314/u-validcode/blob/master/static/licensePlate.png)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下licensePlate/licensePlate.vue文件拷贝到自己项目目录下


2.插件使用

- vue页面使用

```
<template>
	<view>
		<licensePlate :licensePlateDefault="licensePlateDefault" @success="licensePlateGet"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				licensePlateDefault:"",//默认车牌号
			}
		},
		methods: {
			// 获取车牌号
			licensePlateGet(val){
				uni.showToast({
					title:val+'',
					icon:"none"
				})
			}
		}
	}
</script>
```


##### 兼容性
uni-app项目中使用都兼容