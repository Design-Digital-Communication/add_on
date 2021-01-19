const container = document.getElementById('container')
const color = ['#DBFF33', '#FFBD33', '#3489db' , '#33FF57', '#FF5733' , '#1C0BBC', '#BC0BAB', '#740BBC']

const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',() => setColor(square))

    square.addEventListener('mouseout',() => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return color[Math.floor(Math.random() * color.length)]
}