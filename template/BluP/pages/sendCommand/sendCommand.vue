<template>
	<view class="content">
		<view class="body">
			<view>
				<textarea class="result" v-model="returnResult"></textarea>
			</view>
			<textarea class="input" @input="inputEvent" />
			<button type="primary" @tap="sendData">发送(票据可使用)</button> 
		
			<view style='margin-top:4%;display: flex;flex-direction: row;'>
			   <button type='primary' @tap='receiptTest' :loading='isReceiptSend' :disabled='isReceiptSend'>票据测试</button>
			   <button type='primary' @tap='labelTest' :loading='isLabelSend' :disabled='isLabelSend'>标签测试</button>
			</view>
		
			<view style='margin-top:4%;display: flex;flex-direction: row;'>
				<canvas hidden='true' canvas-id='edit_area_canvas' :style="{width:canvasWidth+'px',height:canvasHeight+'px'}"></canvas>
			</view>
		
		    <picker style='margin:20px' mode='selector' :range='buffSize' :value='buffIndex' @change='buffBindChange'>
				当前每次发送字节数为(点击可更换)：{{buffSize[buffIndex]}}
			</picker>
		
			<picker style='margin:20px' mode='selector' :range='printNum' :value='printNumIndex' @change='printNumBindChange'>
				当前打印份数(点击可更换)：{{printNum[printNumIndex]}}
			</picker>
		
		</view>
	</view>
</template>

