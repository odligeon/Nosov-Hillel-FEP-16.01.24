let images = []
let i = 1
const slider = document.querySelector('.slider')
const btnLeft = document.querySelector('button#left')
const btnRight = document.querySelector('button#right')
let currPos = 1
let nextPos = currPos + 1
let prevPos = currPos - 1

function getImages(amount) {
    for (; i <= amount; i++) {
        let img = new Image()
        img.src = `images/${i}.jpg`
        img.id = i;
        images.push(img)
    }
}

function drawImages() {
    images.forEach((img) => {
        slider.append(img)
    })
    checkButtons()
}

function checkButtons() {
    nextPos = currPos + 1
    prevPos = currPos - 1

    if (prevPos === 0) {
        btnLeft.hidden = true;
    } else btnLeft.hidden = false;

    if (nextPos >= images.length + 1) {
        btnRight.hidden = true;
    } else btnRight.hidden = false
}

getImages(5)//указываем макс количество картинок для слайдера
drawImages()

btnRight.addEventListener('click', function () {
    document.getElementById(nextPos).scrollIntoView()
    currPos += 1
    checkButtons()
})
btnLeft.addEventListener('click', function () {
    document.getElementById(prevPos).scrollIntoView()
    currPos -= 1
    checkButtons()
})