let array = [[5, 12, 'string', true, [10]], 1, 2, 3, '2', 4, false, 10.5]
let numbersAmount = 0
let sum = 0

function recursion(arr) {
    return arr.map((item) => {
        if (typeof item === 'number') {
            numbersAmount++
            return sum += item
        }
        if (typeof item === 'object') return recursion(item)
    })
}

console.log(recursion(array))
console.log('sum = ' + sum)
console.log('amount of numbers = ' + numbersAmount)
console.log('result = ' + sum / numbersAmount)