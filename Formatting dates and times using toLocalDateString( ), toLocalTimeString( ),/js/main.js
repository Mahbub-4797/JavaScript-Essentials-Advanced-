// 3. Formatting Dates and Times (toLocalDateString & toLocalTimeString)

// a) Formatting Dates 
const date = new Date();

console.log(date.toLocaleDateString())     // 2/1/2026
console.log(date.toLocaleDateString('en-GB'))       // 01/02/2026 (British formats)
console.log(date.toLocaleDateString('fr-FR'))       // (french formats)

// b) Formating Times 

console.log(date.toLocaleTimeString())      // 12:32:39 PM (local time)
console.log(date.toLocaleTimeString('en-GB'))      
console.log(date.toLocaleTimeString('fr-FR'))     

// Task: Create a function to display the current date and time in a user-friendly format.

function displayDateTime () {
    const now = new Date();

    // get individual parts of the date and time
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // format the date and time 
    const formattedDate = `${day}/${month}/${year}`;            // 1/2/2026
    const formattedTime = `${hours}:${minutes}:${seconds}`       // 12:50:28

    console.log(`Today's Date is: ${formattedDate}`)
    console.log(`Current time is: ${formattedTime}`)
}

// call the function
displayDateTime ()