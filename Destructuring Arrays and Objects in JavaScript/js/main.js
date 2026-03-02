// Destructuring Arrays and Objects

// arrays destructuring

const fruits = ['apple', 'banana', 'cherry']    // array

const [first, second, third] = fruits

console.log(first)
console.log(second)
console.log(third)

// object destructuring
const user = {
    name: "Mahbub",
    age: 20,
    email: "mahbub4797@gmail.com",
    city: "Dhaka"
}

console.log(user.name)
console.log(user["age"])

const {name, age, email, city} = user

console.log(`Hi, this is ${name}. I am ${age} years old and from ${city}`)

// nested destructuring

const person = {
    name: "Joy",
    address: {
        town: "Paris",
        zip: "123"
    },
    hobbies: ["Reading", "Travelling", "Coding"]
}

const {fullName, address: {town, zip}, hobbies} = person

const [x, y, z] = hobbies

console.log(`I am from ${town} and the zip code is ${zip}`)

console.log(x)
console.log(y)
console.log(z)