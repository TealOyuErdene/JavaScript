console.log('Function')
// 1. f(x,y)= x`2+y`2
function f1(x , y){
    console.log(Math.pow(x , 2) + Math.pow(y , 2))
}

//calling the f1 function
f1(3 , 4)


//2. f(x) = x`e
function f2(x){
    console.log(Math.pow(x , Math.E))
}
f2(3)


// 3. f(a , b) = a`2 - b`2
function f3(a , b){
    console.log(Math.pow(a , 2) - Math.pow(b , 2))
}
f3(4 , 3)


// 4. f(a , b) = &a`2 - b`1
function f4(a,b){
    console.log(Math.sqrt(Math.pow(a , 2) + Math.pow(b , 2)))
}
f4( 4 , 3)


//5. f(y) = y`2 - 2y + 4
function f5(y){
    console.log(Math.pow(y , 2) - 2 * y + 4)
}
f5(5)
 

//6. f(a , b) = a - b * (a`2 + b`2) - a
function f6(a , b){
    console.log(a - b * (Math.pow(a, 2) + Math.pow(b , 2)) - a)
}
f6(4, 1)


//7. f(a , b) = 2 * (a + b)
function f7(a , b){
    console.log(2 * (a + b))
}
f7(1 , 2)


//8. f(a , b) = (a + b)`2
function f8(a , b){
    console.log(Math.pow((a + b) , 2))
}
f8(1, 3)


//9. f(a , b) = a`2 - b`2
function f9(a , b){
    console.log(Math.pow(a , 2) - Math.pow(b , 2))
}
f9(2 , 1)


//10. f(a, b) = a * b 
function f10(a , b){
    console.log(a * b)
}
f10(2 , 3)


//11. f(a , b) = 3*(a * b)`2
function f11(a , b){
    console.log(3 * Math.pow((a * b) , 2))
}
f11(1 , 2)


//12. f(x, y) = 3 * x`3 -2 * y`3
function f12(x , y){
    console.log(3 * Math.pow(x , 3) - 2 * Math.pow(y , 3))
}
f12(2 , 2)


//13. f(a , b) = a / b
function f13(a , b){
    console.log(a / b)
}
f13(2 , 2)

// 14. f(y) = y`3 - 3y`2 + 8
function f14(y){
    console.log(Math.pow(y , 3) - 3 * Math.pow(y , 2) + 8)
}
f14(1, 2)


//15. f(x , y) = (1 / x)`2 - (1 / y)`2
function f15(x , y){
    console.log(Math.pow((1 / x), 2) - Math.pow((1 / y), 2))
}
f15(2 , 2)


//16. f(x ,y) = &x`2 -y`2
function f16(x ,y){
    console.log(Math.sqrt(Math.pow(x , 2) - Math.pow(y , 2)))
}
f16(3 , 2)


// 17 factorial
function factorial(x){
    let mul = 1
    for(let i = 1; i <= x; i++){
        mul = mul * i
    }
    console.log(mul)
}
factorial(5)


function myFunction(p1 , p2){
    const sum = p1 + p2
    return sum
}
console.log(myFunction(2 ,3))




function isEven(number){
    let result = ''
    if(number % 2 == 0){
        result = 'Even number'
    } else{
        result = 'Odd number'
    }
    return result
}
console.log(isEven(14))
console.log(isEven(13))



function findMax(a , b)
{
    if(a < b){
        return b
    }else{
        return a
    }
}
console.log(findMax(2 , 20))



let findMin = function(a , b){
    if(a > b){
        return b
    }else{
        return a
    }
}
console.log(findMin(2 , 19))



let max = 0;
const arr = [1, 2, 10, 254, -19];

let arrayMax = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (max <= array[i]) {
            max = array[i];
        }
    }
}

arrayMax(arr)
console.log(max);




