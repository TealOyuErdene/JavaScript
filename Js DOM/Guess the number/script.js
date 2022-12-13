let n = 20

function checkButton(){
    const inputEl = document.getElementsByClassName('guess')[0];
    const inputValue = Number(inputEl.value);
    
    const messageEl = document.getElementsByClassName('message')[0];

    let scoreEl = document.getElementsByClassName('score')[0];
    let scoreNumber = Number(scoreEl.innerHTML);

    if(isNaN(inputValue)){
        messageEl.innerHTML = 'Тоо оруулна уу'
    }else{
        if(inputValue < n){
            messageEl.innerHTML = 'Бага байна'
            scoreEl = scoreNumber -1

        }
        else if(inputValue > n){
            messageEl.innerHTML = 'Их байна'
            scoreEl = scoreNumber -1

        }else{
            messageEl.innerHTML = 'Зөв таалаа'
            document.body.style.backgroundColor = '#60b347'
        }
    }
}