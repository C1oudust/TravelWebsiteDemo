<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img :src="item.imgUrl" alt />
					</div>
					<p class="icon-title">{{item.title}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	data() {
		return {
			iconList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				title: '景点门票'
			}, {
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
				title: '颐和园'
			},
			{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/4c/eac47dd8def8de02.png',
				title: '北京圆博园'
			}
				,
			{
				id: '0004',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
				title: '玉渊潭公园'
			}
				,
			{
				id: '0005',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
				title: '一日游'
			}
				,
			{
				id: '0006',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
				title: '古北水镇'
			}
				,
			{
				id: '0007',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
				title: '香山公园'
			}
				,
			{
				id: '0008',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
				title: '凤凰岭'
			}
				,
			{
				id: '0009',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
				title: '踏青赏花'
			},
			{
				id: '0010',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
				title: '中国马镇'
			}]
		}
	},
	computed: {
		pages() {
			const pages = [];
			this.iconList.forEach((item, index) => {
				const page = Math.floor(index / 8);
				if (!pages[page]) {
					pages[page] = []
				}
				pages[page].push(item)
			});
			return pages
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../styles/common.less';
.icons /deep/ .swiper-container {
	width: 100%;
	height: 0;
	padding-bottom: 40%;
	// overflow: hidden;
}
.icons {
	.icon {
		position: relative;
		float: left;
		width: 25%;
		height: 0;
		padding-bottom: 20%;
		overflow: hidden;
		.icon-img {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 1.3rem;
			img {
				display: block;
				margin: 0 auto;
				height: 100%;
			}
		}
		.icon-title {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 1.3rem;
			line-height: 1.3rem;
			color: @darkTextColor;
			text-align: center;
			.ellipsisText();
		}
	}
}
</style>