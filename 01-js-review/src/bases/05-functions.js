// 1. Function declaration
// function sayHello(name) {
//   return `Hello, ${name}!`
// }

// 2. Assign function to a variable
// const sayHello = function(name) {
//     return `Hello, ${name}!`
// }

// 3. Function expression (Lambda function)
const sayHello = (name = 'Peter') => {
    return `Hello, ${name}!`
}

const name = 'John'

console.log(sayHello(name))
console.log(sayHello())

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Tom'
    }
}

const getUser2 = (name) => ({
        uid: '123ABC',
        username: name
    }
)

console.log(getUser())
console.log(getUser2('Major'))

const heroes = [{
    id: 1,
    name: 'Batman'
},
{
    id: 2,
    name: 'Superman'
}
]

// Use find to get the hero by id
const getHeroById = (id) => heroes.find(hero => hero.id === id)
// Use some to get the hero by id
const getHeroById2 = (id) => heroes.some(hero => hero.id === id)

console.log(getHeroById(1), getHeroById(3))
console.log(getHeroById2(2), getHeroById2(3))