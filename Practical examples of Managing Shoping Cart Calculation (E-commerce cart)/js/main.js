// Example 1: Managing Shoping Cart Data

const cart = [
    {name: "Laptop", price: 800, quantity: 1},
    {name: "Mouse", price: 20, quantity: 2},
    {name: "Keyboard", price: 50, quantity: 1}
]

// step 1: calculate total price
const totalCost = cart.reduce((acc, item) => acc + item.price, 0)

console.log('Without quantity total price is:', totalCost)

// calculate total price with quantity
const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

console.log("With quantity total price is:", totalPrice)

// step-2: get items that cost more than 50

const expensiveItem = cart.filter(item => item.price > 50)

console.log("Expensive items:", expensiveItem)

// step-3: display items

const items = cart.map(item => item)

console.log("Items:", items)