// 2. Getting and Setting Dates and Times

// a) Getting parts of a Date 

const date = new Date()
console.log(date)

console.log("Get the year:", date.getFullYear())
console.log("Get the month:", date.getMonth())
console.log("The day is:", date.getDate())
console.log("The hour is:", date.getHours())

// b) setting the date 

const myDate = new Date();
myDate.setFullYear(2025)
myDate.setMonth(5)
myDate.setDate(15)
myDate.setHours(14, 45, 30)

console.log(myDate)