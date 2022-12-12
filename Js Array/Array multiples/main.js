let arr1 = [3, 45, 23, 78, 34];  // 5 [3, 45, 23, 78, 34, " "]
let arr2 = [4, 2, 34, 4, 12, 1]; // 6  
let zoruu;
zoruu = arr2.length - arr1.length; // 6 - 5 = 1
arr1.length = arr1.length + zoruu; // 5 = 5 + 1  --->   6

for(let i = 5; i < arr1.length; i++) // 3, 45, 23, 78, 34
{
    arr1[i] = 1;
}

let mul = 1
let k = ''
for(let i = 0; i < arr1.length; i++){
    mul = arr1[i] * arr2[i]
    k = k + mul
    k += ' '
}
console.log(k)



