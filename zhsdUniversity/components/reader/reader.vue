<template>
	<view class="card-course_desc" v-if="courseReader !== ''">
		<fr-icon-play theme="outline" :size="20" :fill="['#bcbcbc']" />
		<view class="card-course_reader">{{courseReader}}</view>
	</view>
</template>

<script>
	export default {
		name: "reader",
		props: {
			courseReader: {
				typeof: String,
				default() {
					return ''
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.card-course_desc {
		display: flex;
		align-items: center;
		color: #bcbcbc;

		.card-course_reader {
			font-size: 8px;
			margin-left: 2px;
		}
	}
</style>