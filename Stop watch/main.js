let startEl = document.getElementsByTagName('button')[0]
let stopEl = document.getElementsByTagName('button')[1]
let resetEl = document.getElementsByTagName('button')[2]

let minuteEl = document.getElementsByClassName('minute')[0]
let secondEl = document.getElementsByClassName('second')[0]
let centisecondEl = document.getElementsByClassName('centisecond')[0]

startEl.style.cssText = "background-color: #4caf50; font-size:20px; border: none; border-radius: 50%; width: 100px; height: 100px; color: white; cursor: pointer;"
stopEl.style.cssText = "background-color: #f44336; font-size:20px; border: none; border-radius: 50%; width: 100px; height: 100px; color: white; cursor: pointer;"
resetEl.style.cssText = "background-color: #2196f3; font-size:20px; border: none; border-radius: 50%; width: 100px; height: 100px; color: white; cursor: pointer;"

let second = 00

function start(){
    // let time = 0
    // setInterval(centisecond, 10)
    // function centisecond(){
    //   centisecondEl.innerHTML = time
    //   time++
    // }

    // if(centisecondEl.innerHTML == 100){
    //     centisecondEl
    // }
    


    startEl.style.backgroundColor = 'black'
}


function stop(){
    
}


function reset(){
    
}