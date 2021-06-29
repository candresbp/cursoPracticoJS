const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function buttonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    // Escribe el text en el "p" que tenemos en html 
    const ResultP = document.getElementById("ResultP");
        ResultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

function aplicarCupon() {
    const cupon1 = document.getElementById("cupon1");
    const aplicarCupon1 = cupon1.click
    const cupon2 = document.getElementById("cupon2");
    const cupon3 = document.getElementById("cupon3");
    
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })