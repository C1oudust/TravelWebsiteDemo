<template>
	<div class="list" ref="wrapper">
		<div class="content">
			<div class="area">
				<div class="title border-top-bottom">当前城市</div>
				<div class="city-list">
					<div class="city-wrapper">
						<div class="city">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-top-bottom">热门城市</div>
				<div class="city-list">
					<div class="city-wrapper">
						<div class="city">北京</div>
					</div>
					<div class="city-wrapper">
						<div class="city">北京</div>
					</div>
					<div class="city-wrapper">
						<div class="city">北京</div>
					</div>
					<div class="city-wrapper">
						<div class="city">北京</div>
					</div>
					<div class="city-wrapper">
						<div class="city">北京</div>
					</div>
					<div class="city-wrapper">
						<div class="city">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-top-bottom">A</div>

				<ul class="item-list">
					<li class="item border-bottom">阿坝藏族羌族自治州</li>
					<li class="item border-bottom">阿克苏地区</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉善盟</li>
					<li class="item border-bottom">阿勒泰</li>
					<li class="item border-bottom">阿里</li>
					<li class="item border-bottom">安康</li>
					<li class="item border-bottom">安庆</li>
					<li class="item border-bottom">安顺</li>
					<li class="item border-bottom">安阳</li>
					<li class="item border-bottom">鞍山</li>
					<li class="item border-bottom">澳门</li>
				</ul>
			</div>
			<div class="area">
				<div class="title border-top-bottom">A</div>

				<ul class="item-list">
					<li class="item border-bottom">阿坝藏族羌族自治州</li>
					<li class="item border-bottom">阿克苏地区</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉善盟</li>
					<li class="item border-bottom">阿勒泰</li>
					<li class="item border-bottom">阿里</li>
					<li class="item border-bottom">安康</li>
					<li class="item border-bottom">安庆</li>
					<li class="item border-bottom">安顺</li>
					<li class="item border-bottom">安阳</li>
					<li class="item border-bottom">鞍山</li>
					<li class="item border-bottom">澳门</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from '@better-scroll/core';


export default {
	name: 'CityList',
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper)
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.list {
	overflow: hidden;
	position: absolute;
	top: 73rem / @fontSize;
	left: 0;
	bottom: 0;
	right: 0;
	.title {
		background: #eee;
		line-height: 30rem / @fontSize;
		padding-left: 10rem / @fontSize;
		color: #666;
	}
	.city-list {
		padding: 5rem / @fontSize;
		padding-right: 20rem / @fontSize;
		overflow: hidden;
		.city-wrapper {
			width: 33.33%;
			float: left;
			.city {
				margin: 5rem / @fontSize;
				text-align: center;
				padding: 5rem / @fontSize;
				border: solid 1px #ccc;
				border-radius: 5rem / @fontSize;
			}
		}
	}

	.item-list {
		list-style: none;
		.item {
			line-height: 25rem / @fontSize;
			color: #666;
			padding-left: 10rem / @fontSize;
		}
	}
}
</style>