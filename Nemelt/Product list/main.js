let listEl = document.getElementById('list')
fetch('https://dummyjson.com/products')
.then((res) => res.json())
.then((productData) => {
  for(let i = 0; i < 30; i++){
    let divEl = document.createElement('div')
    divEl.innerHTML = `<div class="cards">
                          <img src="${productData.products[i].thumbnail}" class="img" alt="">
                          <div class="card-body">
                              <h4 class="card-title">${productData.products[i].title}</h4>
                              <div class="card-price">${productData.products[i].price}$</div>
                          </div>
                      </div>`

  listEl.append(divEl)
  }
   
})