<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img
				class="banner-img"
				src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_600x330_b40971b4.jpg"
				alt
			/>
			<div class="banner-info">
				<div class="title">八达岭长城(AAAAA景区)</div>

				<div class="number">
					<div class="iconfont icon">&#xe655;</div>56
				</div>
			</div>
		</div>
		<common-gallary v-show="showGallary" @closeGallary="handleGallaryClose" :imgs="imgs"></common-gallary>
	</div>
</template>

<script>
import CommonGallary from '../common/gallary/Gallary'
export default {
	name: 'DetailBanner',
	data() {
		return {
			showGallary: false,
			imgs: ['http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_r_800x800_ae28174d.jpg',
				'http://img1.qunarzz.com/sight/p0/1908/bd/bd70df50c681584a3.img.jpg_r_800x800_01ca9396.jpg']
		}
	},
	methods: {
		handleBannerClick() {
			this.showGallary = true
		},
		handleGallaryClose() {
			this.showGallary = false;
		}
	},
	components: {
		CommonGallary
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.banner {
	overflow: hidden;
	height: 0;
	padding-bottom: 55%;
	position: relative;

	.banner-img {
		width: 100%;
	}
	.banner-info {
		color: #fff;
		display: flex;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		line-height: 30rem / @fontSize;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.8)
		);
		.title {
			flex: 1;
			font-size: 15rem / @fontSize;
			padding: 0 12rem / @fontSize;
		}
		.number {
			display: flex;
			flex-direction: row;
			padding: 0 15rem / @fontSize;
			line-height: 15rem / @fontSize;
			height: 15rem / @fontSize;
			border-radius: 5rem / @fontSize;
			background-color: rgba(0, 0, 0, 0.8);
			font-size: 10rem / @fontSize;
			margin-top: 10rem / @fontSize;
			.icon {
				font-size: 10rem / @fontSize;
				margin-right: 3rem / @fontSize;
			}
		}
	}
}
</style>