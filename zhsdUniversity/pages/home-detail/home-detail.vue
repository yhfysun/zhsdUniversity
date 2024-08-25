<template>
	<view class="detail">
		<!-- 自定义导航栏 -->
		<navbar>中和学院</navbar>
		<view class="detail-container">
			<uni-icons class="back" @click="backPage" type="back" size="25" color="#bcbcbc"></uni-icons>
			<uni-icons class="home" @click="homePage" type="home" size="25" color="#bcbcbc"></uni-icons>
			<text class="detail-title" style="height: 100%;">老板口才学：创业者必需掌握的说话的技巧</text>
		</view>
		<!-- #ifdef H5 -->
		<view class="course-video">
			<!-- <video src="http://127.0.0.1:8000/app/media/video/1.mp4"></video> -->
			<view id="mui-player">
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="course-video">
			<video id="myVideo" :src="wx.src" title="" style="height: 225px;" codec="ffmpeg"
				controlsList="nodownload"></video>
		</view>
		<!-- #endif -->

		<view class="info-container">
			<text class="detail-title">智慧父母养成课：智慧父母养成课：智慧父母养成课：智慧父母养成课：</text>
			<text>描述信息智慧父母养成课：智慧父母养成课：智慧父母养成课：智慧父母养成课：</text>
			<view class="teacher-info">
				<text>讲师：皓月老师</text>
				<reader courseReader="88.8"></reader>
			</view>
		</view>
		<view style="width: 100%; height: 10px; background-color: #f5f5f5;"></view>
		<view class="detail-tab">
			<tab :list="courseList" :tabIndex="tabIndex" @tab="tab"></tab>
		</view>
		<swiper style="height: 100%; margin-bottom: 0;" :current="activeIndex" @change="change">
			<swiper-item v-for="(i, index) in courseList" :key="i.couId">
				<scroll-view scroll-y="true" :style="'height: ' + scrollH + 'px'">
					<view class="detail-detail" v-if="i.couName == '详情'">
						<view style="width: 100%;" v-for="src in i.imageSrc" :key="src">
							<img style="width: 100%;" src="../../static/jpg/1.jpg" alt="src" />
						</view>
					</view>
					<view class="detail-catalogue" v-if="i.couName == '目录'">
						<view class="detail-catalogue_box" v-for="chapter in i.chapters" :key="chapter">
							<view class="detail-chapter" @click="openChapter(chapter)">
								<view class="detail-chapter_box">
									<view class="detail-chapter_title"
										:class="{'activeChapter': chapterTitle == chapter}">
										0{{chapter}}引导课：真情留不住框架得人心
									</view>
									<view class="detail-chapter_type right">
										付费
									</view>
								</view>
								<view class="detail-chapter_box">
									<view class="detail-chapter_time">时长：10:10</view>
									<reader :courseReader="'10万'" class="right"></reader>
								</view>
							</view>
						</view>
					</view>
					<view v-if="i.couName == '评价'">评价</view>
				</scroll-view>
			</swiper-item>
		</swiper>

		<view class="detail-foot" style="color: #bcbcbc;">
			<!-- <view class="input">留下你的感想!</view> -->
			<view class="icon-container" @click="iconClick(like)">
				<fr-icon-like :theme="like.theme" :size="35" :fill="[like.fill]" strokeLinecap="square" />
				<text>喜欢</text>
			</view>
			<view class="icon-container" @click="iconClick(star)">
				<fr-icon-star :theme="star.theme" :size="35" :fill="[star.fill]" strokeLinecap="square" />
				<text>收藏</text>
			</view>
			<view class="icon-container">
				<fr-icon-share theme="outline" :size="35" :fill="['#bcbcbc']" strokeLinecap="square" />
				<text>分享</text>
			</view>
			<!-- <fr-icon-like theme="filled" :size="24" :fill="['#000000']" /> -->
		</view>

	</view>
</template>

