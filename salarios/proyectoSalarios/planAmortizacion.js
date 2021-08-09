
function onClickAmortizacion () {
    const pseudoValorPrestamo = document.getElementById("valorPrestamo");
    const valorPrestamo = pseudoValorPrestamo.value;
    const pseudoCantidadCuotas = document.getElementById("cantidadCuotas");
    const cantidadCuotas = pseudoCantidadCuotas.value;
    const pseudoPorcentajeInteres = document.getElementById("porcentajeInteres");
    const porcentajeInteres = pseudoPorcentajeInteres.value;

    const cuotaFinal = calcularPlanAmortizacion(valorPrestamo, cantidadCuotas, porcentajeInteres);
    const valorCuota = document.getElementById("valorCuota");
    valorCuota.innerText = cuotaFinal;
}


function calcularPlanAmortizacion (valorPrestamo, cantidadCuotas, porcentajeInteres) {
    const porcentajeInteresDef = porcentajeInteres / 100;
    const cuotaSinInteres = valorPrestamo / cantidadCuotas;
    const interes = porcentajeInteresDef * valorPrestamo;
    const amortizacionMensual = cuotaSinInteres; 
    
    const intereses = document.getElementById("intereses");
    intereses.innerText = interes;
    const amortizacion = document.getElementById("amortizacion");
    amortizacion.innerText = amortizacionMensual;
    
    const cuotaMensual = interes + cuotaSinInteres;
    return cuotaMensual;

    
}

