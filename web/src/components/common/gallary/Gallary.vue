<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(img,index) of imgs" :key="index">
					<img class="gallary-img" :src="img" />
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
export default {
	name: "CommonGallary",
	props: {
		imgs: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {
			swiperOption: {
				mousewheelControl: true, // 允许鼠标滚轮控制
				loop: true, // 循环轮播
				pagination: '.swiper-pagination',
				paginationType: 'fraction',
				observeParents: true,
				observer: true
			}
		}

	},
	methods: {
		handleGallaryClick() {
			this.$emit('closeGallary');
		}
	}
}
</script>
<style lang="less" scoped>
@import '../../../styles/common.less';
.container /deep/ .swiper-container {
	overflow: inherit;
}
.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 99;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: #000;
	.wrapper {
		width: 100%;
		height: 0;
		// overflow: hidden;
		padding-bottom: 100%;
		.gallary-img {
			width: 100%;
			margin-top: 15%;
		}
		.swiper-pagination {
			color: #fff;
			bottom: -30rem / @fontSize;
		}
	}
}
</style>