var brands_ctr = document.querySelector('.brands-ctr');
var search_bar = document.querySelector('.search');
var cart_ctr = document.querySelector('.cart-ctr');
var main = document.querySelector('.main');

var cart_ar =JSON.parse(localStorage.getItem('cart'))||[]

function show_cart() {
  main.style.display = 'none'
  search_bar.style.display = 'none'
  brands_ctr.style.display = 'none'
  cart_ctr.style.display = ''

  var html = '';
  total_amount=0; // from order.js
  cart_ar.forEach((cart,cart_index) => {
    
    product = cart.product;
    html+=`
    <div class="cart-left-ctr">
  <div class="cart-prod-ctr">
    <div class="prod-left">      
      <img src="${product.img}" alt="">
    </div>
    <div class="prod-right">
    <h3>Item Details</h3>
      <div class="prod-name"><h4>${product.name}</h4></div>
    <div class="cost-ctr">
      <span class="price"><h4>Price:</h4>${product.price}</span>
      <span class="count"><h4>Quantity:</h4>${cart.quantity}</span>
    </div>
    <button class="remove-prod" onclick="remove_from_cart(${cart_index})">Remove</button>
  </div>
    </div>    
  </div>`; 
  total_amount+=Number(cart.quantity*product.price)
  })
  
  
  html+=`<div class="cart-right-ctr">
  <h2>Bill Summary</h2>
    <div class="tot-price"><h4>Total Amount</h4><br>₹${total_amount}</div>
    <div class="delivery-date"><h4>Estimated delivery</h4><br>${d_date}</div>
    <div class="address" ><h4>Address</h4><br>
      <textarea id="address" style="height: 200px;"></textarea>
    </div>
    <button class="place-odr" onclick="add_to_order()">Place Order</button>

</div>
  `;

   
  cart_cnts.innerHTML = cart_cnt
  cart_ctr.innerHTML = html;


}




var cart_cnt = 0;
var cart_cnts = document.querySelector('.cart-cnt')
if(cart_ar.length>0) cart_ar.forEach(cart => cart_cnt+=cart.quantity)

cart_cnts.innerHTML = cart_cnt


function add_to_cart(id,product_cnt)
{
  for (let i = 0; i < cart_ar.length; i++) {
    if (cart_ar[i].product.id === id) {
      cart_ar[i].quantity += product_cnt;
      localStorage.setItem('cart',JSON.stringify(cart_ar))
      return;  
    }
  }
  products.forEach(product => {
    if(id===product.id) cart_ar.push({id:"c"+id,product,quantity:product_cnt})
      localStorage.setItem('cart',JSON.stringify(cart_ar))
  })
}

function remove_from_cart(cart_index)
{
  cart_cnt-= Number(cart_ar[cart_index].quantity)
  cart_ar.splice(cart_index,1)
  localStorage.setItem('cart',JSON.stringify(cart_ar))
  cart_cnts.innerHTML = cart_cnt
  show_cart()
}

function remove_from_cart_home_page(product_index)
{
  let cart_index=0;
  cart_ar.forEach((cart,index) => {
    if(cart.product.id === product_index)
    {
      cart_index=index;
    }
  })
  cart_ar.splice(cart_index,1)
  localStorage.setItem('cart',JSON.stringify(cart_ar))
}

function cart_added(event,id) {  

  let add_btn = event.target
  let ctr = event.target.closest('.product-ctr')
  let product_cnt = ctr.querySelector('.product-cnt')
  if (add_btn.textContent.trim() === 'Add to Cart') {
    add_btn.textContent = 'Added ✔'
    add_btn.classList.add('added')
    cart_cnt += Number(product_cnt.value);
    
    product_cnt.disabled=true;  // when product is added, we should disable the select option..
    add_to_cart(id,Number(product_cnt.value))
  }
  else {
    add_btn.classList.remove('added')
    add_btn.textContent = 'Add to Cart'
    cart_cnt -= Number(product_cnt.value);

    product_cnt.disabled=false;// when product is removed, we should enable the select option..
    remove_from_cart_home_page(id)
  }
  
  cart_cnts.innerHTML = cart_cnt

  
}