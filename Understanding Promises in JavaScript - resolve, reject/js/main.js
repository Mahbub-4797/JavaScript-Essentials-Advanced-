// Understanding Promises: Resolve and Reject

// practical example:

// creating a new promise

const myPromise = new Promise((resolve, reject) => {
    const success = true

    if (success) {
        resolve("The task completed successfully")
    } else{
        reject("Mission Failed")
    }
})

// handling promises using then() and catch()

myPromise.then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})