// Заавар: n! - n факториал гэж уншина. Энэ нь 1,2,3,…,n тоонуудын үржвэр байна
// n!=1⋅2⋅3⋅⋯⋅n
// 5! = 120 / 1*2*3*4*5/
// Бодлого : 
// prompt - оор гараас тоо авч тэр тооныхоо факториалыг олох.

let number = prompt('Enter your number')
let mul = 1
for(let i = 1; i <= number; i++){
    mul = mul * i
}
console.log(mul)


