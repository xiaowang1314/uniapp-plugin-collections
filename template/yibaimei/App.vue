<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	}
</script>

<style>
	
	/* layout */
	.tc {
		text-align: center;
	}
	
	.tl {
		text-align: left;
	}
	
	.tr {
		text-align: right;
	}
	
	/* flex */
	.flex-box {
		display: flex;
		flex-wrap: wrap;
	}
	
	.flex-box>.item-2 {
		flex: 0 0 50%;
	}
	
	.flex-box>.item-3 {
		flex: 0 0 33.3333%;
	}
	
	.flex-box>.item-4 {
		flex: 0 0 25%;
	}
	
	.flex-box>.item-5 {
		flex: 0 0 20%;
	}
	
	.flex-box>.item-6 {
		flex: 0 0 16.6%;
	}
	
	.uni-row {
		flex-direction: row;
	}
	
	.uni-column {
		flex-direction: column;
	}
	
	/* 单行省略号
	
	  overflow: hidden;
	  text-overflow:ellipsis;
	  white-space: nowrap;
	
	 */
	
	/*
	  多行省略号
	
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp: 2;
	  overflow: hidden;
	
	 */
	
	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
	}

	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #FFFFFF;
	}

</style>
