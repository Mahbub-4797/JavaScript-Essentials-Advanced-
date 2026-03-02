// fetch users data from json placeholder

const fetchUsers = async () => {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(response)

        const users = await response.json()

        console.log(users)
        
    } catch (error) {
        console.log("Failed to fetch users", error.message)
    }
}

// call the function
fetchUsers()