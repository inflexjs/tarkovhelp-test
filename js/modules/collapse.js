export function collapseToggler(collapse, element) {
	element.addEventListener('click',(e) => {
		collapse.active = !collapse.active
		collapse.active ? element.parentElement.classList.add('is-active') : element.parentElement.classList.remove('is-active')
	})
}