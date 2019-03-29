# uni-app项目保存图片到相册

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/saveImg.md)

### 插件预览图
![](https://github.com/xiaowang1314/u-validcode/blob/master/static/saveImg.gif)

#### 功能介绍

1.长按保存图片    
2.右下角图片点击保存图片
3.点击图片可以隐藏图片


#### 使用教程



1.插件代码拷贝

- 下载后把components目录下saveFile.vue文件拷贝到自己项目目录下

2.插件全局配置

- 在项目里main.js中配置如下代码

```
import savefile from './components/saveFile.vue'

Vue.component('savefile',savefile)

```

3.插件使用


- vue页面使用

```
<template>
	<view>
		<!-- 预览图片 -->
		<savefile v-if="isShowPhoto" :url="qrUrl" @hide="hidePhoto"></savefile>
	</view>
</template>

<script>
export default {
	data() {
		return {
			qrUrl:'/static/img/img1.jpg',
			isShowPhoto:true,
		};
	},
	onLoad() {},
	methods: {
		hidePhoto(){
			this.isShowPhoto = false;
			uni.showToast({
				title:'图片已隐藏',
				icon:'none'
			})
		}
	}
};
</script>


```


##### 兼容性
uni-app项目中使用都兼容 除了H5