let topEl = document.getElementById('top')
let profileEl = document.getElementById('profile')
let nameEl = document.getElementById('name')
let bottomEl = document.getElementById('bottom')
let listEl  =document.getElementById('list')

fetch('https://randomuser.me/api/')
.then((res) => res.json())
.then((userData) => {
    let picture = document.createElement('img')
    picture.src = userData.results[0].picture.large
    profileEl.append(picture)


    let firstName = document.createElement('div')
    firstName.innerHTML = userData.results[0].name.first
    let lastName = document.createElement('div')
    lastName.innerHTML = userData.results[0].name.last
    nameEl.append(firstName, lastName)


    let email = document.createElement('div')
    email.innerHTML = userData.results[0].email
    let phone = document.createElement('div')
    phone.innerHTML = userData.results[0].phone
    topEl.append(email, phone)

    let country = document.createElement('div')
    country.innerHTML = 'Country: ' + userData.results[0].location.country
    

    let city = document.createElement('div')
    city.innerHTML = 'City: ' + userData.results[0].location.city

    let date = document.createElement('div')
    date.innerHTML = 'Date: ' + userData.results[0].dob.date
    listEl.append(country, city, date)
})

