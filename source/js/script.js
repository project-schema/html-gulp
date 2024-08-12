jQuery(function ($) {
	'use strict';
	window.addEventListener('scroll', function () {
		var scrolling = $(this).scrollTop();
		var logo = document.getElementById('logo');
		const ruHeader = document.getElementById('ru-header');

		if (scrolling > 200) {
			ruHeader.classList.add('sticky');
			// if (!ruHeader.classList.contains('white')) {
			// 	logo.src = './assets/img/logo/logo-dark.png';
			// }
		} else {
			ruHeader.classList.remove('sticky');
			// if (!ruHeader.classList.contains('white')) {
			// 	logo.src = './assets/img/logo/logo-white.png';
			// }
		}
	});

	var swiper = new Swiper('.mySwiper-home1', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	var swiper = new Swiper('.mySwiper', {});
});
