<template>
	<view>
		<view class="navbar-context">
			<uni-icons v-if="email" class="email" type="email" size="25" color="#000"></uni-icons>
			<view v-if="back">
				<uni-icons class="back" @click="backPage" type="back" size="25" color="#000"></uni-icons>
			</view>
			<view class="navbar-search" v-if="!isSearch" @click="openSearch">
				<view class="navbar-search_icon">
					<uni-icons type="search" size="16" color="#999"></uni-icons>
				</view>
				<view class="navbar-search_text">请输入关键词或视频名称</view>
			</view>
			<view class="navbar-search" v-else>
				<view class="navbar-search_icon">
					<uni-icons type="search" size="16" color="#999"></uni-icons>
				</view>
				<input class="navbar-search_text" @input="inputChange" @confirm="search" v-model.trim="searchObject.name" type="text" placeholder="请输入关键词或视频名称">
			</view>
			<uni-icons v-if="studyRecord" class="studyRecord" type="compose" size="25" color="#000"></uni-icons>
			<view v-if="isSearch" class="search">
				<view @click="search">搜索</view>
			</view>
		</view>
		<view style="height: 45px;"></view>
	</view>
</template>

<script>
	export default {
		name: "search",
		props: {
			email: {
				typeof: Boolean,
				default: false
			},
			studyRecord: {
				typeof: Boolean,
				default: false
			},
			back: {
				typeof: Boolean,
				default: false
			},
			isSearch: {
				typeof: Boolean,
				default: false
			},
			searchObject: {
				typeof: Object,
				default() {
					return {
						name: ""
					}
				},
			}
		},
		watch: {

		},
		data() {
			return {
			};
		},
		created() {
			
		},
		methods: {
			openSearch() {
				uni.navigateTo({
					url:"/pages/home-search/home-search"
				})
			},
			search(e) {
				this.$emit("search", this.searchVal)
			},
			backPage() {
				// uni.navigateBack()
				uni.switchTab({
					url: '/pages/tabbar/home/home'
				})
			},
			inputChange({detail}) {
				this.$emit("inputChange", detail.value)
			}
		}
	}
</script>

<style lang="scss">
	.navbar-context {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0 15px;
		height: 45px;
		box-sizing: border-box;
		background-color: $white-bg-color;
		z-index: 99;

		.email, .back {
			margin-right: 10px;
		}

		.studyRecord, .search {
			margin-left: 10px;
		}
		
		.search {
			min-width: 35px;
			color: #bcbcbc;
		}

		.navbar-search {
			display: flex;
			align-items: center;
			height: 30px;
			width: 100%;
			border-radius: 15px;
			padding: 0 10px;
			background-color: #eee;

			.navbar-search_icon {
				// width: 10px;
				// height: 10px;
				margin-right: 10px;
				// border: 1px red solid;
			}

			.navbar-search_text {
				width: 100%;
				font-size: 12px;
				color: #999;
			}
		}
	}
</style>