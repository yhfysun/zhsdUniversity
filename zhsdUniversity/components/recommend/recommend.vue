<template>
	<view class="home-list">
		<view class="list-header">
			<slide-img :list="list" @slideClick="slideClick"></slide-img>
			<menu-item :menuList="menuList"></menu-item>
			<join-vip></join-vip>
		</view>
		<view>
			<message></message>
			<course-card type="scroll"></course-card>
			<course-card type="base" :courseCard="courseCard.vipCourseCard"></course-card>
			<course-card type="base" :courseCard="courseCard.knowCourseCard"></course-card>
			<course-card type="line" :courseCard="courseCard.lineCourseCard"></course-card>
			<course-card type="big" :courseCard="courseCard.bigCourseCard"></course-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			}
		},
		methods: {
			slideClick(slideIndex) {
				console.log("slideIndex", slideIndex)
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}

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
</style>