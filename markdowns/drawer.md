# Drawer 抽屉

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/drawer.md)

### 插件预览图
![](https://github.com/xiaowang1314/u-validcode/blob/master/static/drawer.gif)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下/drawer/drawer.vue文件拷贝到自己项目目录下


2.插件使用

- vue页面使用

```
<template>
	<view>
		<!--属性 direction：left(默认右往左滑动) right(左往右滑动)-->
		<drawer :show="drawerShow" @cancel="cancel" @ensure="ensure" >
			<view>右往左滑动</view>
			<view>自定义内容</view>
		</drawer>
		<drawer :show="drawerShow2" @cancel="cancel2" @ensure="ensure2" direction="right">
			<view>左往右滑动</view>
			<view>自定义内容</view>
		</drawer>
		<button type="primary" @tap="show">右往左滑动</button>
		<button type="warn" @tap="show2">左往右滑动</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				drawerShow: false,
				drawerShow2: false,
			};
		},
		methods: {
			//显示抽屉
			show(){
				this.drawerShow = true;
			},
			show2(){
				this.drawerShow2 = true;
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
			},
			//取消
			cancel2() {
				console.log('您点击了取消按钮')
				this.drawerShow2 = false;
			},
			//确定
			ensure2(){
				console.log('您点击了确定按钮')
				this.drawerShow2 = false;
			}
		}
	}
</script>

<style lang="less">

</style>


```

##### 兼容性
uni-app项目中使用都兼容

#### 提示
需要修改样式的可以在组件里面修改