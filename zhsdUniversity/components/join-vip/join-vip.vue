<template>
	<view class="join-vip">
		<image mode="bottom" :src="imageSrc" />
		<text>加入VIP，免费听会员课 ></text>
	</view>
</template>

<script>
	export default {
		name: "join-vip",
		data() {
			return {
				
				imageSrc: 
				// #ifdef H5
				"../../../static/jpg/2.png",
				// #endif
				// #ifndef H5
				"../../static/jpg/2.png",
				// #endif
			};
		}
	}
</script>

<style lang="scss">
	.join-vip {
		display: flex;
		justify-content: center;
		position: relative;
		box-sizing: border-box;
		width: 90%;
		height: 60px;
		padding-bottom: 10px;
		margin: 0 auto;
		image {
			box-sizing: border-box;
			float: right;
			height: 100%;
			width: 100%;
			// background-color: goldenrod;
			border-radius: 10px;
			box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
		}

		text {
			position: absolute;
			// box-sizing: border-box;
			top: 15px;
			left: 15px;
			color: gold;
			font-weight: 550;
		}
	}
</style>