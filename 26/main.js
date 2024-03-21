import {showAll, showItemsByType} from "./js/products.js";


export function drawCard(item) {
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    const img = document.createElement('img')
    const span = document.createElement('span')

    div.classList.add('product__card')
    h3.innerText = item.name
    h3.style.cssText = 'display: block; margin: 1rem 0; padding: 0 1rem'
    img.style.cssText = 'display: block; margin: 1rem 0'
    span.style.cssText = 'display: block; margin: 1rem 0; padding: 0 1rem'
    img.src = item.image
    span.innerText = `Price: ${item.price}$`


    div.append(h3)
    div.append(img)
    div.append(span)

    document.querySelector('.products').append(div) //добавили карточку

    div.addEventListener('click', () => {
        drawDescription(item) //рисуем правый блок
        document.querySelector('.products').classList.add('hide') //прячем центральный
        document.querySelector('.product__desc').classList.remove('hide')
    })
}

function drawDescription(item) {
    document.querySelector('.product__desc').innerHTML = ''
    const divDesc = document.createElement('div')
    const h3Desc = document.createElement('h3')
    const imgDesc = document.createElement('img')
    const spanDesc = document.createElement('span')
    const spanDescLongDesc = document.createElement('span')
    const btnBuy = document.createElement('button')

    divDesc.classList.add('product__card')
    h3Desc.innerText = item.name
    h3Desc.style.cssText = 'display: block; margin: 1rem 0; padding: 0 1rem'
    imgDesc.style.cssText = 'display: block; margin: 1rem 0'
    spanDesc.style.cssText = 'display: block; margin: 1rem 0; padding: 0 1rem'
    spanDescLongDesc.style.cssText = 'display: block; margin: 1rem 0; padding: 0 1rem'
    btnBuy.style.cssText = 'display: block; margin: 1rem 0 1rem 1rem'
    btnBuy.id = 'myBtn'
    imgDesc.src = item.image
    spanDesc.innerText = `Price: ${item.price}$`
    spanDescLongDesc.innerText = item.description
    btnBuy.innerText = 'BUY this product'

    divDesc.append(h3Desc)
    divDesc.append(imgDesc)
    divDesc.append(spanDesc)
    divDesc.append(spanDescLongDesc)
    divDesc.append(btnBuy)

    document.querySelector('.product__desc').append(divDesc)
    btnBuy.addEventListener('click', () => {
        document.querySelector('.products').classList.remove('hide')
        document.querySelector('.product__desc').classList.add('hide')
    })
    modal(item)
}

const buttons = document.querySelectorAll('.side__menu__list button')
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (event.target.dataset.type === 'all') showAll()
        else {
            showItemsByType(event.target.dataset.type)
        }
    })
})

showAll()

function modal(product) {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    let text = document.getElementById('modal-text')
    text.innerText = `Вы купили ${product.name} за ${product.price}$. 
    Вас перенаправили на главную
    Спасибо за покупку!`

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}
