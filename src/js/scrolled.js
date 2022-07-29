const offset = (el) => {

	const rect = el.getBoundingClientRect()
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

	return {

		top: rect.top + scrollTop,
		left: rect.left + scrollLeft

	}

}

const animOnScroll = () => {

	const elements = document.querySelectorAll('.-elem-')

	for (let i = 0; i < elements.length; i++) {

		const element = elements[i]
		const elementHeight = element.offsetHeight
		const elementOffset = offset(element).top
		const elementStart = 4

		let elementPoint = window.innerHeight - elementHeight / elementStart

		if (elementPoint > window.innerHeight) elementPoint = window.innerHeight - window.innerHeight / elementStart

		if (window.pageYOffset > elementOffset - elementPoint && window.pageYOffset < elementOffset + elementHeight) {

			element.classList.add('-elem-show-')

		} else {

			element.classList.remove('-elem-show-')

		}

	}

}

const init = () => {

	animOnScroll()
	document.addEventListener('scroll', animOnScroll)

}

export default { init }