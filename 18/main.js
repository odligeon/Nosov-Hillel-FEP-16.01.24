let arr = []

function recursion() {
    let inputNumber = prompt('Add this number to array')
    if (inputNumber === null) return
    arr.push(+inputNumber)
    recursion()
}

recursion()
console.log('array before sort ', arr)
console.log('sorted array ', arr.sort((a, b) => {
    return a - b

}))
console.log('elements deleted from array ', arr.splice(2, 3))
console.log('array after splice ', arr)