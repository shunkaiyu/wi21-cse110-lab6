// Script.js
// localStorage.clear();
var count_cart = document.getElementById('cart-count');
var c = document.getElementById('cart-count').innerHTML;
if(localStorage.getItem('count') == null) {
  count_cart.textContent = 0;
} else{
  count_cart.textContent = localStorage.getItem('count');
} 
window.addEventListener('DOMContentLoaded', ()=>{

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {

  if (localStorage.getItem('item_set') == null){
    localStorage.setItem('item_set', JSON.stringify(data)); 
  }
  // console.log(JSON.stringify(data));

  let objectArray = JSON.parse(localStorage.getItem('item_set'));

  for(let i = 0; i < objectArray.length; i++){
    
    let liObject = document.createElement("product-item");
    liObject.className = "[object object]";
  
    let shadowObject = liObject.shadowRoot;
    // console.log(shadowObject == null);
    shadowObject.querySelector('img').src = objectArray[i].image;
    shadowObject.querySelector('img').alt = objectArray[i].title;
    shadowObject.querySelector('.price').textContent = '$' + objectArray[i].price;
    shadowObject.querySelector('.title').textContent = objectArray[i].title;
    shadowObject.querySelector('button').id = objectArray[i].id;

    if(localStorage.getItem(objectArray[i].id) == 1){
      shadowObject.querySelector('button').textContent = 'Remove from Cart';
      shadowObject.querySelector('button').setAttribute('addable', false);
    } else {
      shadowObject.querySelector('button').textContent = 'Add to Cart';
      shadowObject.querySelector('button').setAttribute('addable', true);
    }

    shadowObject.querySelector('button').onclick = function(){myfunction(this)};

    document.getElementById('product-list').appendChild(liObject);
}
    function myfunction(e) {

      c = localStorage.getItem('count');

      if(localStorage.getItem(e.id) == 1){
        if(c > 0){
          c--;
          localStorage.setItem(e.id, 0);
          localStorage.setItem('count', c);
          e.textContent = 'Add to Cart';
          alert('Removed from Cart!');
          }
      } else {
          console.log(c);
          c++;
          console.log(c);
          localStorage.setItem(e.id, 1);
          localStorage.setItem('count', c);
          e.textContent = 'Remove from Cart';
          alert('Added to Cart!');
      }
      count_cart.textContent = c;
    }
  
})})