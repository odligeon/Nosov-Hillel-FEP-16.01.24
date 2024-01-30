const dateOfBirth = prompt('Enter your birth year')
const city = prompt('Where do you live at? (City)')
const sport = prompt('Enter your favourite sport')
const date = new Date()
const year = date.getFullYear()
const ageBlock = document.getElementById('age')
const cityBlock = document.getElementById('city')
const sportBlock = document.getElementById('sport')

ageBlock.innerText = `age is: ${year - +dateOfBirth}`
if (city === 'Киев' || city === 'Вашингтон' || city === 'Лондон') {
    cityBlock.innerText = 'Ты живёшь в столице ' + city
    alert(`age is: ${year - +dateOfBirth}, Ты живёшь в столице ${city}`)
} else {
    cityBlock.innerText = 'Ты живёшь в городе ' + city
    alert(`age is: ${year - +dateOfBirth}, Ты живёшь в городе ${city}`)
}

let sportsman = ''
if (sport === 'ф1') {
    sportsman = 'Шумахером'
} else if (sport === 'плавание') {
    sportsman = 'Майкл Фелпсом'
} else if (sport === 'гольф') {
    sportsman = 'Тайгер Вудсом'
}

if (sportsman !== '') {
    alert(sportBlock.innerText = `Круто! Хочешь стать ${sportsman} ?`)
}

let emptyPromptMessage;
if (dateOfBirth === null) {
    alert(emptyPromptMessage = 'Жаль, что Вы не захотели ввести свою дату рождения')
} else if (city === null) {
    alert(emptyPromptMessage = 'Жаль, что Вы не захотели ввести свой город')
} else if (sport === null) {
    alert(emptyPromptMessage = 'Жаль, что Вы не захотели ввести свой любимый вид спорта')
}