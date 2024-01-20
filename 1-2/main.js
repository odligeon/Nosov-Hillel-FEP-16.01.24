function getFirstName() {
    let firstName = prompt('Enter your firstname')
    alert(`Hello, ${firstName}! How are you?`)
    const button = document.getElementById('changeNameButton')
    button.innerText = `Hey! I'm not ${firstName}! Change first name!`
}

getFirstName()
