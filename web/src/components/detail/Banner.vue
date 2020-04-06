<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg" alt />
			<div class="banner-info">
				<div class="title">{{sightName}}</div>

				<div class="number">
					<div class="iconfont icon">&#xe655;</div>
					{{this.galleryImgs.length}}
				</div>
			</div>
		</div>
		<common-fade>
			<common-gallary v-show="showGallary" @closeGallary="handleGallaryClose" :imgs="galleryImgs"></common-gallary>
		</common-fade>
	</div>
</template>

<script>
import CommonGallary from '../common/gallary/Gallary'
import CommonFade from '../common/fade/Fade'
export default {
	name: 'DetailBanner',
	props: {
		sightName: String,
		bannerImg: String,
		galleryImgs: Array
	},
	data() {
		return {
			showGallary: false,
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
		CommonGallary,
		CommonFade
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