<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list :cities="cities" :hot="hotCities"></city-list>
		<city-alphabet :cities="cities"></city-alphabet>
	</div>
</template>

<script>
import CityHeader from '@/components/city/Header';
import CitySearch from '@/components/city/Search';
import CityList from '@/components/city/List';
import CityAlphabet from '@/components/city/Alphabet'
import axios from 'axios'

export default {
	name: 'City',
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data() {
		return {
			cities: {},
			hotCities: []
		}
	},
	methods: {
		getCityInfo() {
			axios.get('/api/city.json')
				.then(this.getCityInfoSucc)
		},
		getCityInfoSucc(res) {
			res = res.data;
			if (res.ret && res.data) {
				const data = res.data;
				this.cities = data.cities;
				this.hotCities = data.hotCities;
			}
		}
	},
	mounted() {
		this.getCityInfo();

	}
}
</script>

<style lang="less" scoped>
</style>