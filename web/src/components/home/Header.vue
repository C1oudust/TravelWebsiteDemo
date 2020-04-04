<template>
	<div class="header">
		<div class="left">
			<div class="iconfont back">&#xe658;</div>
		</div>
		<div class="input">
			<span class="iconfont">&#xe63c;</span> 输入城市/景点/游玩主题
		</div>

		<router-link to="/City">
			<div class="right">
				{{this.city}}
				<span class="iconfont arrow">&#xe65c;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'HomeHeader',
	computed: {
		...mapState(['city'])
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.header {
	display: flex;
	align-items: center;
	height: @headerHeight;
	background: @bgColor;
	color: #fff;
	.left {
		width: 32rem / @fontSize;
		float: left;
		.back {
			text-align: center;
			font-size: 20rem / @fontSize;
		}
	}
	.right {
		min-width: 52rem / @fontSize;
		padding: 0 5rem / @fontSize;
		float: right;
		text-align: center;
		color: white;
		.arrow {
			font-size: 16rem / @fontSize;
		}
	}
	.input {
		flex: 1;
		background: #fff;
		color: #ccc;
		border-radius: 0.5rem;
		height: 26rem / @fontSize;
		line-height: 26rem / @fontSize;
		padding-left: 1rem;
	}
}
</style>
