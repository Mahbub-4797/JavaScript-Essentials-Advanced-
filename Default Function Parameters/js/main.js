// Default Function Parameters

const greet = (name = "Guest") => {
    console.log(`Hello, ${name}`)
}

greet()
greet("Alice")

// practical uses of default parameters

const calculatePrice = (price, tax = 0.1, discount = 0) => {
    return price + (price * tax) - discount
}

console.log(calculatePrice(100))

console.log(calculatePrice(100, 0.1, 50))