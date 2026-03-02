// form submission

const feedBackForm = document.getElementById("feedBackForm")
console.log(feedBackForm)

feedBackForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const feedBack = feedBackForm.elements["feedback"].value
    
    if (!feedBack) {
        alert("Please write your feedback")
    } else {
        console.log("Feedback submitted:", feedBack)
        alert('Thank you for your feedback!')
    }
})