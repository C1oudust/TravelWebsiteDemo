<template>
	<div>
		<div class="item" v-for="(item,index) of list" :key="index">
			<div class="item-title border-bottom">
				<span class="icon"></span>
				{{item.title}}
			</div>
			<div class="item-children" v-if="item.children">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailList',
	props: {
		list: Array
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.item-title {
	line-height: 30rem / @fontSize;
	font-size: 12rem / @fontSize;
	padding: 5rem / @fontSize;
	.icon {
		position: relative;
		top: 5rem / @fontSize;
		display: inline-block;
		width: 20rem / @fontSize;
		height: 20rem / @fontSize;
		// margin-top: 5rem / @fontSize;
		background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png)
			0 -2.3rem no-repeat;
		margin-right: 2rem / @fontSize;
		background-size: 2rem 15rem;
	}
}
.item-children {
	padding: 0 12rem / @fontSize;
}
</style>