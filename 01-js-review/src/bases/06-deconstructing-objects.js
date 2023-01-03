
const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

console.log('Without destructuring:', person.name, person.age, person.codeName)

const {name, age, codeName, power = 'No power'} = person
console.log('Object destructuring: ', name, age, codeName, power)

// Create a function that returns a hero object
const createHero = (person) => {
    const {name, age, codeName, power = 'No power'} = person
    return {
        id: 1,
        name, // We can omit the variable name: 'name'
        age: age, // We also explicitly set the variable name
        codeName: codeName,
        power: power
    }
}
console.log("Using createHero function: ", createHero(person))


// We can also use destructuring in function parameters
const createHero2 = ({name: firstname, age, codeName: code, power = 'No power'}) => ({
    id: 2,
    firstname,
    age,
    codeName: code,
    power: 'Money'
})
console.log("Using createHero2 function: ", createHero2(person))