<script>
	var tsc = require("../../util/ble/tsc.js");
	var esc = require("../../util/ble/esc.js");
	var encode = require("../../util/ble/encoding.js");
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				sendContent: "",
				looptime: 0,
				currentTime: 1,
				lastData: 0,
				oneTimeData: 0,
				returnResult: "",
				canvasWidth: 180,
				canvasHeight: 180,
				imageSrc: '../../static/img/abc_ic_star_black_16dp.png',
				buffSize: [],
				buffIndex: 0,
				printNum: [],
				printNumIndex: 0,
				printerNum: 1,
				currentPrint: 1,
				isReceiptSend: false,
				isLabelSend: false
			};
		},
		computed: mapState(['sysinfo', 'Bluetooth']),
		onLoad() {
			let that = this;
			let {
				BLEInformation
			} = that.Bluetooth;
			// uni.notifyBLECharacteristicValueChange({
			//   deviceId: BLEInformation.deviceId,
			//   serviceId: BLEInformation.notifyServiceId,
			//   characteristicId: BLEInformation.notifyCharaterId,
			//   state: true,
			//   success(res) {
			// 	uni.onBLECharacteristicValueChange(function(r) {
			// 	  console.log(`characteristic ${r.characteristicId} has changed, now is ${r}`)
			// 	})
			//   },
			//   fail: function(e) {
			// 	console.log(e)
			//   },
			//   complete: function(e) {
			// 	console.log(e)
			//   }
			// })
		},
		onReady(){
			let list = []
			let numList = []
			let j = 0
			for (let i = 20; i < 200; i += 10) {
			  list[j] = i;
			  j++
			}
			for (let i = 1; i < 10; i++) {
			  numList[i - 1] = i
			}
			this.buffSize = list;
			this.oneTimeData = list[0];
			this.printNum = numList;
			this.printerNum = numList[0];
		},
		onShow(){
			let that = this;
			let width;
			let height;
			uni.getImageInfo({
			  src: that.imageSrc,
			  success(res) {
				console.log(res.width)
				console.log(res.height)
				width = res.width
				height = res.height
				that.canvasWidth = res.width;
				that.canvasHeight = res.height;
			  }
			})
			const ctx = uni.createCanvasContext("edit_area_canvas", this);
			// if (app.globalData.platform == "android") {
			//   ctx.translate(width, height)
			//   ctx.rotate(180 * Math.PI / 180)
			// }
			ctx.drawImage(this.imageSrc, 0, 0, width, height);
			ctx.draw();
		},
		onUnload() {
			let that = this;
			let {
				BLEInformation
			} = that.Bluetooth;
			// uni.closeBLEConnection({
		 //      deviceId: BLEInformation.deviceId,
		 //      success: function(res) {
		 //        console.log("关闭蓝牙成功")
		 //      },
		 //    })	
		},
		methods:{
			//获取输入内容
			inputEvent(e){
				this.sendContent = e.detail.value;
			},
			//输入框点击发送
			sendData(){
				let data = this.sendContent + "\n"
				this.looptime = 0;
				var content = new encode.TextEncoder(
				  'gb18030', {
					NONSTANDARD_allowLegacyEncoding: true
				  }).encode(data);
			
				this.prepareSend(content);
			},
			//标签测试
			labelTest(){
				let that = this;
				let canvasWidth = that.canvasWidth
				let canvasHeight = that.canvasHeight
				let command = tsc.jpPrinter.createNew()
				command.setSize(48, 40)
				command.setGap(0)
				command.setCls()
				command.setText(0, 30, "TSS24.BF2", 1, 1, "图片")
				command.setQR(40, 120, "L", 5, "A", "www.smarnet.cc佳博智汇")
				command.setText(60, 90, "TSS24.BF2", 1, 1, "佳博智汇")
				command.setText(170, 50, "TSS24.BF2", 1, 1, "小程序测试")
				command.setText(170, 90, "TSS24.BF2", 1, 1, "测试数字12345678")
				command.setText(170, 120, "TSS24.BF2", 1, 1, "测试英文abcdefg")
				command.setText(170, 150, "TSS24.BF2", 1, 1, "测试符号/*-+!@#$")
				command.setBarCode(170, 180, "EAN8", 64, 1, 3, 3, "1234567")
				uni.canvasGetImageData({
				  canvasId: 'edit_area_canvas',
				  x: 0,
				  y: 0,
				  width: canvasWidth,
				  height: canvasHeight,
				  success: function(res) {
					command.setBitmap(60, 0, 1, res)
				  },
				  complete: function() {
					command.setPagePrint()
					that.isLabelSend = true;
					that.prepareSend(command.getData())
				  }
				})
			},

			//票据测试
			receiptTest(){
				var that = this;
				var canvasWidth = that.canvasWidth
				var canvasHeight = that.canvasHeight
				var command = esc.jpPrinter.createNew()
				command.init()
				// 标题
				command.bold(1);//加粗
				command.setFontSize(16);//字体大小
				command.setSelectJustification(1)//居中
				command.rowSpace(100);
				command.setText("杭州总店");
				command.setPrint();
				command.rowSpace(60);
				
				command.bold(0);//取消加粗
				command.setFontSize(0);//正常字体
				//时间
				command.setSelectJustification(0);//居左
				command.setText("时间：2019-11-11 12:10:30");
				command.setPrint();
				//编号
				command.setSelectJustification(0);//居左
				command.setText("编号：SD10000000000000000");
				command.setPrintAndFeed(80);//打印并走纸feed个单位
				//列表
				command.rowSpace(80);//间距
				command.bold(5);//加粗
				command.setText("货号");
				command.setAbsolutePrintPosition(100);
				command.setText("颜色");
				command.setAbsolutePrintPosition(180);
				command.setText("尺码");
				command.setAbsolutePrintPosition(270);
				command.setText("单价");
				command.setAbsolutePrintPosition(380);
				command.setText("数量");
				command.setAbsolutePrintPosition(480);
				command.setText("金额");
				command.setPrint()
				command.bold(0);//加粗
				// -------1
				command.setText("86001W");
				command.setAbsolutePrintPosition(100);
				command.setText("黄色");
				command.setAbsolutePrintPosition(180);
				command.setText("均码");
				command.setAbsolutePrintPosition(270);
				command.setText("16947.92");
				command.setAbsolutePrintPosition(390);
				command.setText("1");
				command.setAbsolutePrintPosition(480);
				command.setText("19647.92");
				command.setPrint()
				// ------2
				command.setText("86001W");
				command.setAbsolutePrintPosition(100);
				command.setText("黄色");
				command.setAbsolutePrintPosition(180);
				command.setText("均码");
				command.setAbsolutePrintPosition(270);
				command.setText("16947.92");
				command.setAbsolutePrintPosition(390);
				command.setText("1");
				command.setAbsolutePrintPosition(480);
				command.setText("19647.92");
				command.setPrint()
				// -------3
				command.setText("86001W");
				command.setAbsolutePrintPosition(100);
				command.setText("黄色");
				command.setAbsolutePrintPosition(180);
				command.setText("均码");
				command.setAbsolutePrintPosition(270);
				command.setText("16947.92");
				command.setAbsolutePrintPosition(390);
				command.setText("1");
				command.setAbsolutePrintPosition(480);
				command.setText("19647.92");
				command.setPrint();
			
			
				//合计
				command.bold(5);//加粗
				command.setAbsolutePrintPosition(120);
				command.setText("总数：10");
				command.setAbsolutePrintPosition(320);
				command.setText("合计：10000");
				command.setPrint();
				command.setAbsolutePrintPosition(120);
				command.setText("实收：10000");
				command.setAbsolutePrintPosition(320);
				command.setText("找零：0");
				command.setPrint();
				// 收银员
				command.rowSpace(120);//间距
				command.setAbsolutePrintPosition(120);
				command.setText("店员：何丹");
				command.setAbsolutePrintPosition(320);
				command.setText("会员：1000000000");
				command.setPrint()
			
				//提示
				command.rowSpace(80);//间距
				command.bold(2);//加粗
				command.setSelectJustification(1);//居中
				command.setText("售出商品购买后7天内,可凭小票退换");
				command.setPrint();
				command.setText("(注：吊牌未拆剪,商品未洗涤)");
				command.setPrint();
			
				//电话
				command.setSelectJustification(0);//居左
				command.setText("客服电话:(0571)86011123");
				command.setPrint();
				command.setText("联系地址:浙江省诸暨市暨阳街道健康路1-1号");
				command.setPrint();
			
				command.setPrintAndFeedRow(3);
				
				that.isReceiptSend = true;
				that.prepareSend(command.getData());
			
			
			},
			
			//准备发送，根据每次发送字节数来处理分包数量
			prepareSend(buff){
				console.log(buff);
				let that = this
				let time = that.oneTimeData
				let looptime = parseInt(buff.length / time);
				let lastData = parseInt(buff.length % time);
				console.log(looptime + "---" + lastData)
				this.looptime = looptime + 1;
				this.lastData = lastData;
				this.currentTime = 1;
				that.Send(buff)
			},
			//查询打印机状态
			queryStatus(){
				let command = esc.jpPrinter.Query();
				command.getRealtimeStatusTransmission(1);
			},
			//分包发送
			Send(buff){
				let that = this
				let {currentTime,looptime:loopTime,lastData,oneTimeData:onTimeData,printerNum:printNum,currentPrint}=that;
				let buf;
				let dataView;
				if (currentTime < loopTime) {
				  buf = new ArrayBuffer(onTimeData)
				  dataView = new DataView(buf)
				  for (var i = 0; i < onTimeData; ++i) {
					dataView.setUint8(i, buff[(currentTime - 1) * onTimeData + i])
				  }
				} else {
				  buf = new ArrayBuffer(lastData)
				  dataView = new DataView(buf)
				  for (var i = 0; i < lastData; ++i) {
					dataView.setUint8(i, buff[(currentTime - 1) * onTimeData + i])
				  }
				}
				console.log("第" + currentTime + "次发送数据大小为：" + buf.byteLength)
				let {
					BLEInformation
				} = that.Bluetooth;
				
				uni.writeBLECharacteristicValue({
				  deviceId: BLEInformation.deviceId,
				  serviceId: BLEInformation.writeServiceId,
				  characteristicId: BLEInformation.writeCharaterId,
				  value: buf,
				  success: function(res) {
					console.log(res)
				  },
				  fail: function(e) {
					console.log(e)
				  },
				  complete: function() {
					currentTime++
					if (currentTime <= loopTime) {
					  that.currentTime = currentTime;
					  that.Send(buff)
					} else {
					  uni.showToast({
						title: '已打印第' + currentPrint + '张',
					  })
					  if (currentPrint == printNum) {
						that.looptime = 0;
						that.lastData = 0;
						that.currentTime = 1;
						that.isReceiptSend = false;
						that.isLabelSend = false;
						that.currentPrint = 1;
					  } else {
						currentPrint++;
						that.currentPrint = currentPrint;
						that.currentTime = 1;
						that.Send(buff)
					  }
					}
				  }
				})
			},
			buffBindChange: function(res) { //更改打印字节数
			    let index = res.detail.value
			    let time = this.buffSize[index]
			    this.buffIndex = index;
			    this.oneTimeData = time;
			},
			printNumBindChange: function(res) { //更改打印份数
			    let index = res.detail.value
			    let num = this.printNum[index]
			    this.printNumIndex = index;
			    this.printerNum = num;
			},
		}
	}
