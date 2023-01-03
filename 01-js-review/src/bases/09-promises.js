
console.log('Begin')

new Promise((resolve, reject) => {
    console.log('Promise\'s body')
    // resolve('Promise resolved', true) // Resolve the promise
    reject('Promise rejected', false) // Reject the promise
})
.then((message) => console.log(message)) // If the promise is resolved
.catch((message) => console.error(message)) // If the promise is rejected
