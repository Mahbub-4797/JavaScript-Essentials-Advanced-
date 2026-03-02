// Using then( ), catch( ) and finally( ), with Promises

// then() => promise resolved
// catch() => promise rejected
// finally() => after promise settled (fulfilled or rejected)

const fetchData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const success = true
            if (success) {
                resolve('Data fetched successfully')
            } else{
                reject('Failed to fetch data')
            }
        }, 1000);
    })
}

fetchData().then((message) => {
    console.log(message)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Operation completed")
})