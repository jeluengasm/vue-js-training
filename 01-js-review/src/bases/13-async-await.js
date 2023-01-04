const myPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('I have succeeded')
    }, 1000)
})


const timeElapsed = async () => {
    console.log('Before')

    await myPromise().then(console.log)

    console.log('After')
    // return 'Finished'
    // throw 'Something went wrong'

}

timeElapsed()
    // .then(console.log)
    // .catch(console.err)