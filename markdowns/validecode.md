# uni-app项目自定义验证码输入、密码输入使用

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/validecode.md)

### 插件预览图
![](https://github.com/xiaowang1314/u-validcode/blob/master/static/validecode.gif)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下validCode.vue文件拷贝到自己项目目录下

2.插件全局配置

- 在项目里main.js中配置如下代码

```
import validCode from './components/validCode.vue'

Vue.component('validcode',validCode)

```

3.插件使用

- vue页面使用

```
<template>
	<view class="content">
		<view>验证码：</view>
		<validcode ref="code" :maxlength="4" :isPwd="false" @finish="getCode" ></validcode>
		<view>密码:</view>
		<validcode ref="pwd" :maxlength="6" :isPwd="true" @finish="getPwd"></validcode>
		<button type="primary" @tap="clearCode">清空验证码</button>
		<button type="primary" @tap="clearPwd">清空密码</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		onLoad() {},
		methods: {
			//获取code码
			getCode(val) {
				console.log(val);
			},
			//获取密码
			getPwd(val) {
				console.log(val);
			},
			// 清空验证码
			clearCode(){
				 this.$refs.code.clear();
			},
			// 清空密码
			clearPwd(){
				 this.$refs.pwd.clear();
			}
		}
	};
</script>

<style>
	.content {
		height: 400upx;
	}
	button{
		margin-top: 30upx;
	}
</style>



```


##### 兼容性
uni-app项目中使用都兼容