<template>
	<view class="scroll">
		<scroll-view scroll-y>
			<view class="list-scroll">
				<slot></slot>
			</view>
		</scroll-view>
	</view>

</template>

<script>
	export default {
		name: "list-scroll",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.scroll {
		display: flex;
		flex: 1;
		overflow: hidden;
		box-sizing: border-box;

		.list-scroll {
			height: 100%;
			display: flex;
			flex-direction: column;
		}
	}
</style>