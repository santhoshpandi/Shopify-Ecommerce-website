var brands_ctr = document.querySelector('.brands-ctr');
var search_bar = document.querySelector('.search');
var cart_ctr = document.querySelector('.cart-ctr');
var main = document.querySelector('.main');


const product_box = document.querySelector('.main')
var products=[]

// To read the json file from other location, we have to use fetch syntax such as readfile.. ☺


// But fetch is an Async function, so it will execute lastly after all the funtion in js.. so, to avoid the async nature, you have to call the display function inside the fetch ..
process()
function process()
{
  fetch('scripts/data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();  // Parse the JSON file
  })
  .then(data => {
    // console.log('fetch')
    products=data;
    generate_items(products)  //To call our function
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });
}




function generate_items(products){

  let html='';

  products.forEach(product => 
  {
    html+= `
        <div class="product-ctr">
        <div class="product-img">
          <img src="${product.img}" alt="">
        </div>
        <div class="product-name">${product.name}</div>
        <div class="product-rating">
          <img src="images/rating_images/rating-${product.ratings*10}.png" alt="Product Image Loading...😁">
        </div>
        <div class="price">₹${product.price}</div>
        <div class="product-count-ctr">
          <select name="product-cnt" id="" class="product-cnt">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="add-cart">
          <button class="add-cart-btn" onclick="cart_added(event,${product.id})">
          Add to Cart
          </button>
        </div>
        </div>
        `;
  })

  main.style.display=''
  search_bar.style.display=''
  brands_ctr.style.display='none'
  cart_ctr.style.display='none'
  
  product_box.innerHTML = html;

}


const search = document.querySelector('.search-items')

function filter()
{
  // console.clear()
  let srch=search.value.toLowerCase().trim()
  var filtered_products=products.filter(product => {
    if(product.name.indexOf(srch)>-1){
      return product
    }
  })
  generate_items(filtered_products)
}