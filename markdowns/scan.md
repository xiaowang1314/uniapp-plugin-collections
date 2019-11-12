# uni-app二维码、条形码扫码自定义

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/scan.md)

### 插件预览图
![](https://github.com/xiaowang1314/u-validcode/blob/master/static/scan.png)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下scan.vue文件拷贝到自己项目目录下

2.插件全局配置

- 在项目里main.js中配置如下代码

```
import scan from './components/scan.vue'

Vue.component('scan',scan)

```

3.插件使用

- vue页面使用

```
<template>
	<view>
		<scan @getCode="getScanCode"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//获取扫码控件
			getScanCode(val){
				console.log(val)
			},
		}
	}
</script>

<style>

</style>

```

### 注意事项(特别是不懂原生app开发者
1.manifest.json文件查看是否添加了相机权限，如下：
"<uses-permission android:name=\"android.permission.CAMERA\"/>"

否则安卓机会出现没有相机权限。这是创建新项目时某些版本没有自动添加安卓相机权限


##### 兼容性
uni-app项目ios、android都兼容