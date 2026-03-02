// Adding Event Listeners

const eventButton = document.getElementById('eventButton')
const eventMessage = document.getElementById('eventMessage')

eventButton.addEventListener('click', () => {
    eventMessage.innerText = "Event listener triggered!"
})

setTimeout(() => {
    eventButton.removeEventListener('click', () => {
        console.log("This won't work after removal!")
    })
    eventButton.innerText = "Listener Removed!"
    eventButton.style.backgroundColor = 'lightgreen'
    eventButton.style.padding = '5px'
    eventButton.style.borderRadius = '8px'
}, 5000)