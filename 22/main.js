let body = document.querySelector('body')
let img = document.createElement('img')
const gerRandomImg = function () {
    return Math.floor(Math.random() * (10) + 1)
}

img.setAttribute('src', 'images/' + gerRandomImg() + '.jpg')
body.style.cssText = 'height: 100vh; display: flex; justify-content: center; align-items: center'
body.append(img)