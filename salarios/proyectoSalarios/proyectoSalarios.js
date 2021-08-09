// var capacidadEndeudamiento;
const porcentajeEndeudamiento = 0.4;



function onClickEndeudamiento () {
    const pseudoSalario = document.getElementById("salario");
    const salario = pseudoSalario.value;
    const pseudoGastosFijos = document.getElementById("gastosFijos");
    const gastosFijos = pseudoGastosFijos.value;

    const capacidadEndeudamiento = calculadoraEndeudamiento(salario, gastosFijos);
    const resultE = document.getElementById("resultE");
    resultE.innerText = "Puedes pagar una cuota aproximada de $"+capacidadEndeudamiento + " mensuales.";
}
// Funcion que calcula la capacidad de endeudamiento
function calculadoraEndeudamiento (salario, gastosFijos) {
     return (salario - gastosFijos) * porcentajeEndeudamiento;
}




// var a = prompt("Ingresa tu salario");
// var b = prompt("Ingresa un aproximado de tus gastos fijos");
// var x = capacidadEndeudamiento(a, b);

// console.log(capacidadEndeudamiento);