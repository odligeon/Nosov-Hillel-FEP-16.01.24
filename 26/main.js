import {showAll, showItemsByType} from "./js/products.js";

export const products = document.querySelector('.products')
export const productDesc = document.querySelector('.product__desc')

let div, h3, img, span

function createElement() {
    div = document.createElement('div')
    h3 = document.createElement('h3')
    img = document.createElement('img')
    span = document.createElement('span')
}

export function drawCard(item) {
    createElement()
    div.classList.add('product__card')
    h3.innerText = item.name
    h3.classList.add('db', 'm-1-0', 'p-0-1')
    img.classList.add('db', 'm-1-0')
    span.classList.add('db', 'm-1-0', 'p-0-1')
    img.src = item.image
    span.innerText = `Price: ${item.price}$`

    div.append(h3, img, span)

    products.append(div) //добавили карточку

    div.addEventListener('click', () => {
        drawDescription(item) //рисуем правый блок
        products.classList.add('hide') //прячем центральный
        productDesc.classList.remove('hide')
    })
}

function drawDescription(item) {
    productDesc.innerHTML = ''
    createElement()
    const spanLongDesc = document.createElement('span')
    const btnBuy = document.createElement('button')

    div.classList.add('product__card')
    h3.innerText = item.name
    h3.classList.add('db', 'm-1-0', 'p-0-1')
    img.classList.add('db', 'm-1-0')
    span.classList.add('db', 'm-1-0', 'p-0-1')
    spanLongDesc.classList.add('db', 'm-1-0', 'p-0-1')
    btnBuy.classList.add('btnBuy')
    btnBuy.id = 'myBtn'
    img.src = item.image
    span.innerText = `Price: ${item.price}$`
    spanLongDesc.innerText = item.description
    btnBuy.innerText = 'BUY this product'

    div.append(h3, img, span, spanLongDesc, btnBuy)

    productDesc.append(div)
    btnBuy.addEventListener('click', () => {
        products.classList.remove('hide')
        productDesc.classList.add('hide')
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

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}