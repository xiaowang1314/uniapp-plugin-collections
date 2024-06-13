# uni-app项目数字滚动

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/countUp.md)

### 插件预览图
![](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/static/countUp.gif)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下countUp.vue文件拷贝到自己项目目录下


2.插件使用

- vue页面使用

```
<template>
	<view>
		<countup :num="num" color="#ff9e50" width='13' height='23' fontSize='23'></countup>
		<button @tap="add">Add</button>
		<button @tap="reduce">Reduce</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			num:123.453
		};
	},
	onLoad() {},
	methods: {
		add() {
			this.num=++this.num;
		},
		reduce(){
			this.num=--this.num;
		}
	}
};
</script>


```

##### 兼容性
uni-app项目中使用都兼容