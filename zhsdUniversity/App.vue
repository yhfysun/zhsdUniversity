<script>
	export default {
		onLaunch: function() {
			console.log("App Launch")
		},
		onShow: function() {
			console.log("App Show")
		},
		onHide: function() {
			console.log("App Hide")
		}
	}
</script>

<style lang="scss">
	@import "uni.scss";
	
	/*每个页面公共css */
	/* @font-face {
		font-family: "GoldFont";
		src: url("@/static/font/GoldFont.ttf") format("truetype");
	} */
	
	/* 全局字体设置 */
	/* body, page {
	  font-family: "GoldFont", sans-serif;;
	} */
	
	page {
		background-color: ghostwhite;
	}
</style>
