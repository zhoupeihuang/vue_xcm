<template>
	<div class="swiper-container" id="swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img class="imgload" src="https://fileview.91xcm.com/group1/M00/00/69/Cg-q-Fim1nGAITYlAAB0Y98ZoIY583.jpg" >
			</div>
			<div class="swiper-slide">
				<img class="imgload" src="https://fileview.91xcm.com/group1/M00/00/6B/Cg-q-Fi09pyAalHvAACWzXklyd8303.png">
			</div>
			<div class="swiper-slide">
				<img class="imgload" src="https://fileview.91xcm.com/group1/M00/00/61/Cg-q-FhSj2GAPUXsAABmTAIMAqc492.jpg">
			</div>
			<div class="swiper-slide">
				<img class="imgload" src="https://fileview.91xcm.com/group1/M00/00/5E/Cg-q-Fg9OLaAPlOvAABlGF5Rj8Y856.jpg">
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	require('../assets/css/swiper.min.css')
	import Swiper from 'swipe'
	export default {
		mounted() {
			var myswipe = new Swiper(document.getElementById('swiper'), {
				loop: true,
				speed: 300
			});
		},
	}
</script>
<style>
	.imgload{ width: 16rem; height: 6rem;}
	#swiper{
		width: 16rem;
	}
	.swiper-slide {
		height: 6rem !important;
		width: 16rem !important;
	}
</style>