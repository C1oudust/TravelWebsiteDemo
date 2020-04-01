<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
			<swiper-slide v-for="item of list" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" alt />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	props: {
		list: Array
	},
	data() {
		return {
			swiperOption: {
				autoplay: 3000, // 自动轮播
				mousewheelControl: true, // 允许鼠标滚轮控制
				loop: true, // 循环轮播
				pagination: '.swiper-pagination'
			}
		}

	},
	computed: {
		showSwiper() {
			return this.list.length
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';

// 使用样式穿透 使该条样式不受scoped影响
// less和sass使用外层 /deep/ 第三方组件 {}
// stylus使用 外层 >>> 第三方组件
.wrapper /deep/ .swiper-pagination-bullet-active {
	background: white;
}

// 由于swiper源码中轮播图的位置使用绝对定位
// 那只需要使用bottom就可以控制其距离底部的位置
.wrapper /deep/ .swiper-pagination-bullets {
	bottom: 22rem / @fontSize;
}

.wrapper {
	width: 100%;
	height: 0;
	padding-bottom: 40%;
	overflow: hidden;

	.swiper-img {
		width: 100%;
		height: 140rem / @fontSize;
	}
}
</style>