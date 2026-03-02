// Introduction to asynchronous JavaScript

// define 3 function

function first() {
    console.log(1)
}

function second() {
    setTimeout(() => {
        console.log(2)
    }, 0);
}

function third() {
    console.log(3)
}

// call the functions
first()
second()
third()


// Task-2:
console.log("Start")

setTimeout(() => {
    console.log("The message is delayed")
}, 2000);

console.log("End")