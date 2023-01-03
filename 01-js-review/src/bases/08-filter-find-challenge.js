import superHeroes from '../data/heroes'

// getHeroById using find (return a name or undefined)

// getHeroesByOwner using filter (return an array)

export const getHeroById = (id) => (
    superHeroes.find(
        hero => (hero.id === id)
    ) //.name
)

export const getHeroesByOwner = (owner) => (
    superHeroes.filter(
        hero => hero.owner === owner
    ) //.map(hero => hero.name)
)