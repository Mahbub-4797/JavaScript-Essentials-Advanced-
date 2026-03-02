// Handle Errors Using try, catch and finally

/*
=> try: code block where an error occured

=> catch: executes where an error occured

=> finally: always executed code blocks
*/

/*
try{

} catch() {

} finally{

}
*/

try {
    let num = 3
    let result = num.toUpperCase()
    console.log(result)
} catch (error) {
    console.log("An error occured:", error.message)
} finally{
    console.log("This code block run always")
}