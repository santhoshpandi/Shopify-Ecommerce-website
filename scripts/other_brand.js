var brands_ctr = document.querySelector('.brands-ctr');
var search_bar = document.querySelector('.search');
var cart_ctr = document.querySelector('.cart-ctr');
var main = document.querySelector('.main');

function show_other_brands()
{
  var html=`
    <div class="brand-ctr">
    <h2>Amazon</h2>
    <div class="link-ctr">
      <a href="https://www.amazon.in/" class="brand">
        <img src="images/other_brands/amazon_cover.jpg">    
      </a>
    </div>
  </div>
  <div class="brand-ctr" style="background-color: #0094DB;">
    <h2>Flipkart</h2>
    <div class="link-ctr" >
      <a href="https://www.flipkart.com/" class="brand">
        <img src="images/other_brands/flipkart_cover.jpg">  
      </a>
    </div>
  </div>
  <div class="brand-ctr" style="background-color: #FFFFFF;">
    <h2>Myntra</h2>
    <div class="link-ctr" >
      <a href="https://www.myntra.com/" class="brand">
        <img src="images/other_brands/myntra_cover.jpg">  
      </a>
    </div>
  </div>
  `;

  main.style.display='none'
  search_bar.style.display='none'
  cart_ctr.style.display='none'
  brands_ctr.style.display=''


  brands_ctr.innerHTML=html;
}