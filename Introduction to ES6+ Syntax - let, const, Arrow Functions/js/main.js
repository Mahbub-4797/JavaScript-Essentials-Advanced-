// variables

var number1 = 5     // before 2015 (X)

// let and const variables

let age = 25

age = 25 + 5

console.log(age)

const pi = 3.1416

// pi = 4.6723  (not possible to reassign new values)

console.log(pi)

// funcyions

// old method of declearing a function

function addNumbers (num1, num2) {
    return num1 + num2
}

console.log("From genaral function addNumbers:", addNumbers(5, 13))

// modern method of declearing a function

const addTwoNumbers = (num1, num2) => num1 + num2

console.log("From arrow function addTwoNumbers:", addNumbers(10, 23))