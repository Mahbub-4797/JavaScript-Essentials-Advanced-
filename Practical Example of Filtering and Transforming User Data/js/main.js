// Example : Filtering and Transforming User Data

const users = [
    {name:"Alice", age: 25, isActive: true, email: "alice@gmail.com"},
    {name:"Bob", age: 17, isActive: false, email: "bob@gmail.com"},
    {name:"Charlie", age: 19, isActive: true, email: "charlie@gmail.com"}
]

// step-1: Filter active users over 18 years old

const activeUsers = users.filter(user => user.isActive && user.age > 18)
console.log("Active Users:", activeUsers)

// step-2: extract user email

const emails = users.map(user => user?.email)
console.log("User email collection:", emails)