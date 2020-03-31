<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
	</div>
</template>

<script>
import HomeHeader from '@/components/home/Header'
import HomeSwiper from '@/components/home/Swiper'
import HomeIcons from '@/components/home/Icons'

export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons
	}
}
</script>

<style>
</style>