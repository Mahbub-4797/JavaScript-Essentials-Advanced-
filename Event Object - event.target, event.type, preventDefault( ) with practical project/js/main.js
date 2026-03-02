// event object

const form = document.getElementById('myForm')
const nameInput = document.getElementById('nameInput')
const formMessage = document.getElementById('formMessage')

form.addEventListener('submit', (Event) => {
    Event.preventDefault();     // prevent reload
    formMessage.innerText = `Form submitted by: ${nameInput.value}`
})