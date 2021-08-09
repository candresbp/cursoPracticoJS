
function onClickAhorro () {
    const pseudoSalario1 = document.getElementById("salario1");
    const salario1 = pseudoSalario1.value;
    const pseudoPorcentajeAhorro = document.getElementById("porcentajeAhorro");
    const PorcentajeAhorro = pseudoPorcentajeAhorro.value;

    const capacidadAhorro = calcularCapacidadAhorro(salario1, PorcentajeAhorro);
    const resultA = document.getElementById("resultA");
    resultA.innerText = "Tu porcentaje de ahorro seria $"+capacidadAhorro + " mensuales.";
}


// Calcula el procentaje del salario que va a ahorrar
function calcularCapacidadAhorro (salario1, porcentaje) {
    const porcentajeAhorro = porcentaje / 100; 
    return salario1 * porcentajeAhorro;
}

