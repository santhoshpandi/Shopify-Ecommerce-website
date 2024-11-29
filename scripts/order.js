

var order_ar = JSON.parse(localStorage.getItem('order'))||[]
var oid=order_ar.length+1;
var total_amount=0;

var two_days_after = new Date();
two_days_after.setDate(two_days_after.getDate()+2);
let date = two_days_after.getDate();
let month = two_days_after.getMonth()+1; // Add 1 because months are 0-based
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
    alertbox.render({
      alertIcon: 'warning',
      title: 'Warning',
      message: 'Cart is Empty 😥',
      btnTitle: 'Ok',
      });
  }
  else if(address.trim().length==0)
  {
    alertbox.render({
      alertIcon: 'warning',
      title: 'Warning',
      message: 'Kindly enter your address 😋',
      btnTitle: 'Ok',
      });
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
      speak()
      show_pop_up()
      show_cart();
  }
  localStorage.setItem('order',JSON.stringify(order_ar))
}

function speak() {
  const utterance = new SpeechSynthesisUtterance("Thank you for your purchase.. kindly link with us");

  
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[1]; 

  speechSynthesis.speak(utterance);
}

function show_pop_up()
{
  alertbox.render({
    alertIcon: 'success',
    title: 'Thank You for your purchase!',
    message: 'Order Confirmed 😎',
    btnTitle: 'Ok',
    themeColor: '#4fcc33',
     btnColor: '#4fcc33',
    btnColor: true
    });
}


console.log(order_ar)