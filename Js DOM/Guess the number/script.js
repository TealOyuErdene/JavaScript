let n = Math.floor(Math.random() * 20) + 1

let inputEl = document.getElementsByClassName('guess')[0];

let messageEl = document.getElementsByClassName('message')[0];

let scoreEl = document.getElementsByClassName('score')[0];

let highEl = document.getElementsByClassName('highscore')[0]

let button = document.getElementsByClassName('btn check')[0]


function checkButton(){
    let inputValue = Number(inputEl.value);

    let scoreNumber = Number(scoreEl.innerHTML);

    let highNumber = Number(highEl.innerHTML)

    if(isNaN(inputValue)){
        messageEl.innerHTML = 'Тоо оруулна уу'
    }else{
        if(inputValue < n){
            if(scoreNumber - 1 === 0){
                lose()
            }else{
                messageEl.innerHTML = 'Бага байна'
            }
            scoreEl.innerHTML = scoreNumber -1

        }
        else if(inputValue > n){
            if(scoreNumber - 1 === 0){
                lose()
            }else{
                messageEl.innerHTML = 'Их байна'
            }
            scoreEl.innerHTML = scoreNumber -1

        }else{
            messageEl.innerHTML = 'Зөв таалаа'
            document.body.style.backgroundColor = '#60b347'
            button.style.display = 'none'

            if(scoreNumber > highNumber){
                highEl.innerHTML = scoreNumber
            }
        }
    }
}

function lose(){
    messageEl.innerHTML = 'Та хожигдлоо'
    button.style.display = 'none'
}

function resetGame(){
    n = Math.floor(Math.random() * 20) + 1
    button.style.display = 'block'
    document.body.style.backgroundColor = '#222'
    scoreEl.innerHTML = 20
    messageEl.innerHTML = 'Тааж эхлээрэй...'
    inputEl.value = ''
}