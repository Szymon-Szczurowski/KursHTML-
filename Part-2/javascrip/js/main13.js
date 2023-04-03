const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 20
let colors = 'gold'

function bigText() {
	fontSize += 5
	p.style.fontSize = fontSize + 'px'
}

function smallText() {
	fontSize -= 5
	p.style.fontSize = fontSize + 'px'
}

function colore() {
	p.style.color = colors
}

sizeUp.addEventListener('click', bigText)
sizeDown.addEventListener('click', smallText)
color.addEventListener('click', colore)
