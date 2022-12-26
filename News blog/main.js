let cardTitle = document.getElementsByClassName('card-title')
let cardText = document.getElementsByClassName('card-text')
let cardBox = document.getElementsByClassName('card')
fetch('https://dummyjson.com/posts')
.then((res) => res.json())
.then((postData) => {
    for(let i = 0; i < 10; i++){
        cardTitle[i].innerHTML = postData.posts[i].title
    }

    for(let i = 0; i < 10; i++){
        cardText[i].innerHTML = postData.posts[i].body
        cardBox[i].style.overflow = "hidden";
    }
})