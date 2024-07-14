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
				<template v-slot:header>
					<view class="list-header">
						<slide-img :list="list" @slideClick="slideClick"></slide-img>
						<menu-item :menuList="menuList"></menu-item>
						<join-vip></join-vip>
					</view>
				</template>
				<view>
					<message></message>
					<course-card type="scroll"></course-card>
					<course-card type="base" :courseCard="courseCard.vipCourseCard"></course-card>
					<course-card type="base" :courseCard="courseCard.knowCourseCard"></course-card>
					<course-card type="line" :courseCard="courseCard.lineCourseCard"></course-card>
					<course-card type="big" :courseCard="courseCard.bigCourseCard"></course-card>
				</view>
			</page>
		</view>

	</view>
</template>


<script>
	// easyCom components/组件名/组件名.vue 直接用 组件名
	// import navBar from "@/components/navbar/navbar.vue"
	import {getTabCourseList} from '@/common/api/course.js'
	// #ifndef H5
	import { getCurrentInstance } from "vue";
	// #endif
	export default {
		data() {
			return {
				courseCard: {
					vipCourseCard: {
						title: "会员课",
						courseList: [{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								detail: "详情详情详情详情详情详情详情详情详情详情详情详情详情详情",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "88.8万",
								readerTo: "right",
								footContentList: [{
									content: "免费",
									contentType: "type",
									color: "green",
									borderColor: "green"
								}],
							},
							{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "88.8万",
								footContentList: [{
									content: "终身VIP",
									contentType: "type",
									color: "red",
									borderColor: "red",
									contentTo: "right"
								}]

							},
							{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "88.8万",
								footContentList: [{
									content: "终身VIP",
									contentType: "type",
									color: "red",
									borderColor: "red",
									contentTo: "right"
								}],
							},
							{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "88.8万",
								footContentList: [{
									content: "免费",
									contentType: "type",
									color: "green",
									borderColor: "green"
								}],
								readerTo: "right"
							}
						]
					},
					knowCourseCard: {
						title: "知识铺",
						courseList: [{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								detail: "详情详情详情详情详情详情详情详情详情详情详情详情详情详情",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "88.8万",
								footContentList: [{
										content: "799.0",
										contentType: "price",
										color: "red",
									},
									{
										content: "399.0",
										contentType: "vipPrice",
										color: "white",
										bgColor: "red"
									}
								],
								readerTo: "right"
							},
							{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "",
								footContentList: [{
										content: "799",
										contentType: "price",
										color: "red",
									},
									{
										content: "299",
										contentType: "vipPrice",
										color: "white",
										bgColor: "red",
										contentTo: "right"
									}
								],
							},
							{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "88.8万",
								footContentList: [{
									content: "免费",
									contentType: "type",
									color: "green",
									borderColor: "green"
								}],
								readerTo: "right"
							},
							{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "88.8万",
								footContentList: [{
									content: "免费",
									contentType: "type",
									color: "green",
									borderColor: "green"
								}],
								readerTo: "right"
							}
						]
					},
					lineCourseCard: {
						title: "演讲口才",
						courseList: [{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								detail: "详情详情详情详情详情详情详情详情详情详情详情详情详情详情",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "88.88万",
								footContentList: [{
									content: "799.0",
									contentType: "price",
									color: "red",
								}],
								readerTo: "right"
							},
							{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "88.8万",
								footContentList: [{
									content: "799",
									contentType: "price",
									color: "red",
								}],
								readerTo: "right"
							}
						]
					},
					bigCourseCard: {
						title: "品牌大课",
						courseList: [{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								detail: "详情详情详情详情详情详情详情详情详情详情详情详情详情详情",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "",
								footContentList: [{
										content: "09/06 - 09/07",
										contentType: "normal",
										color: "#bcbcbc",
									},
									{
										content: "5911",
										contentType: "price",
										color: "red",
										contentTo: "right"
									}
								],
								textTo: "right"
							},
							{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "",
								footContentList: [{
										content: "09/06 - 09/07",
										contentType: "normal",
										color: "#bcbcbc",
									},
									{
										content: "5911",
										contentType: "price",
										color: "red",
										contentTo: "right"
									}
								],
								textTo: "right"
							},
							{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "",
								footContentList: [{
										content: "09/06 - 09/07",
										contentType: "normal",
										color: "#bcbcbc",
									},
									{
										content: "5911",
										contentType: "price",
										color: "red",
										contentTo: "right"
									}
								],
							},
							{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								footContentList: [{
										content: "09/06 - 09/07",
										contentType: "normal",
										color: "#bcbcbc",
									},
									{
										content: "5911",
										contentType: "price",
										color: "red",
										contentTo: "right"
									}
								],
							}
						]
					}
				},
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
				menuList: [{
						name: "签到",
						icon: "calendar"
					},
					{
						name: "邀请",
						icon: "mail-open"
					},
					{
						name: "电子书",
						icon: "wallet"
					},
					{
						name: "圈子",
						icon: "circle-filled"
					}
				],
				list: [{
						// #ifdef H5
						src: "../../../static/jpg/1.jpg",
						// #endif
						// #ifndef H5
						src: "../../static/jpg/1.jpg"
						// #endif
					},
					{
						// #ifdef H5
						src: "../../../static/jpg/2.png",
						// #endif
						// #ifndef H5
						src: "../../static/jpg/2.png"
						// #endif
					},
					{
						// #ifdef H5
						src: "../../../static/jpg/1.jpg",
						// #endif
						// #ifndef H5
						src: "../../static/jpg/1.jpg"
						// #endif
					},
					{
						// #ifdef H5
						src: "../../../static/jpg/2.png",
						// #endif
						// #ifndef H5
						src: "../../static/jpg/2.png"
						// #endif
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
			tab({ data, index }) {
				// console.log("tab", data)
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
			slideClick(slideIndex) {
				console.log("slideIndex", slideIndex)
			}
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