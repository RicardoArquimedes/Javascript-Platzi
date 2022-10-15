const array = [1,1,2,3,4, [1,3,9, [33,45,32]]]

console.log(array.flat(3))


const array2 = [1, 2, 3, 4]

console.log(array2.flatMap(v => [v, v * 2]))