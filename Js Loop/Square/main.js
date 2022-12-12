const num = prompt('Enter number of rows')
let output = ' '

for(let i = 1; i <= num; i++){
    for(let j = 1; j <= num; j++){
        if(i == 1 || j == 1 || j == num || i == num){
            output += '* '
        }
        else{
            output += '  '
        }
    }
    output += '\n '
}
console.log(output)
