// 12345 -> 54321 n хувьсагчийн утгыг тоог урвуул.
let number = '12345'
let reverseNumber = ''
for(let i = number.length-1; i >= 0; i-- ){
    reverseNumber += number[i]
}
console.log(reverseNumber)