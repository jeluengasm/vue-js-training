
const characters = [ 'Goku', 'Vegeta', 'Trunks' ]

const g = characters[0]
const v = characters[1]
const t = characters[2]

console.log(g, v, t)

const [goku, vegeta, trunks] = characters
console.log('g, v, t: ', goku, vegeta, trunks)

const [, , p3] = characters // p3 = 'Trunks', skiping the first two elements
console.log('p3: ', p3)

const [ , p4] = characters // p4 = 'Trunks', skiping the first and last elements
console.log('p4: ', p4)

const [ , , , p5] = characters // p5 = undefined, skiping the first three elements
console.log('p5: ', p5)

const [ , , , p6 = 'No value'] = characters // p6 = 'No value', skiping the first three elements
console.log('p6: ', p6)

const returnArray = () => {
    return ['ABC', 123]
}
const [letters, numbers] = returnArray()
console.log('letters: ', letters)
console.log('numbers: ', numbers)


const returnArray2 = (arr) => {
    return [...arr]
}
const [letters2, numbers2] = returnArray2(['ABC', 123])
console.log('letters2: ', letters2)
console.log('numbers2: ', numbers2)

const returnArray3 = ([letters, numbers]) => {
    return [letters, numbers]
}
const [letters3, numbers3] = returnArray3(['ABC', 123])
console.log('letters3: ', letters3)
console.log('numbers3: ', numbers3)
