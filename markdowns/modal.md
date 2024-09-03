# uni-app自定义弹窗

[github地址，喜欢的可以star下哦](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/markdowns/modal.md)

### 插件预览图
![](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/static/modal/modal2.png)
![](https://github.com/xiaowang1314/uniapp-plugin-collections/blob/master/static/modal/modal1.png)

#### 使用教程

1.插件代码拷贝

- 下载后把components目录下modal.vue文件拷贝到自己项目目录下


2.插件使用

- vue页面使用

```
<template>
	<view>
		<button type="primary" @tap="isShowAdTip = true">显示</button>
		<modal v-if="isShowAdTip" :cancelVisble="false" @cancel="cancel" @ok="ok">这是提示内容</modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowAdTip:true
			}
		},
		methods: {
			cancel(){
				console.log("cancel回调")
				this.isShowAdTip = false
			},
			ok(){
				console.log("ok回调")
				this.isShowAdTip = false
			}
		}
	}
</script>

```


##### API

```

// 取消按钮文字
cancelText:{
	type:String,
	default:"取消"
},
// 取消按钮是否显示
cancelVisble:{
	type:Boolean,
	default:true
},
// 确认按钮文字
okText:{
	type:String,
	default:"确定"
},
// 幽灵属性，使按钮背景透明
okGhost:{
	type:Boolean,
	default:false
},
// 点击蒙层是否允许关闭
maskClosable:{
	type:Boolean,
	default:true
},
// 是否显示关闭按钮
closable:{
	type:Boolean,
	default:true
},

// 事件
@cancel   点击遮罩层或右上角叉或取消按钮的回调
@ok       点击确定回调

```

##### 兼容性
uni-app项目中使用都兼容