<template>
	<view class="message">
		<view>
			<fr-icon-speaker-one theme="multi-color" :size="40" :fill="['#000000','#f07373','#FFFFFF','#f07373']" />
		</view>
		<view class="message-context">
			友话好说线下课安排表
		</view>
		<view class="message-more">查看更多 ></view>
	</view>
</template>

<script>
	export default {
		name: "message",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.message {
		position: relative;
		align-items: center;
		display: flex;
		width: 85%;
		height: 20px;
		margin: 10px auto;
		background-color: white;
		border-radius: 13px;
		padding: 3px 10px;
		font-size: 12px;

		.message-context {
			margin-left: 10px;
		}

		.message-more {
			position: absolute;
			right: 10px;
			color: #999;
		}
	}
</style>