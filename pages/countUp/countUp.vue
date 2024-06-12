<template>
	<view>
		<countUp :num="num" color="#ff9e50" width='13' height='23' fontSize='23'></countUp>
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

<style>

</style>
