// const array = [1, 2, 3, 4, 5, 6, 7]
// removeElement(array, 5 )
// console.log(array)
// Результат: [1, 2, 3, 4, 6, 7]

const removeElement = (arr, el) => {
    if (arr.indexOf(el) !== -1) {
        arr.splice(arr.indexOf(el), 1)
        console.log(arr)
        return arr
    }
    console.log(`${el} not found`)
}

const array = [1, 2, 3, 4, 5, 6, 7]
removeElement(array, 4)