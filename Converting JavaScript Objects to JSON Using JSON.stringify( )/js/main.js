// Converting JavaScript Objects to JSON Using JSON.stringify()

// js object
const user = {
    name: "Mahbub",
    age: 20,
    isStudent: true,
    hobbies: ["Reading", "Traveling", "Coding"]
}

const convertToJSONData = JSON.stringify(user)

console.log("Converting Object to JSON:", convertToJSONData)

// advanced example

const person = {
    name: "Alice",
    age: 25,
    password: "12345"
}

// convert to JSON data

const jsonString = JSON.stringify(person, ["name", "age"])

console.log(jsonString)

// back to normal js object

const convertToNormalObject = JSON.parse(convertToJSONData)

console.log(convertToNormalObject)