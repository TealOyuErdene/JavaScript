// prompt оор n тоо орж ирэхэд тухайн n хүртлэх ширхэг Fibonacci дарааллын тоог хэвлэнэ үү.
// Example 1: input (5) -> 1 1 2 3 5 


let n = prompt('Enter your number')
let a = 0
let b = 1
console.log(b)
let c = 0
for(let i = 0; i < n - 1; i++){
    c = a + b
    a = b
    b = c
    console.log(c)
}