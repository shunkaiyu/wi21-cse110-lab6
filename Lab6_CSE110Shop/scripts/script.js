// Script.js

window.addEventListener('DOMContentLoaded', postData('https://fakestoreapi.com/products', { answer: 42 }));
var count = document.getElementById('cart-count');

async function postData(url = '', data = {}) {
  const response = await fetch(url);
  var data = await response.json();
  // console.log(JSON.stringify(data));
  // for(i = 0; i < data.length; i++){
  //   console.log(JSON.stringify(data[i].price));
  //   if(localStorage.getItem(data[i].id == null)){
  //     localStorage.setItem(data[i].id, data[i]);
  //   }
  // }
  if (localStorage.getItem('item_set') == null){
    localStorage.setItem('item_set', data); 
  }
  return data; 
}

class ProductContainer extends HTMLElement {
  constructor(){
    super();
    let objectArray = JSON.parse(localStorage.getItem('item_set'));
    for(let i = 0; i < objectArray.length; i++){
      let liObject = document.createElement('product-item');
      liObject.className = "[object object]";
      const shadowObject = liObject.shadowRoot;
      shadowObject.querySelector('img').src = objectArray[i].imgage;
      shadowObject.querySelector('img').alt = objectArray[i].title;
      shadowObject.querySelector('.price').textContent = JSON.stringify(objectArray[i].price);
      shadowObject.querySelector('.title').textContent = objectArray[i].title;
      shadowObject.querySelector('button').id = objectArray[i].id;

      if(localStorage.getItem(objectArray[i].id) == null){
        shadowObject.querySelector('button').setAttribute('unaddable', false);
      } else {
        shadowObject.querySelector('button').textContent = 'Remove from Cart';
        shadowObject.querySelector('button').setAttribute('unaddable', true);
      }

      shadowObject.querySelector('button').onclick = function(){myfunction(this)};
      
      document.getElementById('product-list').appendChild(liObject);
    }
    function myfunction(e) {
      if(e.getAttribute('unaddable') == false){
        count++;
        let c = document.getElementById('cart-count').innerHTML;
        localStorage.setItem('cart'. count);
        localStorage.setItem(e.id, 'unaddable');
        c = count;
        e.querySelector('button').textContent = 'Add to Cart';
      }
    }
  }
}


customElements.define('product-list', ProductContainer);