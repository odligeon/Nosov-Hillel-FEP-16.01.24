import {data} from './data.js'
import {drawCard} from "../main.js";

// console.log(import.meta.url)
export function showAll() {
    document.querySelector('.products').innerHTML = ''
    data.forEach(item => {
        drawCard(item)
    })
    document.querySelector('.products').classList.remove('hide')
    document.querySelector('.product__desc').classList.add('hide')
}

export function showItemsByType(type) {
    document.querySelector('.products').innerHTML = ''
    const items = data.filter(item => {return item.type === type})
    items.forEach(item => {drawCard(item)})
    document.querySelector('.products').classList.remove('hide')
    document.querySelector('.product__desc').classList.add('hide')
}