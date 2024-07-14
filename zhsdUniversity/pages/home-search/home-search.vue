<template>
	<view class="home">
		<navbar>中和学院</navbar>
		<search class="search" back="true" :searchObject="searchObject" :isSearch="true" @inputChange="inputChange"
			@search="search"></search>
		<view class="home-list" v-if="!isSearch">
			<search-label :label="hotLabel" @clickItem="search"></search-label>
			<search-label :label="historyLabel" :clearShow="true" @clickItem="search"></search-label>
		</view>
		<view v-else class="card-base">
			<view v-if="courseList?.length > 0" class="searchCourseList">
				<courseItem :courseList="courseList" @clickCourseItem="clickCourseItem" type="line"></courseItem>
			</view>
			
			<view v-else class="no-data">
				<fr-icon-history-query theme="outline" :size="120" :fill="['#bcbcbc']" strokeLinecap="square"
					strokeLinejoin="miter" class="no-data_icon" />
				<text>没有查询到内容，换个词试试</text>
			</view>
			<view v-if="courseList?.length > 0" style="width: 100%; height: 10px; background-color: #f5f5f5;"></view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import courseItem from '@/components/course-card/course-item'
	export default {
		components: {
			courseItem
		},
		data() {
			return {
				hotLabel: {
					title: "热门搜索",
					list: ["人脉", "演讲", "说话技巧", "逻辑思维", "口才", "心态"]
				},
				historyLabel: {
					title: "历史记录",
					list: []
				},
				searchObject: {
					name: ""
				},
				isSearch: false,
				courseList: [{
						couId: "1",
						title: "[私域] 微信创业指南微信创业指南",
						detail: "详情详情详情详情详情详情详情详情详情详情详情详情详情详情",
						// #ifdef H5
						imageSrc: "../../static/jpg/2.png",
						// #endif
						// #ifndef H5
						imageSrc: "../static/jpg/2.png",
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
						imageSrc: "../../static/jpg/2.png",
						// #endif
						// #ifndef H5
						imageSrc: "../static/jpg/2.png",
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
			};
		},
		computed: {
			...mapState(['historyList'])
		},
		watch: {
			historyList(value) {
				this.historyLabel.list = value
			}
		},
		created() {
			// 历史记录赋值
			this.historyLabel.list = this.historyList
		},
		methods: {
			search(searchVal) {
				this.$set(this.searchObject, "name", searchVal)
				this.isSearch = true;
				if (searchVal.trim() != '') {
					this.$store.dispatch('set_history', searchVal)
				}
			},
			inputChange(value) {
				if (value == null || value.trim() == "") {
					this.isSearch = false
				}
			},
			clickCourseItem(course) {
				uni.navigateTo({
					url: "../../pages/home-detail/home-detail"
				})
				console.log(course.couId)
			}
		}
	}
</script>

<style lang="scss">
	page {
		padding: 0;
		margin: 0;
		height: 100%;
		display: flex;
		background-color: #f5f5f5;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		width: 100%;
		height: 100%;
		box-sizing: border-box;

		.home-list {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			background-color: #fff;
		}

		.card-base {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			background-color: #fff;
			
			.searchCourseList {
				padding: 0 15px;
				padding-bottom: 15px;
				box-sizing: border-box;
				width: 100%;
			}

			.no-data {
				box-sizing: border-box;
				width: 100%;
				text-align: center;
				
				.no-data_icon {
					margin: 50px auto 10px;
				}
			}
		}
	}
</style>