<script>
	import '../../hybrid/mui-player.min.css';
	import '../../hybrid/mui-player.min.js';
	import '../../hybrid/hls.js'
	export default {
		data() {
			return {
				mp: {},
				like: {
					theme: "outline",
					fill: "#bcbcbc"
				},
				star: {
					theme: "outline",
					fill: "#bcbcbc"
				},
				detail: {
					src: "../../static/video/nuanshan/video.m3u8",
					src1: "",
					poster: "../../static/jpg/1.jpg"
				},
				wx: {
					src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
				},
				scrollH: 424,
				courseList: [{
						couName: "详情",
						couId: 1,
						imageSrc: [1, 2, 3]
					},
					{
						couName: "目录",
						couId: 2,
						chapters: [1, 2, 3, 4, 5]
					},
					// {
					// 	couName: "评价",
					// 	couId: 3
					// },
				],
				tabIndex: 0,
				activeIndex: 0,
				chapterTitle: 1
			};
		},
		onLoad(options) {
			console.log('页面加载时接收到的参数:', options)
			let res = uni.getSystemInfoSync()
			this.scrollH = res.windowHeight - 510
		},
		onShow() {
			// #ifdef H5
			this.$nextTick(() => {
				// 初始化 MuiPlayer 插件，MuiPlayer 方法传递一个对象，该对象包括所有插件的配置
				this.mp = new MuiPlayer({
					container: document.getElementById("mui-player"),
					src: '/api/app/media/stream/video.m3u8',
					poster: this.detail.poster,
					parse: {
						type: 'hls',
						loader: Hls,
						config: { // hls config to：https://github.com/video-dev/hls.js/blob/HEAD/docs/API.md#fine-tuning
							debug: false,
						},
					},
					pageHead: false,
					themeColor: '#55c612', // 自定义主题颜色
					preload: true, //预加载

				});
				// 监听视频播放完成事件
				this.mp.video().addEventListener('ended', () => {
					console.log('视频播放已完成');
					this.mp.showToast({
						message: '后续视频请开通VIP后免费观看',
						duration: 2000,
						style: {
							width: '50%',
							padding: '10px'
						}
					})
				})
			});
			// #endif

		},
		onUnload() {
			// #ifdef H5
			this.mp.destroy()
			// #endif
		},
		methods: {
			homePage() {
				uni.switchTab({
					url: "/pages/tabbar/home/home"
				})
			},
			backPage() {
				uni.navigateBack()
				// uni.switchTab({
				// 	url: '/pages/tabbar/home/home'
				// })
			},
			tab({
				data,
				index
			}) {
				// console.log("tab", data)
				this.activeIndex = index;
			},
			change(e) {
				const {
					current
				} = e.detail;
				// if (!this.listCacheData[current] || this.listCacheData[current].length === 0) {
				//   this.getList(current);
				// }
				this.tabIndex = current;
			},
			iconClick(icon) {
				icon.theme = icon.theme == "outline" ? "filled" : "outline";
				icon.fill = icon.fill == "#bcbcbc" ? "red" : "#bcbcbc";
			},
			openChapter(chapter) {
				this.chapterTitle = chapter
				console.log(chapter)
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
	}

	.detail {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background-color: #fff;

		.detail-container {
			box-sizing: border-box;
			width: 100%;
			display: flex;
			padding: 10px;

			.back {
				margin-right: 15px;
			}

			.detail-title {
				box-sizing: border-box;
				width: 50%;
				margin: 0 auto;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				text-align: left;
				/* 文本对齐方式 */
				// display: -webkit-box;
				// /*设置为弹性盒子*/
				// -webkit-line-clamp: 1;
				// /*最多显示1行*/
				// -webkit-box-orient: vertical;
			}

		}

		.info-container {
			box-sizing: border-box;
			width: 100%;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			padding: 10px 15px;
			font-size: 12px;
			color: #bcbcbc;

			.detail-title {
				font-size: 16px;
				color: black;
				margin-bottom: 10px;
			}

			text {
				width: 100%;
				overflow: hidden;
				display: -webkit-box;
				/*设置为弹性盒子*/
				-webkit-line-clamp: 1;
				/*最多显示1行*/
				-webkit-box-orient: vertical;
			}

			.teacher-info {
				display: flex;
				margin-top: 10px;
				align-self: flex-start;

				text {
					margin-right: 10px;
				}
			}
		}

		.course-video {
			box-sizing: border-box;
			width: 100%;

			video {
				width: 100%;
			}
		}

		.detail-detail {
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			width: 95%;
			margin: 0 auto;
		}

		.detail-catalogue {
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			width: 100%;

			.detail-catalogue_box {
				width: 100%;

				.detail-chapter {
					display: flex;
					flex-direction: column;
					width: 100%;

					.detail-chapter_box {
						display: flex;
						flex-direction: row;
						width: 94%;
						margin: 10px auto;
						box-sizing: border-box;
						justify-content: space-between;

						.activeChapter {
							color: #ff6d18;
						}

						.detail-chapter_type {
							font-size: 13px;
							box-sizing: border-box;
							border: 1px solid gold;
							border-radius: 10px;
							color: gold;
							padding: 2px 10px;
						}

						.detail-chapter_time {
							font-size: 12px;
							color: #bcbcbc;
						}
					}
				}
			}
		}

		.detail-foot {
			box-sizing: border-box;
			display: flex;
			height: 40px;
			width: 100%;
			align-items: center;
			padding-bottom: 5px;

			.input {
				flex-shrink: 0;
				box-sizing: border-box;
				margin: 0 10px;
				border-radius: 20px;
				background-color: #f4f4f4;
				width: 45%;
				height: 35px;
				padding: 7px 10px;
			}

			.icon-container {
				box-sizing: border-box;
				height: 35px;
				width: 45%;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}
	}
</style>