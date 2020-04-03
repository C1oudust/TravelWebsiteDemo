<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="输入城市名或拼音" />
	</div>
</template>

<script>
export default {
	name: 'CitySearch'
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.search {
	height: 24rem / @fontSize;
	padding: 5rem / @fontSize;
	padding-top: 0;
	background: @bgColor;
	.search-input {
		box-sizing: border-box;
		height: 24rem / @fontSize;
		width: 100%;
		line-height: 20rem / @fontSize;
		text-align: center;
		border-radius: 3rem / @fontSize;
		border: none;
		color: #666;
		outline: none;
		opacity: 0.9;
		padding: 0 15rem / @fontSize;
	}
}
</style>