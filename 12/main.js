// sum(3) = 3
// sum(5) = 8
// sum(20) = 28

function sumFunc() {
    let total = 0

    return function (val) {
        return total += val
    }
}

let sum = sumFunc()

console.log(sum(3))
console.log(sum(5))
console.log(sum(20))
