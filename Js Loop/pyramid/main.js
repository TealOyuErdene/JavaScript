// const number = 11
// let output = ' '
// for(let i = 1; i <= number; i++){
//     for( let j = 1; j <= number; j++){
//         if(i == 1 || i == number || j == 1 || j == number || i == j || j + i == number + 1 ){
//             output += '* '
//         }
//         else{ 
//             output += '  '
//     }
// }
//     output += '\n '
// }
// console.log(output)


const number = 20
let output = ''

for(let i = 1; i <= number; i++){
    for(let j = 1; j <= number-i; j++){
        output += ' '
    }
    for(let n = 1; n <= i * 2 -1; n++){
        output += '*'
    }
    output += '\n'
} 
console.log(output)


