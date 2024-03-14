const array = [1, 2, [3, 4, 5], 6, 7, 8, [9, 88, 978], 10, [1, 2, 3, 4, [1, 2, 3, 4]], 1, 2, 3]
const body = document.querySelector('body')
let inside = false
let counter = 0

function generateList(arr) {
    const ul = document.createElement('ul')

    arr.forEach((item, index) => {
        const li = document.createElement('li')
        if (Array.isArray(item)) {
            counter++
            inside = true
            li.append(generateList(item))
        } else {
            inside ? li.innerHTML = `${counter}.${item}` : li.innerHTML = item
        }
        ul.append(li)
        if (index === arr.length - 1) inside = false
    })
    return ul
}

console.log(generateList(array))
// body.append(generateList(array))