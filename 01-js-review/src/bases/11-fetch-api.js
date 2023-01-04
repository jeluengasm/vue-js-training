
const apiKey = 'nwRJLE0dJCbkigv0cd85WJqcAyCe6JLW'

request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(ans => ans.json())
    .then(({data}) => {
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })
    // .catch(console.error)