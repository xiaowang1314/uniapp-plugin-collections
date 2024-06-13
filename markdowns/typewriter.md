## Css打字机效果

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/typewriter.md)

### 插件预览图
![](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/static/typewriter.gif)

#### 使用教程


#### 代码展示

- vue页面使用

``` html
<template>
	<view class="typewriter">
		<view class="text">The cat and the hat.</view>
	</view>
</template>
```

- Style

```  css

<style>
	.typewriter {
		width: 390upx;
		margin: auto;
	}
	
	.typewriter .text {
		font-size: 40upx;
		overflow: hidden;
		border-right: 2upx solid orange;
		white-space: nowrap;
		margin: 0 auto;
		letter-spacing: 2;
		animation:typing 3.5s steps(40, end),blink-caret .75s step-end infinite;
	}
	
	@keyframes typing {
		from {
			width: 0
		}
	
		to {
			width: 100%
		}
	}
	
	@keyframes blink-caret {
	
		from,
		to {
			border-color: transparent
		}
	
		50% {
			border-color: orange;
		}
	}
</style>


```


##### 兼容性
全平台兼容