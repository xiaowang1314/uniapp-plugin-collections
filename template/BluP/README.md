# Android 和 IOS 佳博 蓝牙小票 、标签 打印模板
uni-app 跨平台app框架 佳博打印机蓝牙连接打印机模板 

------深知现在很难找到开源的蓝牙打印插件，故开源给大家参考，有能力的同学可以自己深度封装-----

1. 手机蓝牙向打印机发送成功:  uni.writeBLECharacteristicValue：ok , 但是就是不打印,  这时候大部分原因, 应该是发送的数据不符合 esc（账单模式）或 tsc（标签模式）数据格式 ，请检查自己的数据格式 还有编码格式应为 gb18030

2. 蓝牙模块有许多服务，每个服务下面有许多特征值，不知道哪个可以用，按我的理解以及踩坑经验，特征值里面write=true （properties.write == true） 代表可以给蓝牙设备写数据。 如果有多个write=true蓝牙特征值，可以任取其中一个都能发送打印数据

3. 苹果手机ios可以打印， 安卓手机Android不能打印，是因为安卓 Android 底层貌似做了限制只能接受20个字节，所以数据包要拆分成20字节一组，多组多次发送 demo里面有拆分操作可以自己查看

-----demo界面简单勿喷-_-

![Image text](https://github.com/qihang666/BluetoothPrinter/blob/master/demo.jpg)


