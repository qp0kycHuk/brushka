import showPass from "./js/show-pass";
import fancybox from "./js/fancybox";
import rangeSlider from './js/range-slider';
import theme from './js/theme';
import tab from 'npm-kit-tab';
import toggle from 'npm-kit-toggle';
import ripple from 'npm-kit-ripple';
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy } from 'swiper';
import inputmask from './js/inputmask'
import yandexMap from './js/yandex-map'
import scrolled from './js/scrolled'


import 'npm-kit-ripple/index.css';
import 'swiper/css';
import './ui/ui-reset.scss'
import './ui/ui-core.scss'
import './ui/ui-example.scss'
import './scss/frontend--fonts.scss'
import './scss/frontend--style.scss'

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Grid, Thumbs, EffectFade, Lazy]);
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper
window.ripple = ripple
window.addEventListener('DOMContentLoaded', () => loadHandler())

function loadHandler() {

	fancybox.init();
	showPass.init();
	rangeSlider.init()
	tab.init();
	toggle.init();
	ripple.init();
	theme.init();
	scrolled.init()

	ripple.attach('.btn')
	ripple.attach('.waved')
	ripple.deAttach('.btn--link')
	inputmask.init(document)

	document.addEventListener('click', clickHandler);

	window.addEventListener('scroll', mapsInit)
	document.addEventListener('click', mapsInit)
	setTimeout(mapsInit, 15000);
}

let mapInited = false;

function mapsInit() {
	if (mapInited) return;
	mapInited = true

	console.log('yandexMap init');
	yandexMap.init()
}


function clickHandler(event) {
	function scrollTo() {
		const target = event.target.closest('[data-scroll]');
		const href = target.getAttribute('data-scroll');

		if (!href) return;
		if (href[0] != '#' || href == '#') return;

		event.preventDefault();

		var element = document.querySelector(href);
		const offset = 45;
		const bodyRect = document.body.getBoundingClientRect().top;
		const elementRect = element.getBoundingClientRect().top;
		const elementPosition = elementRect - bodyRect;
		const offsetPosition = elementPosition - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
	if (event.target.closest('[data-scroll]')) scrollTo();



}