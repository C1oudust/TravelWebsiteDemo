<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
				<div class="img-wrapper">
					<img class="img" :src="item.imgUrl" alt />
				</div>
				<div class="info">
					<p class="info-title">{{item.title}}</p>
					<p class="info-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
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
	// margin-top: 6rem / @fontSize;
	line-height: 30rem / @fontSize;
	background: #eee;
	text-indent: 10rem / @fontSize;
	text-align: left;
}
.item {
	// display: flex;
	// height: 90rem / @fontSize;
	// overflow: hidden;
	.img-wrapper {
		height: 0;
		overflow: hidden;
		padding-bottom: 37%;
		.img {
			width: 100%;
		}
	}

	.info {
		position: relative;
		min-width: 0;
		padding-left: 5rem / @fontSize;
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
	}
}
</style>