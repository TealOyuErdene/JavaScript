// console.log('Day 15 - Array')
// let F1 = 'Kou'
// let F2 = 'Var'
// let F3 = 'Llo'
// let F4 = 'Upa'
// let F5 = 'Her'
// let F6 = 'Rab'
// let F7 = 'Grie'
// let F8 = 'Mba'
// let F9 = 'Dem'
// let F10 = 'Tch'
// let F11 = 'Gir'

// let playersFrench = ['Kou', 'Var', 'Llo', 'Upa', 'Her', 'Rab', 'Grie', 'Mba', 'Dem', 'Tch', 'Gir']
// console.log(playersFrench)
// console.log(playersFrench[1])
// playersFrench[1] = 'Par'
// console.log(playersFrench)

// for(let i = 0; i < playersFrench.length; i++){
//     console.log(playersFrench[i])
// }

// let P1 = 'Krv'
// let P2 = 'Fra'
// let P3 = 'Kam'
// let P4 = 'Lew'
// let P5 = 'Szy'
// let P6 = 'Zle'
// let P7 = 'Kry'
// let P8 = 'Ber'
// let P9 = 'Kiw'
// let P10 = 'Gil'
// let P11 = 'Cash'

// let playersPolish =['Krv', 'Fra', 'Kam','Lew', 'Szy', 'Zle', 'Kry', 'Ber', 'Kiw', 'Gil', 'Cash']
// console.log(playersPolish)
// for(let i = 0; i < playersPolish.length; i++){
//     console.log(playersPolish[i])
// }


// let num = [1, 2, 3, 5, 10, 11, 3, 5, 8 ]
// for(let i = 0; i < num.length; i++){
//     if(num[i] % 2 == 0){
//         console.log(num[i])
//     }
// }


// for(let i = 0; i < num.length; i++){
//     num[i] = num[i] + 4
// }
// console.log(num)


// let sum = 0;
// for(let i = 0; i < num.length; i++){
//     sum = sum + num[i];
// }
// console.log(sum)

// let tiktak = [['* ', '* ', '* '], ['* ', '* ', '* '], ['* ', '* ', '* ']]

// let result = ' '
// for(let i = 0; i < tiktak.length; i++){
//     for(let j = 0; j < tiktak[i].length; j++){
//         console.log(tiktak[i][j])
//         result += tiktak[i][j]
//         if(j == tiktak[i].length - 1){
//             result = result + '\n '
//         }
//     }
// }
// console.log(result)


let max = -1000;
const arr = [1, 2, 10, 254, -19];

let arrayMax = (array) => {
    for (let index = 0; index < array.length; index++) {
        if (max <= array[index]) {
            max = array[index];
        }
    }
}
arrayMax(arr)
console.log(max);







