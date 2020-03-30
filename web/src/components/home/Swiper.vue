<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide>
				<img
					class="swiper-img"
					src="https://img1.qunarzz.com/sight/p0/1907/cd/cdb4c750676d6d02a3.img.jpg_600x330_a42b6ad6.jpg"
					alt
				/>
			</swiper-slide>
			<swiper-slide>
				<img
					class="swiper-img"
					src="https://img1.qunarzz.com/sight/p0/1710/3b/3bd09821901efad5a3.img.jpg_600x330_754b1a0e.jpg"
					alt
				/>
			</swiper-slide>
			<swiper-slide>
				<img
					class="swiper-img"
					src="http://img1.qunarzz.com/sight/p0/1811/2f/2f9b29981c3c9f85a3.img.jpg_600x330_ee602103.jpg"
					alt
				/>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data() {
		return {
			swiperOption: {
				autoplay: 1000, // 自动轮播
				mousewheelControl: true, // 允许鼠标滚轮控制
				loop: true, // 循环轮播
				pagination: '.swiper-pagination'
			},
			// swiperList:[{

			// }]

		}
	}
}
</script>

<style lang="less" scoped>
@fontSize: 12px;
// 使用样式穿透 使该条样式不受scoped影响
// less和sass使用外层 /deep/ 第三方组件 {}
// stylus使用 外层 >>> 第三方组件

.wrapper /deep/ .swiper-pagination-bullet-active {
	background: white;
}

// 由于swiper源码中轮播图的位置使用绝对定位
// 那只需要使用bottom就可以控制其距离底部的位置
.wrapper /deep/ .swiper-pagination-bullets {
	bottom: 25rem / @fontSize;
}

.wrapper {
	width: 100%;
	height: 0;
	padding-bottom: 50%;
	overflow: hidden;

	.swiper-img {
		width: 100%;
		height: 200rem / @fontSize;
	}
}
</style>