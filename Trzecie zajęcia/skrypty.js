// Skrypt 1
const nazwa = document.getElementById('nazwa')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
var znaki = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]+$/
var mail_znaki = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

form.addEventListener('submit', (e) => {
    let messages = []
    if (nazwa.value === '' || nazwa.value == null) {
        messages.push('Imię i nazwisko jest wymagane')
    }
    if (!nazwa.value.match(znaki)) {
        messages.push('W polu mogą się znajdować tylko polskie znaki')
    }
    //if (!nazwa[0].toUpperCase() == nazwa[0]) {
    //    messages.push('Imię i Nazwisko piszę się z wielkiej litery')
    //}
    if (!email.value.match(mail_znaki)) {
        messages.push('Adres Email jest nieprawidłowy')
    }
    


    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    } else {
        e.preventDefault()
        errorElement.innerText = "Dane są poprawne"
    }

})
//skrypt 2