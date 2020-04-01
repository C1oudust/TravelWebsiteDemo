<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img :src="item.imgUrl" alt />
					</div>
					<p class="icon-title">{{item.title}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	props: {
		list: Array
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination'
			}
		}
	},
	computed: {
		pages() {
			const pages = [];
			this.list.forEach((item, index) => {
				const page = Math.floor(index / 8);
				if (!pages[page]) {
					pages[page] = []
				}
				pages[page].push(item)
			});
			return pages
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.icons /deep/ .swiper-container {
	width: 100%;
	height: 0;
	padding-bottom: 40%;
}
.icons {
	margin-top: 6rem / @fontSize;
	.icon {
		position: relative;
		float: left;
		width: 25%;
		height: 0;
		padding-bottom: 20%;
		overflow: hidden;
		.icon-img {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 1.3rem;
			img {
				display: block;
				margin: 0 auto;
				height: 100%;
			}
		}
		.icon-title {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 1.3rem;
			line-height: 1.3rem;
			color: @darkTextColor;
			text-align: center;
			.ellipsisText();
		}
	}
}
</style>