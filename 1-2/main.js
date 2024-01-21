const button = document.getElementById('changeNameButton')

function getFirstName() {
    let firstName = window.prompt('Enter your firstname')
    window.alert(`Hello, ${firstName}! How are you?`)
    button.innerText = `Hey! I'm not ${firstName}! Change first name!`
}

setTimeout(() => {
    button.addEventListener('click', getFirstName)
    getFirstName()
})