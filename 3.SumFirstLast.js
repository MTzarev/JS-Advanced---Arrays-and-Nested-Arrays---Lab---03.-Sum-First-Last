function sumFirstLast(array) {

let start = array[0]
let end = array[array.length-1]
let result = Number(start)+Number(end)
return result
}
console.log(sumFirstLast(['20', '30', '40']))
