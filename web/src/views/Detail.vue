<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
import DetailBanner from '@/components/detail/Banner'
import DetailHeader from '@/components/detail/Header'
import DetailList from '../components/detail/List'
export default {
	name: 'Detail',
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data() {
		return {
			list: [
				{
					title: "成人票",
					children: [
						{
							title: '三人团购',
							children: [{
								title: '连锁店销售'
							}]
						},
						{
							title: '五人团购'
						}
					]
				},
				{
					title: '学生票'
				},
				{
					title: '儿童票'
				},
				{
					title: '特惠票'
				}]
		}
	}
}
</script>

<style lang="less" scoped>
.content {
	height: 100rem;
}
</style>