</script>

<style lang="less">
	.input{  
		text-align: top; 
		 width: 90%;  
		 height: 150px;  
		 margin-left: 4%; 
		 margin-right: 4%;  
		 margin-top: 10px; 
		 margin-bottom: 12px; 
		border: 1px solid slategray;
	}
	.receiver_info_scroll_view{ 
		width: 90%; 
		height: 200px; 
		margin-left: 4%;
		margin-right: 4%; 
		margin-top: 10px;
		margin-bottom: 25px;
		border: 1px solid black;
	}
	.result{ 
		width: 90%;  
		height: 150px; 
		border: 1px solid black; 
		margin-left: 4%;
		margin-bottom: 4%; 
		margin-top: 5%;
	}
    button{ 
	  width: 90%; 
	  margin-left: 5%; 
	  margin-right: 5%;
	}
	.switch{ 
		float: right; 
		margin-right: 20px; 
		margin-bottom: 16px;
	}
    text{ 
	   color: #fff; 
	   display: block;
	}
	input{  
		color: gainsboro;  
		float: left;
	}
	.v_net_ssid{  
		width: 100%; 
		background:  #fff;
	}
	.v_net_passw{ 
		width: 100%; 
		background: antiquewhite;
	}
    .swiper{ 
	   width: 100%; 
	   height: 100%;
	}

</style>
