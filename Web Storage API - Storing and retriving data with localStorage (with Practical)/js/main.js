// initialize the elements

const nameField = document.getElementById("name")
const emailField = document.getElementById("email")
const messageField = document.getElementById("message")

const saveButton = document.getElementById("saveData")
const clearButton = document.getElementById("clearData")

// step-1: function to save data to local storage
function saveFormData() {
    const name = nameField.value
    const email = emailField.value
    const message = messageField.value

    const formData = {
        name,
        email,
        message
    }
    console.log(formData)

    // save the form data to local storage
    localStorage.setItem("formData", JSON.stringify(formData))
    alert("Data saved successfully")
}

saveButton.addEventListener("click", (event) => {
    event.preventDefault()
    saveFormData()
})

// step-2: load data from local storage

const loadFormData = () => {
    const saveData = localStorage.getItem("formData")
    console.log(saveData)
    if (saveData) {
        const parseData = JSON.parse(saveData)
        console.log("Parse Data:", parseData)
        const name = parseData.name
        const email = parseData.email
        const message = parseData.message
        console.log(name, email, message)

        // show data to input field
        nameField.value = name
        emailField.value = email
        messageField.value = message
    }
}

document.addEventListener("DOMContentLoaded", loadFormData)

// step-3: clear form data also form local storage

clearButton.addEventListener("click", () => {
    localStorage.removeItem("formData")
    alert("Data cleared successfully")
})