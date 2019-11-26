# uni-app Flex实现table布局

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/table.md)

### 插件预览图
![](https://github.com/xiaowang1314/u-validcode/blob/master/static/table.png)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下table/table.vue文件拷贝到自己项目目录下

2.插件全局配置

- 在项目里main.js中配置如下代码

```
import table from './components/table/table.vue'

Vue.component('m-table',table)

```

3.插件使用

- vue页面使用

```
<template>
	<view>
		<m-table />
	</view>	
</template>
```


##### 兼容性
uni-app项目中使用都兼容

##### 注意
uniapp不支持命名为table的自定义组件、table是保留关键字