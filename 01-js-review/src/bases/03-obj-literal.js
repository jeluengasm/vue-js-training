const person = {
    name: 'Tony',
    lastname: 'Stark',
    age: 45,
    address: { // We can put objects inside objects
        city: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
}

const personSet = new Set()

console.log(person)
console.log(personSet)

// Copying objects as reference (Shallow copy)
const person2 = person; // We are not creating a new object, we are just creating a new reference to the same object

person2.name = 'Peter' // We are changing the name of the object referenced by person2

console.log('1', person) // We can see that the name of the object referenced by person has changed
console.log('2', person2) // We can see that the name of the object referenced by person2 has changed

// Using the spread operator (Deep copy)
const person3 = { ...person } // We are creating a new object with the same properties as the object referenced by person

person3.name = 'John' // We are changing the name of the object referenced by person3
console.log('1', person)
console.log('3', person3)