let table = document.createElement('table')
table.setAttribute('id', 'table')
let body = document.querySelector('body')
body.append(table)
let counter = 1

for (let i = 0; i < 10; i++) {
    table.append(document.createElement('tr'));
}

let trs = document.querySelectorAll('tr')
for (let i = 0; i < 10; i++) {
    trs.forEach((item) => {
        let td = document.createElement('td')
        td.innerHTML = counter
        counter++
        item.append(td)
    })
}

body.style.cssText = 'height: 100vh; display: flex; justify-content: center; align-items: center'
table.style.cssText = 'border: 1px solid black; border-radius: 8px'