const input = document.querySelector('#input')
const drunkDiv = document.querySelector('[data-hidden]')

function showDiv(event) {
    drunkDiv.classList.add('show')
}

function hideDiv(event) {
    drunkDiv.classList.remove('show')
}

input.addEventListener('focus', showDiv)
input.addEventListener('blur', hideDiv)
