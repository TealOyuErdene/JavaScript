let randomNumber = Math.floor(Math.random()*10+1)
for(let i = 0; i < 10;){
    let num = prompt('Toogoo oruulna uu')
    if(+num > randomNumber){
        alert('Oruulsan utga ih bn')
    }

    if(+num < randomNumber){
        alert('Oruulsan utga baga bn')
    }
    if(+num === randomNumber){
        alert('Zuv taalaa')
        break;
    }
}

