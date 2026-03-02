// initialize variables

const form = document.getElementById("contactForm")
console.log(form)

const nameInput = form.elements["name"]
const emailInput = form.elements["email"]
const subjectInput = form.elements["subject"]
const messageInput = form.elements["message"]

const nameError = document.getElementById("nameError")
const emailError = document.getElementById("emailError")
const messageError = document.getElementById("messageError")
const successMessage = document.getElementById("successMessage")

// submit form
form.addEventListener("submit", (event) => {
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.style.display = "none";

    let isValid = true;

    // validate name
    if (nameInput.value.trim() === '') {
        nameError.textContent = "Name is required"
        isValid = false
    }

    if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address"
        isValid = false
    }

    if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters"
        isValid = false
    }

    if (isValid) {
        successMessage.style.display = "block"
        form.reset()
    }
})