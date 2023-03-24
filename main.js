var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerview: 'auto',
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth:200,
		modifier:1,
		slidesShadow: true,
	},
	pagination: {
		el: '.swiper-pagination'
	},
	loop: true,
})