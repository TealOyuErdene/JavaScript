// let num = 1

//  while(num <= 12){
//     console.log(num)
//     num = num+1
//  }

 

//  for(let i = 0; i <= 20; i ++){
//     console.log(i) //index
//  }


 
// const name = 'Mike'
// const question = `Hi Hi ${name} Hi Hi`




const answer = 111
let message = 'You\'are blocked!'
// password =prompt('Nuuts ugee oruulna uu')

for(let i = 5;  i > 0; i-- ){
   const question = prompt(`Enter your password, You've ${i} times try.`)
   if(question == answer){
      message = 'Successful!'
      break;
   }
}
   alert(message)






