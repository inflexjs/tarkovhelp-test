export function modalToggler(modal, element, modalElement, event) {
	element.addEventListener('click',() => {
		if (event === 'open') {
			modal.active = true
			document.body.style.overflow = 'hidden'
		} else {
			modal.active = false
			document.body.style.overflow = 'auto'
		}
		modal.active ? modalElement.classList.add('is-active') : modalElement.classList.remove('is-active')
	})
}