// find() and some() for Advanced Searches

// 1. find():   returns the first element which match

const users = [
    {name: "Alice", age: 17},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 19},
]

// TODO: find a user who is 18 years old or over
const findUser = users.find(user => user.age >= 18)

console.log("User found: ", findUser)

const filterUsers = users.filter(user => user.age >= 18)
console.log("Filtered users:", filterUsers)

// 2. some() method:

const products = [
    {name: "Book", price: 30},
    {name: "Headphones", price: 150},
    {name: "Pen", price: 5}
]

const hasExpensiveItem = products.some(product => product.price > 100)
console.log(hasExpensiveItem)

// calculate the total price of the products

const totalPrice = products.reduce((acc, product) => acc + product.price, 0)

console.log("Total price is:", totalPrice)