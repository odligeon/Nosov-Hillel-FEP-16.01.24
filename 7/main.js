// const num1 = +prompt('Enter number 1')
// const num2 = +prompt('Enter number 2')
// const num3 = +prompt('Enter number 3')
//
// alert((num1 + num2 + num3) / 3)

let numbers = []
let number

if (number === undefined) {
    while (number !== '' || number !== null) {
        number = prompt('Enter number')
        if (number === '' || number === null) break
        numbers.push(+number)
    }
}

let amount = numbers.length
let sum = 0

function count() {
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }
    return sum
}

count()
alert(sum)