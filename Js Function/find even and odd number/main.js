// 1. 2 тоон утга авдаг 2 function үүсгэ.
// 2. 2 авсан тоон утгын хоорондох тэгш тоонуудын array буцаадаг 1 function.
// 2. 2 авсан тоон утгын хоорондох сондгой тоонуудын array буцаадаг 1 function.

function number(a , b){
    let arrayEven = [];
    let arrayOdd = [];
    for(let i = a; i <= b; i++){
        if(i % 2 == 0){
            arrayEven[arrayEven.length] = i;
        }
        
        if(i % 2 == 1){
            arrayOdd[arrayOdd.length] = i;
        }
    }
    return {arrayEven , arrayOdd}
}
console.log(number(1 , 10))