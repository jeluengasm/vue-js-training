const array = [1, 2, 3, 4]

console.log(array)
array.push(5) // We can add elements to the array

array[3] = -1 // We can modify elements of the array

console.log(array)

// array = [1, 2, 3, 4, 5, 6] // We cannot reassign the array


const array2 = array // We are not creating a new array, we are just creating a new reference to the same array
const array3 = [...array] // We can create a new array with the same elements as the array referenced by array

array2.push(6)
array3.push(7)
console.log('1', array) // We can see that the array referenced by array2 has changed
console.log('2', array2)
console.log('3', array3) // We can see that the array referenced by array3 is different from the reference of array


const array4 = array2.map((number) => number * 2) // We can create a new array with the same elements as the array referenced by array2, but with a different value for each element
array4.push(8)

console.log('4', array4)