const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')
const square = document.querySelector('.color')
const removeColors = document.querySelector('.remove-color')

function redColor() {
	// square.classList.add('red')
	// square.classList.remove('blue')

	square.classList.toggle('red')
}

function blueColor() {
	// square.classList.add('blue')
	// square.classList.remove('red')

	square.classList.toggle('blue')
}

function deleteColor() {
	square.classList.remove('blue')
	square.classList.remove('red')
}

btn1.addEventListener('click', redColor)
btn2.addEventListener('click', blueColor)
removeColors.addEventListener('click', deleteColor)
