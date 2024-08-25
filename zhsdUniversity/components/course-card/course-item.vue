<template>
	<view class="card-course_list"
		:class="{'card-course_list_base':type === 'base',
	'card-course_list_scroll':type === 'scroll','card-course_list_big':type === 'big','card-course_list_line':type === 'line'}">
		<view class="card-scroll" v-for="course in courseList" :key="course.couId">
			<view class="card-content" @click="clickCourseItem(course)">
				<view class="card-img">
					<image src="http://127.0.0.1:8000/app/media/image/1.jpg" mode="aspectFill"></image>
				</view>
				<view class="card-course">
					<view class="card-course_title">
						<text>{{course.title}}</text>
						<!-- <likes :item="item"></likes> -->
					</view>
					<view class="card-course_detail">
						<text class="text">
							{{course.detail}}
						</text>
					</view>
					<view class="card-course_black"></view>
					<view class="course-foot">
						<view v-for="footContent in course.footContentList" :key="footContent.id">
							<course-foot-content :footContent="footContent"></course-foot-content>
						</view>
						<reader :courseReader="course.courseReader"
							:class="{'course-foot_reader_right': course?.readerTo == 'right'}"></reader>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "course-item",
		props: {
			type: {
				typeof: String,
				default () {
					return "base"
				}
			},
			courseList: {
				typeof: Array,
				default () {
					return {
						title: "最新发布",
						courseList: [{
							couId: "1",
							title: "[私域] 微信创业指南微信创业指南",
							imageSrc: "../../../static/jpg/2.png",
							courseReader: "88.8万"
						}]
					}
				}
			}
		},
		data() {
			return {

			};
		},
		created() {
			
		},
		methods: {
			clickCourseItem(course) {
				this.$emit("clickCourseItem", course)
			}
		}
		
	}
</script>

<style lang="scss">
	.card-course_list {
		display: flex;
		flex: 1;
		justify-content: space-between;
		flex-wrap: wrap;
		box-sizing: border-box;
		width: 100%;

		.course-foot {
			position: relative;
			display: flex;
			align-items: center;

			.course-foot_reader_right {
				position: absolute;
				right: 0px;
				top: 0px;
			}
		}

		&.card-course_list_line {
			.card-scroll {
				box-sizing: border-box;
				width: 100%;

				.card-content {
					// position: relative;
					display: flex;
					flex-direction: row;

					.card-img {
						width: 40%;
						flex-shrink: 0;

						image {
							height: 80px;
							border-radius: 5px;
						}
					}

					.card-course {
						width: 100%;
						height: 80px;
						box-sizing: border-box;
						// display: flex;
						// flex-direction: column;
						// flex-wrap: nowrap;
						margin-left: 5px;

						.card-course_title {
							flex-shrink: 0;
							font-size: 14px;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							/*设置为弹性盒子*/
							-webkit-line-clamp: 2;
							/*最多显示2行*/
							-webkit-box-orient: vertical;
						}

						.card-course_black {
							box-sizing: border-box;
							width: 100%;
							height: 100%;
						}

						.course-foot {
							padding-left: 5px;
						}
					}
				}
			}
		}

		&.card-course_list_big {
			.card-scroll {
				box-sizing: border-box;
				border-radius: 10px;
				margin: 10px auto;
				width: 100%;
				box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);

				image {
					height: 150px;
					border-radius: 10px 10px 0 0;
				}

				.card-course {
					margin-left: 10px;
					padding-bottom: 10px;
				}

				.course-foot {
					font-weight: bold;
					margin-top: 10px;
					width: 95%;

					.course-type {
						.course-type_text {
							text {
								font-size: 12px;
							}
						}
					}
				}
			}

		}

		&.card-course_list_base {

			justify-content: center;

			.card-scroll {
				margin: 10px auto;
				width: 46%;

				image {
					height: 90px;
					border-radius: 8px;
				}
			}

			.course-foot {
				display: flex;
				align-items: center;
			}

		}

		&.card-course_list_scroll {
			flex-wrap: nowrap;

			.card-scroll {
				box-sizing: border-box;
				width: 40%;

				image {
					height: 80px;
					border-radius: 6px;
				}
			}
		}

		.card-scroll {
			box-sizing: border-box;
			width: 100%;
			display: flex;
			flex-shrink: 0;
			margin-top: 20px;
			margin-right: 10px;

			.card-content {
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				width: 100%;

				image {
					width: 100%;
				}

				.card-course {
					box-sizing: border-box;
					width: 100%;
					display: flex;
					flex-direction: column;

					.card-course_title {
						display: flex;
						margin-top: 5px;
						font-size: 14px;
						align-items: center;
						justify-content: center;
						padding: 0 5px;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						/*设置为弹性盒子*/
						-webkit-line-clamp: 1;
						/*最多显示2行*/
						-webkit-box-orient: vertical;
					}

					.card-course_detail {
						box-sizing: border-box;
						margin-top: 3px;
						font-size: 12px;
						color: #bcbcbc;
						flex-shrink: 0;
						padding: 0 5px;
						overflow: hidden;
						display: -webkit-box;
						/*设置为弹性盒子*/
						-webkit-line-clamp: 1;
						/*最多显示1行*/
						-webkit-box-orient: vertical;
					}

					.course-foot {
						margin-top: 5px;
					}
				}
			}
		}

	}
</style>