const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 10

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}



function getRandomSize() {
    return `${getRandomNum1()} x ${getRandomNum2()}`
}


function getRandomNum1() {
    return Math.floor(Math.random() * 10) + 300
}

function getRandomNum2() {
    return Math.floor(Math.random() * 10) + 400
}