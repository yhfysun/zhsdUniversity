<template>
	<view class="home">
		<!-- 自定义导航栏 -->
		<navbar>中和学院</navbar>
		<search class="search" :email="true" :studyRecord="true"></search>
		<tab :list="courseList" :tabIndex="tabIndex" @tab="tab"></tab>

		<!-- <list activeIndex=0></list> -->
		<!-- <view class="home-list">
			<list class="list-scroll" :activeIndex="activeIndex" :tab="courseList" @changeSwiper="change"></list>
		</view> -->

		<view class="home-list">
			<page class="list-scroll" :activeIndex="activeIndex" :tab="courseList" @changeSwiper="change">
			</page>
		</view>

	</view>
</template>


<script>
	// easyCom components/组件名/组件名.vue 直接用 组件名
	// import navBar from "@/components/navbar/navbar.vue"
	import {
		getTabCourseList
	} from '@/common/api/course.js'
	// #ifndef H5
	import {
		getCurrentInstance
	} from "vue";
	// #endif
	export default {
		data() {
			return {
				
				cardList: [{
						mode: "image",
						title: "title",
						cover: []
					}, {
						mode: "base",
						title: "title",
						cover: []
					},
					{
						mode: "column",
						title: "title",
						cover: [{}, {}, {}]
					},
					{
						mode: "image",
						title: "title",
						cover: []
					},
					{
						mode: "column",
						title: "title",
						cover: [1, 2, 3]
					},
					{
						mode: "base",
						title: "title",
						cover: []
					},
					{
						mode: "image",
						title: "title",
						cover: []
					},
					{
						mode: "image",
						title: "title",
						cover: []
					},
					{
						mode: "image",
						title: "title",
						cover: []
					}
				],
				courseList: [],
				tabIndex: 0,
				activeIndex: 0,
				item: {
					mode: "image",
					title: "title",
					cover: []
				}
			}
		},
		created() {},
		// 页面加载
		onLoad() {
			// #ifndef H5
			const {
				proxy
			} = getCurrentInstance()
			this.$api = proxy.$api
			// #endif

			// this.$api.get_label().then(res => {
			// 	if (res.code == 200) {
			// 		this.courseList = res.data
			// 	}
			// })
			getTabCourseList().then(res => {
				res.unshift({
					couId: 0,
					couName: "推荐"
				})
				this.courseList = res
			})

		},
		// 监听页面显示事件
		onShow() {

		},
		// tabBar 点击触发
		onTabItemTap(e) {

		},
		methods: {
			tab({
				data,
				index
			}) {
				this.activeIndex = index;
			},
			open() {
				uni.chooseImage({
					count: 1,
					success(res) {
						const tempFilePath = res.tempFilePaths[0];
						console.log("选择图片成功", res);
					},
					fail(err) {
						console.log("选择图片失败", err);
					}
				})
			},
			change(current) {
				this.tabIndex = current;
			},
			
		}
	}
</script>

<style lang="scss">
	@import url(@/common/css/hide-scroll.css);

	page {
		height: 100%;
		display: flex;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;

		.home-list {
			flex: 1;
			height: 100%;

			.list-scroll {
				box-sizing: border-box;
				display: flex;
				width: 100%;
				height: 100%;

				.list-header {
					box-sizing: border-box;
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: white;

					slide-img {
						width: 100%;
					}

					menu-item {
						width: 100%;
					}

					join-vip {
						width: 100%;
					}
				}

			}
		}
	}
</style>