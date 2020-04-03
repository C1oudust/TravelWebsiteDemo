<template>
	<ul class="letter">
		<li
			class="item"
			v-for="l of letters"
			:key="l"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
			@click="handleLetterClick"
			:ref="l"
		>{{l}}</li>
	</ul>
</template>

<script>
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object
	},
	computed: {
		letters() {
			const letters = []
			for (let i in this.cities) {
				letters.push(i)
			}
			return letters
		}
	},
	data() {
		return {
			touchStatus: false,
			startY: 0,
			timer: null
		}
	},
	updated() {
		this.startY = this.$refs['A'][0].offsetTop;
	},
	methods: {
		handleLetterClick(e) {
			this.$emit('change', e.target.innerText)
		},
		handleTouchStart() {
			this.touchStatus = true
		},
		handleTouchMove(e) {
			if (this.touchStatus) {
				e.preventDefault();
				if (this.timer) {
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() => {
					const touchY = e.touches[0].clientY - 76.91 * 2;
					const index = Math.floor((touchY - this.startY) / 17.4)
					console.log(index);
					// console.log(startY + "   " + touchY);
					// console.log(this.letters.length);
					if (index >= 0 && index < 27) {
						this.$emit('change', this.letters[index])
					}
				}, 16);



			}
		},
		handleTouchEnd() {
			this.touchStatus = false
		}
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
	top: 12rem;
	bottom: 0;
	width: 1.5rem;
	.item {
		text-align: center;
		color: @bgColor;
	}
}
</style>