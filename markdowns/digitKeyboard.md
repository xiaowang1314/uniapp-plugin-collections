# 数字键盘

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/digitKeyboard.md)

### 插件预览图
![](https://github.com/xiaowang1314/u-validcode/blob/master/static/keyboard.gif)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下/digitKeyboard/digitKeyboard.vue文件拷贝到自己项目目录下

2.插件全局配置

- 在项目里main.js中配置如下代码

```
import digitKeyboard from './components/digitKeyboard/digitKeyboard.vue'

Vue.component('digitKeyboard', digitKeyboard)

```

3.插件使用

- vue页面使用

```
<template>
	<view>
		<!-- 数字键盘 -->
		<digitKeyboard v-if="isShowKeyboardWindow" :inputVal="inputVal" :label="label" @cancel="isShowKeyboardWindow = false" @confirm="keyboardConfirm"/>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				inputVal:'1',
				label:'现金支付',
				isShowKeyboardWindow:true,//是否显示键盘窗口
			};
		},
		methods:{
			keyboardConfirm(val){
				console.log(val)
				uni.showToast({
					title:'当前输入的值:'+val,
					icon:'none',
					duration:4000
				})
			}
		}
	}
</script>
<style lang="less">

</style>

```

##### 兼容性
uni-app项目中使用都兼容