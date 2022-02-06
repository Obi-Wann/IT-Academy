
var cartList = [];
var cart = [];

//Variables
var total = 0;
let precioCartList=0;

//Acceder a elementos
const contenedor = document.querySelector('#listCar tbody');
const element = document.getElementById('preciototal')
const removeProduct =document.querySelector(`#listCar`);

eventListeners();
function eventListeners(){
    //Elimina Producto
    removeProduct.addEventListener(`click`, removeFromCart);
}
//Función limpia el contenedor
   function limpiarHTML(){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
   } 
   
//Función limpia el Precio Total
function limpiarPrecioTotal(){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
   }

// Exercise 1 
function buy(num) {         
const productId = products.find (e => e.id === num)
generateCart(productId);
printCart(); 
}

// Exercise 2
function cleanCart() {
console.log(" Remove All cart")
// cart=[];
cart.splice(0,cart.length);
printCart();
}

// Exercise 3.1
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes

    let costGrocery=0;
    let costBeauty=0;
    let costClothes=0;
   cart.forEach(e => {
        if(e.type=="grocery"){  
             costGrocery += (e.price*e.quantity)
             totalGrocery= costGrocery
            // console.log(`Tipo: ${e.type} total: ${totalGrocery}$`);
        }else if(e.type=="beauty"){  
            costBeauty += (e.price*e.quantity)
            totalBeauty = costBeauty
            // console.log(`Tipo: ${e.type} Total: ${totalBeauty}$`);
        }else if(e.type=="clothes"){     
            costClothes += (e.price*e.quantity)
            totalClothes= costClothes
            // console.log(`Tipo: ${e.type} Total: ${totalClothes}$`);
        }   
    });  
}
// Exercise 3.2
function calculateTotal() {
    let cost=0
    cart.forEach( e => cost += (e.price*e.quantity))
    precioCart= cost            
}

// Exercise 4
function generateCart(productId){  
    const existe = cartList.some( e => e.id === productId.id); 
    if(existe){
        // console.log(`Producto repetido`);//Actualizar cantidad 
         cartList.map(e => {
            if(e.id === productId.id){
                e.quantity++;
                e.subtotal=e.quantity*e.price;
                e.subtotalWithDiscount=productId.subtotal
                return e;//Devuelve objeto con cantidad actualizada          
            }else{
                return e;
            }
        });
        cartList=[...cartList];
        cart=cartList;     
    } else{
        // console.log(`Producto NO repetido`)//Agregar a carrito
        productId.quantity=1
        productId.subtotal=productId.price
        productId.subtotalWithDiscount=productId.subtotal
        cartList=[...cartList,productId]// cartList.push(productId)  
        cart=cartList;
    }  
}

// Exercise 5
function applyPromotionsCart() {    
   cart.forEach(e => {
        if(e.id ===1 && e.quantity >= 3){  
            e.price = 10;
            e.subtotalWithDiscount=e.price*e.quantity;
        }
        if(e.id ===3 && e.quantity >= 10){
            var num=0;
            num= (e.price*2)/3;
            e.price = num.toFixed(2);
            var numDiscuont=0;
            numDiscuont=e.price*e.quantity;
             e.subtotalWithDiscount=numDiscuont.toFixed(2);
        }
    });
}

// Exercise 6
// Ara implementarem la validació del formulari de checkout que es troba en l'arxiu checkout.js

//========================NIVEL2============================================

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(e){
    console.log(e.target.getAttribute(`data-id`));
     const productRemove =e.target.getAttribute(`data-id`);
    
    cart.forEach(e => {
     if(e.quantity > 1){  
         e.quantity--; 
           printCart();
         return e
     }else{
        cart=cart.filter(Remove =>{
            return Remove === productRemove;
        });
     }  
 }); 
    printCart();
    console.log(cart);
    console.log(cartList);
 }

// Exercise 9
function printCart(){ 
    //  cartList.forEach ((e) => console.log(`${e.name} - ${e.price}-${e.quantity}`) )           
 
    //Limpiar HTML
    limpiarHTML();  
    applyPromotionsCart()  

    //Crear HTML
    cart.forEach( e => {  
           
        const listaProductos =document.createElement("tr");
        listaProductos.classList.add("border-bottom")
        listaProductos.innerHTML=` 
        <td>${e.name}</td>
        <td>${e.type}</td>
        <td>${e.price}$</td>
        <td>${e.quantity}</td>  
        <td>${e.subtotal}$</td>  
        <td>${e.subtotalWithDiscount}$</td> 
        <button type="button" class="btn btn-danger remove-product" data-id="${e.id}"  >X</button>
        `;
        //Agregar HTML en el tbody
        contenedor.appendChild(listaProductos)
    });
  
    calculateTotal();
    calculateSubtotals();
    //Acceder elemento precio subtotal y mostrar
    totalGrocery=0;
    totalBeauty=0;
    totalClothes=0;
    calculateSubtotals();
     const newDiv = document.createElement("div") 
     newDiv.classList.add("modal-body")
     limpiarPrecioTotal()  
     element.appendChild(newDiv)
     newDiv.innerHTML=`<h5>Subtotal</h5></h6></br>Grocery: ${totalGrocery}$</br>
     Beauty :   ${totalBeauty}$</br>
     Clothes : ${totalClothes}$</h6>`

    //Acceder elemento precio total y mostrar
     const newDiv2 = document.createElement("div")  
     element.appendChild(newDiv2)
     newDiv2.innerHTML=`<h5 class="">Total Price:${precioCart}$ </h5>`
    
}
