// A "Shoping Cart" Demo Using ES6+ Features.

const products = [
    {name: "Laptop", price: 1000},
    {name: "Phone", price: 500}
]

// add new product with default parameters

const addProduct = (product, price = 0) => [...products, {name:product, price}]

// calculate the total price using rest operators

const calculateTotal = (...price) => price.reduce((sum, price) => sum + price, 0) 

// destructure the products details

const displayProductsDetails = ({name, price}) => `Product: ${name}, Price: ${price}`

// update cart

const updatedCart = addProduct("Tablet", 300)
console.log(updatedCart)

// get the total price

const totalPrice = calculateTotal(1000, 500, 300)

console.log(`The total price is $ ${totalPrice}`)

// display products details
console.log(displayProductsDetails({name: "Laptop", price: 1000}))
console.log(displayProductsDetails({name: "Keyboard", price: 250}))