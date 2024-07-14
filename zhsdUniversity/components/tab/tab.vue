<template>
	<view class="tab">
		<scroll-view class="tab-scroll uni-scroll-view uni-scroll-view" scroll-x="true" show-scrollbar="false">
			<view class="tab-scroll_box">
				<view v-for="(item, index) in list" :key="item.couId" :class="{'active':activeIndex === index}"
					@click="clickTab(item, index)" class="tab-scroll_item">
					<text>{{item.couName}}</text>
					<text class="line" :class="{'active':activeIndex === index}"></text>
				</view>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		name: "tab",
		props: {
			list: {
				typeof: Array,
				default: []
			},
			tabIndex: {
				typeof: Number,
				default: 0
			}
		},
		data() {
			return {
				activeIndex: 0
			};
		},
		watch: {
			tabIndex(newValue, oldValue) {
				this.activeIndex = newValue;
			}
		},
		onLoad() {},
		mounted() {

		},
		methods: {
			clickTab(item, index) {
				this.activeIndex = index
				this.$emit('tab', {
					data: item,
					index
				})
			}
		}
	}
</script>

<style lang="scss">
	@import url(@/common/css/hide-scroll.css);
	.tab {
		width: 100%;
		// border-bottom: 1px #f5f5f5 solid;
		background-color: $white-bg-color;
		box-sizing: border-box;

		.tab-scroll_box {
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			height: 45px;
			box-sizing: border-box;
			width: 100%;

			.tab-scroll_item {
				display: flex;
				flex-direction: column;
				align-items: center;
				flex-shrink: 0;
				padding: 0 16px;
				margin: 0 auto;
				color: #aaa;
				font-size: 14px;
				transition: .1s;

				&.active {
					color: #000;
					font-size: 16px;
					// border-bottom: 2px red solid;
				}

				.line {
					margin-top: 10px;
					height: 3px;
					width: 15px;
					border-radius: 2px;

					&.active {
						background-color: red;
					}
				}
			}
		}
	}
</style>