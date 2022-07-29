
// PopUp header //
function popUpToggleHeader() {
    const popUpHeader = document.getElementById('popup-header');
    popUpHeader.classList.toggle('active')
}

// PopUp Producto //
function popUpToggleCategoria() {
    const popUpCategoria = document.getElementById('popup-categoria');
    popUpCategoria.classList.toggle('active')
}

// PopUp Producto - ContadorUnidades
const buttomCountPlus = document.getElementById('count-producto-icon-plus');
const buttomCountMinus = document.getElementById('count-producto-icon-minus')
const countProducts = document.getElementById('countProducts')
const productPrice = document.getElementById('product-price')
const cartPrice = document.getElementById('cart-price')

buttomCountPlus.addEventListener("click", CountPlus)
buttomCountMinus.addEventListener("click", CountMinus )


let count = parseInt(countProducts.textContent)
const priceProduct = parseInt(productPrice.textContent) 
let priceTotal = 0;
function CountPlus () {

    count = count + 1
    countProducts.innerHTML = ""
    countProducts.innerHTML = `<p>${count}</p>`
    cartPrice.innerHTML = ``  
    cartPrice.innerHTML = `<p>$${priceProduct*count}</p>`  
    priceTotal = priceProduct*count
}

function CountMinus () {
    let priceCart = priceProduct; 
    if (count > 1) {
        count = count - 1
        countProducts.innerHTML = ""
        countProducts.innerHTML = `<p>${count}</p>`
        cartPrice.innerHTML = ``  
        cartPrice.innerHTML = `<p>$${priceTotal - priceCart}</p>`  
        priceTotal = priceTotal-priceCart
        console.log(priceCart)
        console.log(priceTotal)
    }


}

