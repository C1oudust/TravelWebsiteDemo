<template>
	<div>
		<router-link tag="div" to="/" v-show="showAbs" class="header-abs">
			<div class="iconfont back">&#xe658;</div>
		</router-link>
		<div class="header-fixed" v-show="!showAbs" :style="opacity">
			<router-link to="/">
				<div class="iconfont back">&#xe658;</div>
			</router-link>景点详情
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailHeader',
	data() {
		return {
			showAbs: true,
			opacity: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll() {
			// console.log(document.documentElement.scrollTop);
			let top = document.documentElement.scrollTop;
			if (top > 100 && top < 170) {
				const opacity = top / 170;
				this.opacity = {
					opacity
				}
			}
			this.showAbs = (top > 100 ? false : true)
		}
	},
	activated() {
		window.addEventListener('scroll', this.handleScroll)
	},
	deactivated() {
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';

.header-abs {
	position: absolute;
	left: 5rem / @fontSize;
	top: 5rem / @fontSize;
	width: 30rem / @fontSize;
	height: 30rem / @fontSize;
	border-radius: 50%;
	background-color: rgba(0, 0, 0, 0.8);
	.back {
		color: white;
		text-align: center;
		font-size: 20rem / @fontSize;
	}
}

.header-fixed {
	overflow: hidden;
	height: @headerHeight;
	line-height: @headerHeight;
	text-align: center;
	color: #fff;
	background-color: @bgColor;
	font-size: 13rem / @fontSize;
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	.back {
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		margin-left: 6rem / @fontSize;
		font-size: 20rem / @fontSize;
		color: white;
	}
}
</style>