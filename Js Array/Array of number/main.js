// 1. arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11]


// 2. Array доторх тоонуудын нийлбэрийг ол.
let sum = 0
for(let i = 0; i < arrayOfNumbers.length; i++){
    sum = sum + arrayOfNumbers[i]
}
console.log(sum)


// 3. Хамгийн их тоог ол.
let max = -100000
for(let i = 0; i < arrayOfNumbers.length; i++){
    if(max <= arrayOfNumbers[i]){
        max = arrayOfNumbers[i]
    }
}
console.log(max)


// 4. Хамгийн бага тоог ол.
let min = 1000000
for(let i = 0; i < arrayOfNumbers.length; i++){
    if(min >= arrayOfNumbers[i]){
        min = arrayOfNumbers[i]
    }
}
console.log(min)


// 5. Array - ийн төгсгөлд дурын 1 тоог нэм.
let str = 1
arrayOfNumbers.length = arrayOfNumbers.length + str

for(let i = 11; i < arrayOfNumbers.length; i++){
    arrayOfNumbers[11] = 3333
}
console.log(arrayOfNumbers)


// 6. Array - ийн эхэнд дурын 1 тоог нэм.
arrayOfNumbers.length = arrayOfNumbers.length - 1
for(let i = arrayOfNumbers.length; i >= 1; i --){

    arrayOfNumbers[i] = arrayOfNumbers[i-1]
}
arrayOfNumbers[0]= 5555
console.log(arrayOfNumbers)




