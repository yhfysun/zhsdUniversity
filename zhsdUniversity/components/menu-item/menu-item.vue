<template>
	<view class="list-menu">
		
		<view class="list-menu_item" v-for="item in menuList" :key="item.name">
			<uni-icons size="40" color="red" :type="item.icon"></uni-icons>
			<text>{{item.name}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		name: "menu-item",
		props: {
			menuList: {
				typeof: Array,
				default() {
					return {}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.list-menu {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 100%;
		flex-basis: auto;

		.list-menu_item {
			display: flex;
			flex-direction: column;
			text-align: center;
			font-size: 12px;

			text {
				display: inline-block;
				height: 20px;
				width: 70px;
				margin: 10px auto;
			}
		}
	}
</style>