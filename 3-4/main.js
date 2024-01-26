const hw3 = document.getElementById('hw3')
const hw4 = document.getElementById('hw4')


setTimeout(() => {
    hw3.addEventListener('click', () => {
        let num1 = prompt('num 1 =')
        let num2 = prompt('num 2 =')
        alert(`${num1} + ${num2} = ${+num1 + +num2}, ${num1} - ${num2} = ${+num1 - +num2}, ${num1} * ${num2} = ${+num1 * +num2}, ${num1} / ${num2} = ${+num1 / +num2}`)
        // alert(`${num1} - ${num2} = ${+num1 - +num2}`)
        // alert(`${num1} * ${num2} = ${+num1 * +num2}`)
        // alert(`${num1} / ${num2} = ${+num1 / +num2}`)
    })
    hw4.addEventListener('click', () => {
        let operand = prompt('Enter operand (+ - * /)')
        let num1 = +prompt('Enter num 1')
        let num2 = +prompt('Enter num 2')
        let result = eval(`num1 ${operand} num2`);
        alert(`${num1} ${operand} ${num2} = ${result}`)
    })
})