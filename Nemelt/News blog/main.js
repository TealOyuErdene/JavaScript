let cardTitle = document.getElementsByClassName('card-title')
let cardText = document.getElementsByClassName('card-text')
let cardBox = document.getElementsByClassName('card')

let imageEl = document.getElementsByClassName('images')
fetch('https://dummyjson.com/posts')
.then((res) => res.json())
.then((postData) => {
    for(let i = 0; i < 8; i++){
        cardTitle[i].innerHTML = postData.posts[i].title
    }

    for(let i = 0; i < 8; i++){
        cardText[i].innerHTML = postData.posts[i].body
        cardBox[i].style.overflow = "hidden";
    }

    for(let i = 0; i < 8; i++){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((imageData) => {
            let img = document.createElement('img')
            img.src = imageData[i].url
            img.classList.add('thumbnail')
            imageEl[i].append(img)
        })
    }
 
})

let userProfile = document.getElementById('userProfile')
fetch('https://dummyjson.com/users')
.then((res) => res.json())
.then((userData) => {

    fetch('https://dummyjson.com/comments')
    .then((res) => res.json())
    .then((commentData) => {
        for(let i = 10; i < 15; i++){
        let divEl = document.createElement('div')
            divEl.innerHTML =  `<div class="col-md-2" style="margin-top: 60px;">
                                     <a href="author.html"><img class="author-thumb" src="${userData.users[i].image}" alt="Sal"></a>
                                </div>
                                <div class="col-md-10">
                                    <span class="link-dark">${userData.users[i].firstName}</span>
                                    <a class="btn follow">Like</a>
                                    <span class="author-description">${commentData.comments[i].body}</span> <span class="post-date">${userData.users[i].birthDate}</span>
                                    <span class="post-read"> ${userData.users[i].age} min read</span>
                                </div>`
         userProfile.append(divEl) 
        }
        }   
    )
})