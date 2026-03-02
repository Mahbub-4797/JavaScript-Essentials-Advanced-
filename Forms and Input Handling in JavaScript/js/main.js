// Accessing the form and form elements

const form = document.getElementById('contactForm')
console.log(form)

// access the form elements

const username = form.elements['username']
console.log("Username:", username)

const email = form.elements['email']
console.log("Email:", email)