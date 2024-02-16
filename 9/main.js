let num = prompt('num')
let deg = prompt('deg')

function func(num, deg) {
    if (deg === 1) return num
    else {
        return num * func(num, deg - 1)
    }
}

alert(func(num, deg))

let reloadBtn = document.getElementById('reload')
reloadBtn.addEventListener('click', () => {
    location.reload()
})