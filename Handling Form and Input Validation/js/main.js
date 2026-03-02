// form validation

const form = document.getElementById("registerForm")

console.log(form)

// add event handlers to the form
form.addEventListener("submit", (event) => {
    const name = form.elements["name"].value
    const email = form.elements["email"].value
    const password = form.elements["password"].value

    event.preventDefault()

    // form validation
    if (!name || !email || !password) {
        alert("Please fill out the fields correctly!")
    } else {
        alert("Registration successfully!")
    }
})