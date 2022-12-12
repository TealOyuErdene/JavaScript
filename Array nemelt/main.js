
//1. tegsh elementuudiin niilber
let arr = [4, 3, 7, 8, 2]
let sum = 0
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        sum = sum + arr[i]
    }
}
console.log(sum)

//2. index ni tegsh bg elementuudiin niilber
let result = 0
for(let i = 0; i < arr.length; i++){
    if(i % 2 == 0){
        result = result + arr[i]
    }
}
console.log(result)

//3. element ni tegsh bol indexiin niilber
let num = 0
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        num = num + i
    }
}
console.log(num)