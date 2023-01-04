import axios from 'axios'


const apiKey = 'nwRJLE0dJCbkigv0cd85WJqcAyCe6JLW'

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})


export default giphyApi

// giphyApi.get('/random')
//     .then((ans) => {
//         const {data} = ans.data

//         const {url} = data.images.original
//         const img = document.createElement('img')
//         img.src = url
//         document.body.append(img)
//     })