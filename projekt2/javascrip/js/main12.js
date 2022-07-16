const button = document.querySelector('.arrow')
const faArrow = document.querySelector('.fa-solid')
const item1 = document.querySelector('.item1')

function showimg() {
	item1.classList.toggle('show')

	if (item1.classList.contains('show')) {
		button.style.transform = 'rotate(180deg)'
	} else {
		button.style.transform = 'rotate(0)'
	}
}

button.addEventListener('click', showimg)
