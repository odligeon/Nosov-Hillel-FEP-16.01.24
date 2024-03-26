import {data} from './data.js'
import {drawCard, products, productDesc} from "../main.js";
// console.log(import.meta.url)

export function showAll() {
    products.innerHTML = ''
    data.forEach(item => {
        drawCard(item)
    })
    products.classList.remove('hide')
    productDesc.classList.add('hide')
}

export function showItemsByType(type) {
    products.innerHTML = ''
    const items = data.filter(item => {return item.type === type})
    items.forEach(item => {drawCard(item)})
    products.classList.remove('hide')
    productDesc.classList.add('hide')
}