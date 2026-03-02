// What are events?

const clickButton = document.getElementById('clickButton');
console.log(clickButton)

const message = document.getElementById('message')

// add click event to the button 

clickButton.addEventListener('click', () => {
    alert("The click button was clicked")
    message.innerText = "I am Mahbub"
})

// hover over the div
const hoverDiv = document.getElementById("hoverDiv")

hoverDiv.addEventListener('mouseover', () => {
    hoverDiv.style.backgroundColor = "lightgreen"
    hoverDiv.innerText = "You're hovering!"
})

hoverDiv.addEventListener('mouseout', () => {
    hoverDiv.style.backgroundColor = 'lightblue'
    hoverDiv.innerText = "Hover Over Me"
})

// 3. Handling Keyboard Events (Keydown and Keyup)
const inputFeild = document.getElementById("inputFeild")
const keyMessage = document.getElementById("keyMessage")

inputFeild.addEventListener("keydown", (Event) => {
    keyMessage.innerText = `You pressed: ${Event.key}`
})

inputFeild.addEventListener("keyup", () => {
    keyMessage.innerText = "You released a key!"
})