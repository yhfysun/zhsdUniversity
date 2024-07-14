<template>
	<view class="course-type" :class="{'course-foot_right': footContent?.contentTo == 'right'}" >
		<view class="course-type_text"
			:class="{'course-type_type': footContent?.contentType == 'type', 'course-type_vipPrice': footContent?.contentType == 'vipPrice'}" 
			:style="{'color': footContent?.color, 'border': '1px solid ' + footContent.borderColor, 'backgroundColor': footContent.bgColor}">
			<text v-if="footContent?.contentType == 'vipPrice'">会员价￥{{footContent.content}}</text>
			<text v-if="footContent?.contentType == 'price'">￥{{footContent.content}}</text>
			<text v-if="footContent?.contentType != 'price' && footContent.contentType != 'vipPrice'">{{footContent.content}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "course-foot-content",
		props: {
			footContent: {
				typeof: Object,
				default() {
					return {
						
					}
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
	.course-type {
		font-size: 8px;
		flex-shrink: 0;
		.course-type_type {
			font-size: 10px;
			border-radius: 100px;
			line-height: 1.2;
			padding: 1px 4px;
		}

		.course-type_vipPrice {
			padding-right: 3px;
			padding-left: 2px;
			margin-left: 2px;
			border-radius: 50px;
			font-weight: bold;
			line-height: 1.5;
		}
		
		&.course-foot_right {
			position: absolute;
			right: 0;
			top: 0;
		}
	}
</style>