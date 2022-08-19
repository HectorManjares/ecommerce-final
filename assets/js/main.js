import { items } from './data/db.js'
import { productos } from './components/productos.js'
import { cartFunctionality } from './components/carrito.js'

document.addEventListener( "DOMContentLoaded", () =>{
    productos()
    load()
    showProducts( items )
})

/* =========== LOADER ========== */
const loader = document.getElementById( "loader" )
function load () {
    setTimeout(() => {
        loader.classList.add( "hide" )
    }, 3000);
}

/* =========DARK MODE======== */
const themeButton = document.getElementById( "theme-button" )

themeButton.addEventListener( "click", () =>{
    document.body.classList.toggle( "dark-theme" )

    if( themeButton.classList.contains( "bx-moon" ) ){
        themeButton.classList.replace( "bx-moon", "bx-sun" )
    }else{
        themeButton.classList.replace( "bx-sun", "bx-moon" )
    }
})

/*======== BURGER MENU =============*/

/*=======  CARRITO =========== */

const cartOpen = document.getElementById( "cart-shop" )
const cartClose = document.getElementById( "close-cart" )
const cartContainer = document.getElementById( "cart-container" )

cartOpen.addEventListener( "click", () => {
    cartContainer.classList.remove( "hide" )
})

cartClose.addEventListener( "click", () => {
    cartContainer.classList.add( "hide" )
})



/* ========SCROLL========= */

const header = document.getElementById("header")

window.addEventListener( "scroll", () =>{
    if( window.scrollY >= 50 ){
        header.classList.add("scroll-header")
    }else{
        header.classList.remove("scroll-header")
    }
})

/* AÑADIR PRODUCTO */

const productContainer = document.querySelector( "#products-list" )

function showProducts( products ){
    let fragment = ``

    products.map( product => {
        fragment += `
        <div class="product-card"id="${product.id}">
	   <div class="product-card-image_cont">
            <img src=${product.image} alt=${product.name}>
	   </div>
       <button class="btn-add"><i class='bx bx-plus' ></i></button>
	   <div class="product-card_info">
		<h2 class="product-card_price">$${product.price} |<span class="product-card_quantity">Stock: ${product.quantity}</span></h2>
		<h3 class="product-card_category">${product.category}<h3>
	   </div>
        </div>
        ` 
})

    productContainer.innerHTML = fragment

    cartFunctionality()
}

/* ========Añadir carrito por click========= */
/*


    products.map( product => {
        fragment += `
        <div class="cart-item-info" id="${product.id}">
          <div class="cart-imagen" id="cart-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="cart-item-info_quantitative" id="item-info">
            <div  class="cart-info_quantitative">
              <h3 class="tipe-item" id="tipe">${product.category}</h3>
            <span class="info-stock" id="stock">Stock:${product.quantity}|
              <span class="price_item-cart" id="price_item">$${product.price}00</span>
            </span>
            <span class="sub-price-item-stock" id="sub-price">Subtotal = $5.00</span></div>
            <div class="cart-info-count">
              <button class="counter-"><i class='bx bx-minus'></i></button>
              <span class="counter-cart-intem">1units</span>
              <button class="counter-"><i class='bx bx-plus' ></i></button>
              <button class="item-delete"><i class='bx bx-trash' ></i></box-icon></button>
            </div>
          </div>
        </div>
        ` 

    <article class="cart__card">
          <div class="cart__box">
            <img src="assets/img/featured2.png" alt="Shirts" class="cart__img">
          </div>
  
          <div class="cart__details">
            <h3 class="cart__title">Shirts</h3>
            <span class="cart__stock">Stock: 13 | <span class="cart__price">$24.00</span></span>
            <span class="cart__subtotal">
              Subtotal: $24.00
            </span>
  
            <div class="cart__amount">
              <div class="cart__amount-content">
                <span class="cart__amount-box minus" data-id="2">
                <i class="bx bx-minus"></i>
                </span>
  
                <span class="cart__amount-number">1 units</span>
  
                <span class="cart__amount-box plus" data-id="2">
                <i class="bx bx-plus"></i>
                </span>
              </div>
  
              <i class="bx bx-trash-alt cart__amount-trash" data-id="2"></i>
            </div>
          </div>
        </article>
*/


//CARRUSEL

const carrusel = document.querySelector(".carrusel-img");

let maxScrolleft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft === maxScrolleft) {
            step = step * -1;
        } else if (carrusel.scrollLeft === 0) {
            step = step * -1;
        }

    }, 10);
};

const stop = () => {
    clearInterval( intervalo );
};

carrusel.addEventListener('mouseover', () => {
    stop();
});

carrusel.addEventListener('mouseout', () => {
    start();
});

start();