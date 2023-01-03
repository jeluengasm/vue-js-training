import {getHeroById, getHeroesByOwner} from './08-filter-find-challenge.js'

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if (hero) {
                resolve(hero)
            } else {
                reject('Hero not found')
            }
        }, 1000)
    })
    .then(hero => console.log(hero))
    .catch(console.error)
}

getHeroByIdAsync(1)

getHeroByIdAsync(13)