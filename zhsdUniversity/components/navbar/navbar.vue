<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight + 'px'}"></view>
			<!-- 导航栏 -->
			<view :style="{lineHeight: titleHeight + 'px'}">
				<slot>{{title}}</slot>
			</view>
		</view>
		<view :style="{height: titleHeight + statusBarHeight + 'px'}"></view>
	</view>
</template>

<script>
	export default {
		name: "navbar",
		props: {
			title: {
				typeof: "string",
				default: "中和学院"
			}
		},
		data() {
			return {
				statusBarHeight: 20,
				titleHeight: 45,
			};
		},
		created() {
			// 获取手机信息
			const info = uni.getSystemInfoSync();
			// 给状态栏高度赋值
			this.statusBarHeight = info.statusBarHeight;
			// 获取胶囊位置
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// (胶囊底部 - 状态栏) + (胶囊顶部 - 状态栏)
			this.titleHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info
				.statusBarHeight);
			// #endif
		}
	}
</script>

<style lang="scss">

	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			text-align: center;
			z-index: 99;
			width: 100%;
			background-color: $white-bg-color;
		}
	}
</style>