<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
	data() {
		return {
			recommendList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
				title: '北京赏花好地方',
				desc: '乱花渐欲迷人眼，京城赏花大搜索',
			},
			{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
				title: '京城周末撒欢',
				desc: '在帝都过周末，不仅仅是城中游！',
			},
			{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
				title: '京城溜娃必去',
				desc: '德智体美劳全面发展的亲子日，这些地方该去看看…',
			}]
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