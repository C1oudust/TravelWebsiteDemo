<template>
	<div class="header">
		<div class="left">
			<div class="iconfont back">&#xe658;</div>
		</div>
		<div class="input">
			<span class="iconfont">&#xe63c;</span> 输入城市/景点/游玩主题
		</div>
		<div class="right">
			城市
			<span class="iconfont arrow">&#xe65c;</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeHeader'
}
</script>

<style lang="less" scoped>
@fontSize: 12px;
@bgColor: #00bcd4;
.header {
	display: flex;
	align-items: center;
	height: 43rem / @fontSize;
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
		width: 62rem / @fontSize;
		float: right;
		text-align: center;
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