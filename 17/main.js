let array = [[5, 12, 'string', true,[10]], 1, 2, 3, '2', 4, false]
let sum = 0
function recursion(arr) {
    return arr.map((item) => {
        if (typeof item === 'number') return sum+=item
        if (typeof item === 'object') return recursion(item)
    })
}

console.log(recursion(array))
console.log(sum)