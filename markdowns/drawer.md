# Drawer 抽屉

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/drawer.md)

### 插件预览图
![](https://github.com/xiaowang1314/u-validcode/blob/master/static/drawer.gif)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下/drawer/drawer.vue文件拷贝到自己项目目录下

2.插件全局配置

- 在项目里main.js中配置如下代码

```
import drawer from './components/battery/drawer.vue'

Vue.component('drawer',drawer)

```

3.插件使用

- vue页面使用

```
<template>
	<view>
		<drawer :show="drawerShow" @cancel="cancel" @ensure="ensure">
			<view>这里是自定义内容区域</view>
		</drawer>
		<button type="primary" @tap="show">显示</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				drawerShow: false,
			};
		},
		methods: {
			//显示抽屉
			show(){
				this.drawerShow = true;
			},
			//取消
			cancel() {
				console.log('您点击了取消按钮')
				this.drawerShow = false;
			},
			//确定
			ensure(){
				console.log('您点击了确定按钮')
				this.drawerShow = false;
			}
		}
	}
</script>

<style lang="less">

</style>

```

##### 兼容性
uni-app项目中使用都兼容