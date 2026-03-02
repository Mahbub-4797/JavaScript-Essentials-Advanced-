// Advanced Array Methods (Map, Filter, Reduce)

// 1. map():    display product
const numbers = [1, 2, 3, 4]

const squares = numbers.map(number => number ** 2)
console.log(squares)

squares[1] = 5
console.log("Modified:", squares)

console.log(numbers)


// 2. filter():     filtering product
const myFavouriteNumbers = [1, 2, 3, 4, 5, 6]

const evenNumbers = myFavouriteNumbers.filter(num => num % 2 === 0)
console.log("Even numbers: ", evenNumbers)


// 3. reduce():     calculate product prices
const products = [10, 20, 30]

const total = products.reduce((accumulator, current) => accumulator + current, 0)
console.log("Total price:", total)