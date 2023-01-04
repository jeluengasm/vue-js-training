import giphyApi from './12-axios'


const getGif = async () => {
    try {
        const {data} = (await giphyApi.get('/random')).data
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.log('Request error', error);
        throw error
    }
}

getGif()