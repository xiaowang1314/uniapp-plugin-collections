<!-- 

Loading图
 
 -->
<template>
	<view class="loading-box">
		<!-- loading1 -->
		<view class="lds-circle"><view></view></view>
		<!-- loading2 -->
		<view class="lds-dual-ring"></view>
		<!-- loading3 -->
		<view class="lds-facebook">
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading4 -->
		<view class="lds-heart"><view></view></view>
		<!-- loading5 -->
		<view class="lds-ring">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading6 -->
		<view class="lds-roller">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading7 -->
		<view class="lds-default">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading8 -->
		<view class="lds-ellipsis">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading9 -->
		<view class="lds-grid">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading10 -->
		<view class="lds-hourglass"></view>
		<!-- loading11 -->
		<view class="lds-ripple">
			<view></view>
			<view></view>
		</view>
		<!-- loading12 -->
		<view class="lds-spinner">
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
			<view></view>
		</view>
		<!-- loading13 -->
		<view class="spinner13"></view>
		<!-- loadign14 -->
		<view class="spinner14">
			<view class="double-bounce1"></view>
			<view class="double-bounce2"></view>
		</view>
		<!-- loading15 -->
		<view class="spinner15">
			<view class="rect1"></view>
			<view class="rect2"></view>
			<view class="rect3"></view>
			<view class="rect4"></view>
			<view class="rect5"></view>
		</view>
		<!-- loading16 -->
		<view class="spinner16">
			<view class="cube1"></view>
			<view class="cube2"></view>
		</view>
		<!-- loading17 -->
		<view class="spinner17"></view>
		<!-- loading18 -->
		<view class="spinner18">
			<view class="dot1"></view>
			<view class="dot2"></view>
		</view>
		<!-- loading19 -->
		<view class="spinner19">
			<view class="bounce1"></view>
			<view class="bounce2"></view>
			<view class="bounce3"></view>
		</view>
		<!-- loading20 -->
		<view class="sk-circle">
			<view class="sk-circle1 sk-child"></view>
			<view class="sk-circle2 sk-child"></view>
			<view class="sk-circle3 sk-child"></view>
			<view class="sk-circle4 sk-child"></view>
			<view class="sk-circle5 sk-child"></view>
			<view class="sk-circle6 sk-child"></view>
			<view class="sk-circle7 sk-child"></view>
			<view class="sk-circle8 sk-child"></view>
			<view class="sk-circle9 sk-child"></view>
			<view class="sk-circle10 sk-child"></view>
			<view class="sk-circle11 sk-child"></view>
			<view class="sk-circle12 sk-child"></view>
		</view>
		<!-- loading21 -->
		<view class="sk-cube-grid">
			<view class="sk-cube sk-cube1"></view>
			<view class="sk-cube sk-cube2"></view>
			<view class="sk-cube sk-cube3"></view>
			<view class="sk-cube sk-cube4"></view>
			<view class="sk-cube sk-cube5"></view>
			<view class="sk-cube sk-cube6"></view>
			<view class="sk-cube sk-cube7"></view>
			<view class="sk-cube sk-cube8"></view>
			<view class="sk-cube sk-cube9"></view>
		</view>
		<!-- loading22 -->
		<view class="sk-folding-cube">
			<view class="sk-cube1 sk-cube"></view>
			<view class="sk-cube2 sk-cube"></view>
			<view class="sk-cube4 sk-cube"></view>
			<view class="sk-cube3 sk-cube"></view>
		</view>
		<!-- loading23 -->
		<view class="loader-wrapper">
			<view class="loader">
				<view class="roller"></view>
				<view class="roller"></view>
			</view>

			<view id="loader2" class="loader">
				<view class="roller"></view>
				<view class="roller"></view>
			</view>

			<view id="loader3" class="loader">
				<view class="roller"></view>
				<view class="roller"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {},
	created() {}
};
</script>

<style lang="scss">
.loading-box > view {
	margin: 15upx 20upx;
}
@import './loading1';
@import './loading2';
@import './loading3';
@import './loading4';
@import './loading5';
@import './loading6';
@import './loading7';
@import './loading8';
@import './loading9';
@import './loading10';
@import './loading11';
@import './loading12';
@import './loading13';
@import './loading14';
@import './loading15';
@import './loading16';
@import './loading17';
@import './loading18';
@import './loading19';
@import './loading20';
@import './loading21';
@import './loading22';
@import './loading23.scss';
</style>
