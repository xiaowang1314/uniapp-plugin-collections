# uni-app中设置radio和switch的大小

##### 由于radio和switch组件不支持width和height属性设置，所以使用transform属性可解决大小问题

```

<radio style="transform: scale(0.7)" />

<switch style="transform: scale(0.7,0.7)" />

```