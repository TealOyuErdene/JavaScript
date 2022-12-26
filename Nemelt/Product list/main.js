let listEl = document.getElementById('list')
fetch('https://dummyjson.com/products')
.then((res) => res.json())
.then((productData) => {
    let divEl = document.createElement('div')
    divEl.innerHTML = ` <div>
    <img src="" alt="">
    <div class="card-body">
      <div class="card-title"></div>
      <div class="card-price"></div>
    </div>
  </div>`
    

})