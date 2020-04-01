<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
				<img class="img" :src="item.imgUrl" alt />
				<div class="info">
					<p class="info-title">{{item.title}}</p>
					<p class="info-desc">{{item.desc}}</p>
					<p class="info-price">{{item.price}}</p>
					<button class="info-more">查看详情></button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	props: {
		list: Array
	},
	data() {
		return {

		}
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.title {
	margin-top: 6rem / @fontSize;
	line-height: 30rem / @fontSize;
	background: #eee;
	text-indent: 10rem / @fontSize;
	text-align: left;
}
.item {
	display: flex;
	height: 90rem / @fontSize;
	overflow: hidden;
	.img {
		width: 80rem / @fontSize;
		height: 80rem / @fontSize;
		padding: 5rem / @fontSize;
	}
	.info {
		flex: 1;
		position: relative;
		min-width: 0;
		.info-title {
			font-size: 15rem / @fontSize;
			line-height: 30rem / @fontSize;
		}
		.info-desc {
			line-height: 25rem / @fontSize;
			color: #ccc;
			width: 85%;
			.ellipsisText();
		}
		.info-price {
			line-height: 30rem / @fontSize;
			font-size: 20rem / @fontSize;
			color: #ff8300;
		}
		.info-more {
			// position: absolute;
			float: right;
			margin-right: 20rem / @fontSize;
			margin-top: -24rem / @fontSize;
			// right: 5rem / @fontSize;
			border: none;
			background: white;
			color: #ff9300;
		}
	}
}
</style>