let n = prompt('Toogoo oruul')
let huvaagch = 2
let count = 2

while(n <= 100){
    while(huvaagch < n){
        if(n % huvaagch != 0){
            huvaagch++
        }
        else{
            count++
            break;
        }
    }

    if(count == 2){
        console.log(n + ' Anhnii too mun')
    }
    else{
        console.log(n + ' Anhnii too bish')
    }
    n++
    count = 2
    huvaagch = 2
    
}







