// How to throw an error

function checkAge (age) {
    if (age < 18) {
        throw new Error("You're not elligible to vote");
    }
    console.log("You can vote!")
}



// handle the error using try catch finally

try {
    checkAge(16)
} catch (error) {
    console.error("Error: ", error.message);
} finally{
    console.log("Age verification completed")
}