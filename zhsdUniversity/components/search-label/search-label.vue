<template>
	<view class="label-box" v-if="label?.list.length > 0">
		<view class="label-header">
			<text class="label-title">{{label.title}}</text>
			<fr-icon-delete class="label-clear" v-if="clearShow" @click="clearHistory" theme="outline" :size="36" :fill="['red']"
				strokeLinecap="square" />
		</view>
		<view class="label-content">
			<view @click="clickItem(item)" class="label-content_item" v-for="item in label?.list" :key="item">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "search-label",
		props: {
			label: {
				typeof: Object,
				default() {
					return {}
				}
			},
			clearShow: {
				typeof: Boolean,
				default: false
			}
		},
		data() {
			return {

			};
		},
		methods: {
			clearHistory() {
				this.$store.dispatch('clear_history')
				uni.showToast({
					title: "清空完成"
				})
			},
			clickItem(value) {
				this.$emit("clickItem", value)
			}
		}
	}
</script>

<style lang="scss">
	.label-box {
		background-color: #fff;
		// margin-bottom: 15px;

		.label-header {
			display: flex;
			justify-content: space-between;
			font-size: 16px;
			padding: 10px 15px;
		}

		.label-content {
			display: flex;
			flex-wrap: wrap;
			padding: 15px;
			padding-top: 0;

			.label-content_item {
				padding: 5px 10px;
				margin-top: 12px;
				margin-right: 10px;
				border-radius: 6px;
				border: 1px #999 solid;
				font-size: 14px;
				color: #999;
			}
		}
	}
</style>