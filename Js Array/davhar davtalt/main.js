
let a = [4, 2, 34, 4, 1, 12, 1, 4];

let count = 0
for(let i = 0; i < a.length; i++){
    for(let j = i + 1; j < a.length; j++){
        if(a[j] == a[i] && a[j] != '*'){
            a[j] = '*';
            count++
        }
    }
    // console.log (`songoj awsn ni: ${a[i]}`)
    // console.log (a);
    if(count > 0){
        console.log(a[i])
        count = 0
    }
}