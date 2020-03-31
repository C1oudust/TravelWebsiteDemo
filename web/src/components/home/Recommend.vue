<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
	data() {
		return {
			recommendList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
				title: '八达岭长城',
				desc: '不到长城非好汉',
				price: '40'
			},
			{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_200x200_ce3d2658.jpg',
				title: '北京海洋馆',
				desc: '在帝都感受大海',
				price: '540'
			},
			{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_200x200_444cc7e8.jpg',
				title: '圆明园',
				desc: '历史的沉淀',
				price: '10'
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