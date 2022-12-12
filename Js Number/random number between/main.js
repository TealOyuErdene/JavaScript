// 1. 2 тоо prompt - оор авна.
// 2. prompt - оор өгсөн 2 тооны хооронд дурын тоо generate хийж гаргана уу.

let max = prompt('Max number')
let min = prompt('Min number')
const number = Math.floor(Math.random() * (+max - +min + 1) + +min)
console.log(number)
