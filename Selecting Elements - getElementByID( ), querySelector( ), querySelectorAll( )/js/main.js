// get element by id

const header = document.getElementById("header");
header.innerText = "Hi, I am Mamun"

// get element by class name

const loveProgramming = document.getElementsByClassName("love-programming");
console.log(loveProgramming[0])

loveProgramming[0].innerText = "I hate love"

// querySelector()
const firstMessage = document.querySelector("messageS");
console.log(firstMessage.innerText)

// querySelectorAll() : all children

const allMessage = document.querySelectorAll(".message")
allMessage.forEach((message) => console.log(message.textContent))