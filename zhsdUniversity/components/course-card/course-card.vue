<template>
	<view class="card-scroll_x">
		<view class="card-title_container">
			<text class="course-type_title">{{courseCard.title}}</text>
			<text v-if="type !== 'scroll'" class="card-title_all">全部 ></text>
		</view>
		<scroll-view v-if="type === 'scroll'" scroll-x show-scrollbar="false" class="uni-scroll-view">
			<courseItem :courseList="courseCard.courseList" type="scroll"></courseItem>
		</scroll-view>
		<view v-if="type !== 'scroll'" class="card-base">
			<courseItem :courseList="courseCard.courseList" :type="type"></courseItem>
		</view>
	</view>
</template>

<script>
	import courseItem from './course-item';
	export default {
		name: "course-card",
		props: {
			type: {
				typeof: String,
				default() {
					return "base";
				}
			},
			courseCard: {
				typeof: Object,
				default() {
					return {
						title: "最新发布",
						courseList: [
							{
								couId: "1",
								title: "[私域] 微信创业指南微信创业指南",
								// #ifdef H5
								imageSrc: "../../../static/jpg/2.png",
								// #endif
								// #ifndef H5
								imageSrc: "../../static/jpg/2.png",
								// #endif
								courseReader: "88.8万"
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
								courseReader: "88.8万"
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
								courseReader: "88.8万"
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
								courseReader: "88.8万"
							}
						]
					}
				}
			}
		},
		components: {
			courseItem
		},
		data() {
			return {
			};
		},
		created() {
		}
	}
</script>

<style lang="scss">
	
	@import url(@/common/css/hide-scroll.css);
	.card-scroll_x {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 10px;
		background-color: white;
		margin: 10px 0;

		.card-title_container {
			position: relative;
			.course-type_title {
				font-size: 20px;
				font-weight: bold;
			}
			.card-title_all {
				position: absolute;
				font-size: 14px;
				color: #999;
				right: 0px;
			}
		}
		
		.card-base {
			padding-top: 10px;
		}

	}
</style>