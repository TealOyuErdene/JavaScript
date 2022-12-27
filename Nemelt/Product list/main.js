// let listEl = document.getElementById('list')
// fetch('https://dummyjson.com/products')
// .then((res) => res.json())
// .then((productData) => {
//   for(let i = 0; i < 30; i++){
//     let divEl = document.createElement('div')
//     divEl.innerHTML = `<div class="cards">
//                           <img src="${productData.products[i].thumbnail}" class="img" alt="">
//                           <div class="card-body">
//                               <h4 class="card-title">${productData.products[i].title}</h4>
//                               <div class="card-price">${productData.products[i].price}$</div>
//                           </div>
//                       </div>`

//   listEl.append(divEl)
//   }
   
// })

let listEl = document.getElementById('list')
fetch('https://dummyjson.com/products')
.then((res) => res.json())
.then((productData) => {
  for(let i = 0; i < 30; i++){
    let divEl = document.createElement('div')
    divEl.innerHTML = `<div class="card" style="width: 18rem;">
                      <img src="${productData.products[i].thumbnail}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${productData.products[i].title}</h5>
                        <p class="card-text">${productData.products[i].price}$</p>
                      </div>
                    </div>`

  listEl.append(divEl)
  }
   
})