<template>
	<ul class="letter">
		<li class="item" v-for="(letter,key) of cities" :key="key">{{key}}</li>
	</ul>
</template>

<script>
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';

.letter {
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	right: 0;
	top: 6rem;
	bottom: 0;
	width: 1.5rem;
	.item {
		text-align: center;
		color: @bgColor;
	}
}
</style>