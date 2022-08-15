export function modalToggler(modal, element, modalElement, event) {
	element.addEventListener('click',() => {
		if (event === 'open') {
			modal.active = true
			document.body.classList.add('scroll-lock')
		} else {
			modal.active = false
			document.body.classList.remove('scroll-lock')
		}
		modal.active ? modalElement.classList.add('is-active') : modalElement.classList.remove('is-active')
	})
}