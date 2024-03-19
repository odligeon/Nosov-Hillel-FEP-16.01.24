const form = document.querySelector('#form')
const table = document.querySelector('#table')

// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     let submittable = true
//     const firstName = form.firstName.value
//     const lastName = form.lastName.value
//     const bDay = form.bDay.value
//
//     let sex
//     try {
//         if (document.getElementById('sexError')) {
//             document.getElementById('sexError').remove()
//         }
//         sex = document.querySelector('#sex .input:checked').value
//         submittable = true
//     } catch (error) {
//         let p = document.createElement('p')
//         p.innerText = 'Please choose your sex'
//         p.style.color = 'red'
//         p.id = 'sexError'
//         document.querySelector('#sex').prepend(p)
//         submittable = false
//     }
//
//     const city = document.querySelector('#city').value
//     const address = form.address.value
//
//     let languages = form.querySelectorAll('[name=languages]:checked')
//     let languagesList = ''
//     if (languages.length === 0) {
//         let p = document.createElement('p')
//         p.innerText = 'Please choose your languages'
//         p.style.color = 'red'
//         p.id = 'languageError'
//         document.querySelector('#languages').prepend(p)
//         submittable = false
//     } else {
//         languages.forEach((item) => {
//             return languagesList += `${item.value} `
//         })
//     }
//     // console.log(firstName, lastName, bDay, sex, city, address, languagesList)
//     // console.log(submittable)
//
//     if (submittable) {
//         form.hidden = true
//         drawTable({
//             'First name': firstName,
//             'Last Name': lastName,
//             'Date of Birthday': bDay,
//             'Sex': sex,
//             'City': city,
//             'Home Address': address,
//             'List of languages': languagesList
//         })
//     }
//
//     function drawTable(data) {
//         for (let [key, value] of Object.entries(data)) {
//             let tr = document.createElement('tr')
//             let td = document.createElement('td')
//             // console.log(`${key}: ${value}`);
//             td.innerText = `${key}: ${value}`
//             tr.append(td)
//             table.append(tr)
//         }
//         table.style.display = 'table'
//     }
// })

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let data = new FormData(form);
    let submittable = true

    if (document.getElementById('sexError')) {
        document.getElementById('sexError').remove()
    }

    if (!document.querySelector('#sex .input:checked')) {
        let p = document.createElement('p')
        p.innerText = 'Please choose your sex'
        p.style.color = 'red'
        p.id = 'sexError'
        document.querySelector('#sex').prepend(p)
        submittable = false
    } else {
        submittable = true
    }

    let languagesList = ''
    if (document.getElementById('languageError')) {
        document.getElementById('languageError').remove()
    }
    if (data.getAll('languages').length === 0) {
        let p = document.createElement('p')
        p.innerText = 'Please choose your languages'
        p.style.color = 'red'
        p.id = 'languageError'
        document.querySelector('#languages').prepend(p)
        submittable = false
    } else {
        data.getAll('languages').forEach((item) => {
            return languagesList += `${item} `
        })
    }

    if (submittable) {
        form.hidden = true
        drawTable({
            'First name': data.get('firstName'),
            'Last Name': data.get('lastName'),
            'Date of Birthday': data.get('bDay'),
            'Sex': data.get('sex'),
            'City': data.get('city'),
            'Home Address': data.get('address'),
            'List of languages': languagesList,
        })
    }

    function drawTable(data) {
        for (let [key, value] of Object.entries(data)) {
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.innerText = `${key}: ${value}`
            tr.append(td)
            table.append(tr)
        }
        table.style.display = 'table'
    }
})