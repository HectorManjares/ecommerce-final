import { localItems, findLocalItem } from "../data/db.js"

/* AGREGAR AL CARRITO */

export function cartFunctionality( ){
    //Arreglo con todos los botones
    const btns = document.querySelectorAll( ".btn-add" ) //NodeList
    const cart = []
    
    btns.forEach( button =>{
        button.addEventListener( "click", (e) => {
            const id = parseInt(button.parentElement.id)
            //const selectedProduct = localItems.find( item => item.id === id )
            //cart.push( selectedProduct )
            console.log(`Valor del id: ${id}`);
            addCart(id)
            agregarContador()
            //console.log( cart )
        })
    })
}

function addCart(id){
    if(!window.localStorage.getItem('cart')){
        window.localStorage.setItem('cart',JSON.stringify([]))
    }
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    console.log(`Just read: ${cart.length}`);
    for(let i in cart) {
        if(cart[i]['id'] === id){
            const local_product = findLocalItem(id)
            //console.log( local_product );
            const product_left = local_product.quantity - cart[i]['quantity']
            if( product_left > 0 ){
                //Linea del problema
                //antes
                //cart[i]['quantity'] += 1
                cart[i]['quantity'] = cart[i]['quantity'] + 1
                console.log(`before save: ${cart.length}`);
                window.localStorage.setItem('cart',JSON.stringify(cart))
                return true
            }else{
                return false
            }
        }
    }
    //TODO: controlar si el producto tiene stock inicial cero
    cart.push({
        id: id,
        quantity: 1
    })
    window.localStorage.setItem('cart',JSON.stringify(cart))
    return true    
}

let valor = 0
function agregarContador(){
    let contador = document.querySelector(".counter");
    valor++;
    contador.textContent = valor;
}