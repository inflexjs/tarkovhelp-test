import { collapseToggler } from './modules/collapse.js'
import { modalToggler } from './modules/modal.js'

const collapse = {
	active: false
}

const modal = {
	active: false,
	name: '.modal'
}

document.addEventListener("DOMContentLoaded", () => {
	const collapses = document.querySelectorAll('.collapse__head'),
				openButtons = document.querySelectorAll('.button--modal-open'),
				closeButtons = document.querySelectorAll('.button--modal-close'),
				body = document.body,
				modalElement = document.querySelector(modal.name)

	collapses.forEach(element => collapseToggler(collapse, element))

	openButtons.forEach(button => modalToggler(modal, button, modalElement, 'open'))
	closeButtons.forEach(button => modalToggler(modal, button, modalElement, 'close'))

	body.addEventListener('keydown', (e) => {
		switch (e.keyCode) {
			case 27:
			case 13:
				modal.active = false
				body.style.overflow = 'auto'
				modalElement.classList.remove('is-active')
				break;
		}
	})
	body.addEventListener('click', (e) => {
		if (e.target.className === 'modal__overlay') {
			modal.active = false
			body.style.overflow = 'auto'
			modalElement.classList.remove('is-active')
		}
	})
});
