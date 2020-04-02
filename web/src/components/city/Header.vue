<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div class="iconfont back">&#xe658;</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'CityHeader'
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.header {
	overflow: hidden;
	height: @headerHeight;
	line-height: @headerHeight;
	text-align: center;
	color: #fff;
	background-color: @bgColor;
	font-size: 13rem / @fontSize;

	position: relative;
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