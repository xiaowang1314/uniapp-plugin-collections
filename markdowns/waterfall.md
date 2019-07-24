# uni-app项目瀑布流布局

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/waterfall.md)

### 插件预览图
![](https://github.com/xiaowang1314/u-validcode/blob/master/static/waterfall.png)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下waterfall.vue文件拷贝到自己项目目录下

2.插件全局配置

- 在项目里main.js中配置如下代码

```
import waterfall from './components/waterfall.vue'

Vue.component('waterfall',waterfall)

```

3.插件使用

- vue页面使用

```
<template>
	<view>
		<!-- 瀑布流（display: flex） H5 IOS Android支持 -->
		<waterfall></waterfall>
	</view>
</template>
```


##### 兼容性
uni-app项目中使用都兼容