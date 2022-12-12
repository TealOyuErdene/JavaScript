//1. 10 хүртэлх натурал тоог хэвлэх программ бич
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }
// console.log('\n')



//2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
// for(let i = 0; i <= 10; i++ ){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }
// console.log('\n')



// // // 3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
// for(let i = 0; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }
// console.log('\n')



// 4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
// let sum = 0
// for(let i = 0; i <= 100; i++){
//     if(i <= 100){
//         sum = sum + i
//     }
// }
// console.log(sum)
// console.log('\n')



// 5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич
// let n = prompt('Enter your number')
// let sumNumber = 0
// for(let i = 0; i <= n; i++){
//     if(i <= n){
//         sumNumber = sumNumber + i
//         console.log(i)
//     }
// }
// console.log(sumNumber)
// console.log('\n')



// 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич
// let m = prompt('Enter your number')
// let count = 0
// for(let i = 0; i <= m; i++  ){
//     if(m % i == 0){
//         count++
//     }
// }
// if(count == 2){
//     console.log('Anhnii too mun')
// }else{
//     console.log('Anhnii too bish')
// }
// console.log('\n')



// 7. Өгөгдсөн интервал дахь анхны тоог хэвлэх программ бич
// let x = prompt('Enter your min number')
// let y = prompt('Enter your max number')
let x = 10
let y = 50
let count = 0
let huvaagch = 2
for(let i = x; i <= y; i++ ){
    for(let j = 2; j <= i; j++){
        if(i % j != 0){
          
        }else{
            count++
            break;
        }
    }
}
if(count == 2){
    console.log(i)
}else{
    console.log('Anhnii too baihgui')
}
count = 0



// 8. N тооны факториал олох программ бич
// let Nnumber = prompt('Enter your n number')
// let mul = 1
// for(let i = 1; i <= Nnumber; i++){
//     mul= mul * i
// }
// console.log(mul)
// console.log('\n')



// 9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич aldaataiiii
// let a = '1234'
// let sum = 0
// for(let i = 0; i <= a.length-1; i++){
//     sum = sum + a[i]
// }
// console.log(sum)


// console.log('\n')


// 10. N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич
// let oddNumber = prompt('Enter your number')
// let oddSum = 0
// for(let i = 1; i <= oddNumber; i++){
//     if(i % 2 != 0){
//         oddSum = oddSum + i
//         console.log(i)
//     }
// }
// console.log(oddSum)
// console.log('\n')



// 11. N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич
// let evenNumber = prompt('Enter your number')
// let evenSum = 0
// for(let i = 1; i <= evenNumber; i++){
//     if(i % 2 == 0){
//         evenSum = evenSum + i
//         console.log(i)
//     }
// }
// console.log(evenSum)
// console.log('\n')



// 12. Өгөгдсөн  эерэг тооны урвууг хэвлэх программ бич // 123 <=> 321
// let b = '123'
// let reverse = ''
// for(let i = b.length-1; i >= 0; i--){
//     reverse += b[i]
// }
// console.log(reverse)
// console.log('\n')


// 13. Өгөдсөн тооны цифрүүдийг үгээр хэвлэх программ бич
// let c = prompt('Enter your numbers')
// for(let i = 0; i < c.length; i++){
//     if(c[i] == 1) console.log('one')
//     if(c[i] == 2) console.log('two')
//     if(c[i] == 3) console.log('three')
//     if(c[i] == 4) console.log('four')
//     if(c[i] == 5) console.log('five')
//     if(c[i] == 6) console.log('six')
//     if(c[i] == 7) console.log('seven')
//     if(c[i] == 8) console.log('eighth')
//     if(c[i] == 9) console.log('nine')
//     if(c[i] == 0) console.log('zero')
// }

