// array: 5 6 4 12 19 121 1 7 9 63
// 1. Хэдэн ширхэг сондгой тоо байгаа вэ?
// 2. Хэдэн ширхэг тэгш тоо байгаа вэ?

let number = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63]
let countEven = 0
let countOdd = 0
for(let i = 0; i < number.length; i++){
    if(number[i] % 2 == 0){
        countEven++
    }
    if(number[i] % 2 == 1){
        countOdd++
    }
}
console.log(countEven)
console.log(countOdd)