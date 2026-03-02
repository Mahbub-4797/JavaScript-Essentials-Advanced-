// textContent: changes or retrives to text of the element

const greeting = document.getElementById("greeting")

greeting.textContent = "Good Night, Developers!"
console.log(greeting.textContent)

// innerHTML

const infoContainer = document.getElementById("info")
infoContainer.innerHTML = "Visit <a href='https://www.recipetineats.com/' target='_blank'>this link</a>"
console.log(infoContainer)

// styling css using js
greeting.style.color = 'red';
greeting.style.padding = '5px';
greeting.style.border = '1px solid black';

const textContent = document.getElementsByClassName("text-content");
console.log(textContent[0])

textContent[0].style.background = 'lightblue'
textContent[0].style.padding = '10px'