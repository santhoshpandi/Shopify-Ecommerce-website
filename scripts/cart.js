var cart_cnt=0;
var cart_cnts = document.querySelector('.cart-cnt')
function cart_added(event)
{
   
  let add_btn = event.target
  let ctr = event.target.closest('.product-ctr')
  let product_cnt = ctr.querySelector('.product-cnt')
  if(add_btn.textContent.trim()==='Add to Cart')
  {
    add_btn.textContent='Added ✔'
    add_btn.classList.add('added')
    cart_cnt+=Number(product_cnt.value);
  }
  else{
    add_btn.classList.remove('added')
    add_btn.textContent='Add to Cart'
    cart_cnt-=Number(product_cnt.value);
  }
  cart_cnts.innerHTML = cart_cnt
}