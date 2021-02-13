// product-item.js

// class ProductItem extends HTMLElement {
//   constructor(){
//     super();
//     let shadowRoot = this.attachShadow({mode: 'open'});
//     //let item_info = this.getAttribute('item');
//     shadowRoot.innerHTML = `
//       <style>
//       .price {
//         color: green;
//         font-size: 1.8em;
//         font-weight: bold;
//         margin: 0;
//       }
      
//       .product {
//         align-items: center;
//         background-color: white;
//         border-radius: 5px;
//         display: grid;
//         grid-template-areas: 
//         'image'
//         'title'
//         'price'
//         'add';
//         grid-template-rows: 67% 11% 11% 11%;
//         height: 450px;
//         filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
//         margin: 0 30px 30px 0;
//         padding: 10px 20px;
//         width: 200px;
//       }
      
//       .product > button {
//         background-color: rgb(255, 208, 0);
//         border: none;
//         border-radius: 5px;
//         color: black;
//         justify-self: center;
//         max-height: 35px;
//         padding: 8px 20px;
//         transition: 0.1s ease all;
//       }
      
//       .product > button:hover {
//         background-color: rgb(255, 166, 0);
//         cursor: pointer;
//         transition: 0.1s ease all;
//       }
      
//       .product > img {
//         align-self: center;
//         justify-self: center;
//         width: 100%;
//       }
      
//       .title {
//         font-size: 1.1em;
//         margin: 0;
//         overflow: hidden;
//         text-overflow: ellipsis;
//         white-space: nowrap;
//       }
      
//       .title:hover {
//         font-size: 1.1em;
//         margin: 0;
//         white-space: wrap;
//         overflow: auto;
//         text-overflow: unset;
//       }
//       </style> 

//       <li class="product">
//         <img src=${this.getAttribute('item').image} alt=${this.getAttribute('item').description} width=200>
//         <p class="title">${this.getAttribute('item').title}</p>
//         <p class="price"> ${this.getAttribute('item').price} </p>
//         <button onclick="alert('Added to Cart!')">Add to Cart</button>
//       </li>
//     `;
//   }
// }


// customElements.define('product-item', ProductItem);




class ProductItem extends HTMLElement {
  constructor(){
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
    //let item_info = this.getAttribute('item');
    
    let img = document.createElement('img');
    img.setAttribute('src', this.getAttribute('item').image);
    img.setAttribute('alt', this.getAttribute('item').description);
    img.setAttribute('width', 200);
    let p = ducument.createElement('p');
    p.setAttribute('class', this.getAttribute('item').title);


    let style = document.createElement('style');
    style.textContent = `
      .price {
        color: green;
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
      }
      
      .product {
        align-items: center;
        background-color: white;
        border-radius: 5px;
        display: grid;
        grid-template-areas: 
        'image'
        'title'
        'price'
        'add';
        grid-template-rows: 67% 11% 11% 11%;
        height: 450px;
        filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
        margin: 0 30px 30px 0;
        padding: 10px 20px;
        width: 200px;
      }
      
      .product > button {
        background-color: rgb(255, 208, 0);
        border: none;
        border-radius: 5px;
        color: black;
        justify-self: center;
        max-height: 35px;
        padding: 8px 20px;
        transition: 0.1s ease all;
      }
      
      .product > button:hover {
        background-color: rgb(255, 166, 0);
        cursor: pointer;
        transition: 0.1s ease all;
      }
      
      .product > img {
        align-self: center;
        justify-self: center;
        width: 100%;
      }
      
      .title {
        font-size: 1.1em;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .title:hover {
        font-size: 1.1em;
        margin: 0;
        white-space: wrap;
        overflow: auto;
        text-overflow: unset;
      }
    `;

  shadowRoot.appendChild(style);
  shadowRoot.appendChild(img);
  shadowRoot.appendChild(p);
  }
}


customElements.define('product-item', ProductItem);
