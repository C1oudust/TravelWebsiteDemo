<template>
	<div class="content">
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
		</div>
		<div class="search-content" ref="wrapper" v-show="keyword">
			<ul>
				<li
					class="search-item border-bottom"
					v-for="item of list"
					:key="item.id"
					@click="handleCityClick(item.name)"
				>{{item.name}}</li>
				<li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from '@better-scroll/core';
import { mapActions } from 'vuex'
export default {
	name: 'CitySearch',
	props: {
		cities: Object
	},
	data() {
		return {
			keyword: '',
			list: [],
			timer: null
		}
	},
	computed: {
		hasNoData() {
			return !this.list.length;
		}
	},
	methods: {
		...mapActions(['changeCity']),
		handleCityClick(city) {
			this.changeCity(city);
			// this.$store.dispatch('changeCity', city);
			this.$router.push('/');
		}
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper);
	},
	watch: {
		keyword() {
			if (this.timer) {
				clearTimeout(this.timer)
			}
			if (this.keyword == '' || !this.keyword) {
				this.list = [];
				return;
			}
			this.timer = setTimeout(() => {
				const re = [];
				for (let i in this.cities) {
					this.cities[i].forEach((value) => {
						if (value.spell.indexOf(this.keyword) > -1 ||
							value.name.indexOf(this.keyword) > -1) {
							re.push(value)
						}
					});
				}
				this.list = re;

			}, 100);
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.content {
	position: relative;
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
	.search-content {
		border-radius: 5rem / @fontSize;
		z-index: 2;
		overflow: hidden;
		height: 55rem;
		position: absolute;
		top: 28rem / @fontSize;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #eee;
		font-size: 12rem / @fontSize;
		ul {
			.search-item {
				line-height: 24rem / @fontSize;
				background-color: #fff;
				color: #666;
				text-align: center;
			}
		}
	}
}
</style>