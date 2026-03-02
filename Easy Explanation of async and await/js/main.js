// Understanding async and await

// practical example of data fetching

const fetchPosts = async() => {
    try {
        console.log("Fetching posts...")

        // fetch data from a web server
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        console.log(response)

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        // parse the JSON and wait for it
        const posts = await response.json()

        console.log(posts)


    } catch (error) {
        console.log("Error fetching posts", error.message)
    }
}

fetchPosts()