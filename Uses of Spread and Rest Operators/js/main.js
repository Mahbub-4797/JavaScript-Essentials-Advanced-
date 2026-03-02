// Spread and Rest Operators

// spread operators (...): make a copy of the array or object
// rest operators (...): collects remaining elements into an array or object

// example of spread operators
const numbers = [1, 2, 3]   // will add 2 elements: 4, 5

const newNumbers = [...numbers, 4, 5]

console.log(newNumbers)

// use spread operator in an object
const user = {
    name: 'Jhon',
    age: 30
}

const updateUser = {...user, city: "New York City"}

console.log(user)
console.log(updateUser)

// rest operator (...)

const oldNumbers = [10, 20, 30, 40]

const [first, second, ...rest] = oldNumbers

console.log(first)
console.log(second)
console.log(rest)