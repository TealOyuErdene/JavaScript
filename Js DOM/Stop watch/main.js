let startEl = document.getElementsByTagName('button')[0]
let stopEl = document.getElementsByTagName('button')[1].style.display = 'none'
let resetEl = document.getElementsByTagName('button')[2]

let minuteEl = document.getElementsByClassName('minute')[0]
let secondEl = document.getElementsByClassName('second')[0]
let centisecondEl = document.getElementsByClassName('centisecond')[0]

let second = 00
let minute = 00
let centisecond = 00
let interval;

function start(){
    interval = setInterval(() =>{
        centisecond++

        if(centisecond <= 9){
            centisecondEl.innerHTML = '0' + centisecond
        } else{
            centisecondEl.innerHTML = centisecond
        }

        if(centisecond ==100){
            centisecond = 0
            second++
            if(second <= 9){
                secondEl.innerHTML = '0' + second
            } else{
                secondEl.innerHTML = second
            }
        }
    
        if(second == 59){
            second = 0
            minute++
            if(minute <= 9){
                minuteEl.innerHTML = '0' + minute
            } else{
                minuteEl.innerHTML = minute
            }
        }
    }, 10)

    document.getElementsByTagName('button')[0].style.display = 'none'
    document.getElementsByTagName('button')[1].style.display = 'block'
}


function stop(){
    clearInterval(interval)
    document.getElementsByTagName('button')[1].style.display = 'none'
    document.getElementsByTagName('button')[0].style.display = 'block'
}


function reset(){
    clearInterval(interval)
    centisecond = '00'
    second = '00'
    minute = '00'
    centisecondEl.innerHTML = centisecond
    secondEl.innerHTML = second
    minuteEl.innerHTML = minute
    document.getElementsByTagName('button')[0].style.display = 'block'
    document.getElementsByTagName('button')[1].style.display = 'none'
}