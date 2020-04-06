<template>
	<div class="list" ref="wrapper">
		<div class="content">
			<div class="area">
				<div class="title border-top-bottom">当前城市</div>
				<div class="city-list">
					<div class="city-wrapper">
						<div class="city">{{this.city}}</div>
					</div>
				</div>
			</div>
			<div>
				<div class="area">
					<div class="title border-top-bottom">热门城市</div>
					<div class="city-list">
						<div
							class="city-wrapper"
							v-for="city in hot"
							:key="city.id"
							@click="handleCityClick(city.name)"
						>
							<div class="city">{{city.name}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="cities">
				<div class="area" v-for="(items,key) of cities" :key="key" :ref="key">
					<div class="title border-top-bottom">{{key}}</div>

					<ul class="item-list">
						<li
							class="item border-bottom"
							v-for="item of items"
							:key="item.id"
							@click="handleCityClick(item.name)"
						>{{item.name}}</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from '@better-scroll/core';

import { mapState, mapActions } from 'vuex'

export default {
	name: 'CityList',
	props: {
		cities: Object,
		hot: Array,
		letter: String
	},
	computed: {
		...mapState(['city'])
	},
	methods: {
		...mapActions(['changeCity']),
		handleCityClick(city) {
			this.changeCity(city);
			// this.$store.dispatch('changeCity', city);
			this.$router.push('/');
		}
	},
	watch: {
		letter() {
			if (this.letter) {
				const e = this.$refs[this.letter][0]
				this.scroll.scrollToElement(e)
			}
		}
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper, { click: true, tap: true })
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.list {
	overflow: hidden;
	position: absolute;
	top: 71rem / @fontSize;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 1;
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
			line-height: 30rem / @fontSize;
			color: #666;
			padding-left: 10rem / @fontSize;
		}
	}
}
</style>