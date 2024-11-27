var order_ar = JSON.parse(localStorage.getItem('order'))||[]
var oid=order_ar.length+1;
var total_amount=0;

var two_days_after = new Date();
two_days_after.setDate(two_days_after.getDate()+2);
let date = two_days_after.getDate();
let month = two_days_after.getMonth();
let year = two_days_after.getFullYear();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekday[two_days_after.getDay()];

 var d_date = date+"-"+month+"-"+year+" ("+(day)+")";


function add_to_order()
{
  let address= document.getElementById('address').value
  let carts = [...cart_ar]; // to copy the array
  if(cart_ar.length==0)
  {
    alert("Cart is Empty 😅")
  }
  else if(address.trim().length==0)
  {
    alert("Enter valid Address 😅")
  }
  else if(confirm("Confirm the order placement 🙋‍♂️"))
  {
    order_ar.push(
      {
        id:"o"+oid++,
        cart:carts,
        estimated_delivery_date:d_date,
        billing_time: new Date(),
        address:address,
        total_price:total_amount        
      })
      cart_ar.splice(0)
      localStorage.setItem('cart',JSON.stringify(cart_ar))
      cart_cnt=0
      console.log(order_ar)
      window.print()
      show_cart();
  }
  localStorage.setItem('order',JSON.stringify(order_ar))
}


console.log(order_ar)