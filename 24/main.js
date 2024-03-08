let images = []
let i = 1
const slider = document.querySelector('.slider')
const btnLeft = document.querySelector('button#left')
const btnRight = document.querySelector('button#right')
let currPos = 1
let nextPos = currPos + 1
let prevPos = currPos - 1

async function getImages() {
    try {
        let test = new Image()
        test.src = `images/${i}.jpg`
        test.id = i;
        let response = await fetch(test.src)
        if (response.ok === false) throw 'all images parsed'
        images.push(test)
        i++
    } catch (error) {
        console.log(error)
        return;
    }
    getImages()
}

function drawImages() {
    images.forEach((img) => {
        slider.append(img)
    })
    checkButtons()
}

function checkButtons() {
    // console.log(prevPos, currPos, nextPos, images.length + 1)
    if (prevPos === 0) {
        btnLeft.hidden = true;
    } else btnLeft.hidden = false;

    if (nextPos >= images.length + 1) {
        btnRight.hidden = true;
    } else btnRight.hidden = false
}

getImages()
setTimeout(drawImages, 1000) //если уменьшить, то не успевает отработать все имеджи

btnRight.addEventListener('click', function () {
    document.getElementById(nextPos).scrollIntoView()
    currPos += 1
    nextPos = currPos + 1
    prevPos = currPos - 1
    checkButtons()
})
btnLeft.addEventListener('click', function () {
    document.getElementById(prevPos).scrollIntoView()
    currPos -= 1
    nextPos = currPos + 1
    prevPos = currPos - 1
    checkButtons()
})