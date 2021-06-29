//Altura Triangulo Isosceles

function calcularAltura() {
    var input = document.getElementById("inputTrianguloI1");
    const lado1 = input.value;
    var input = document.getElementById("inputTrianguloI2");
    const lado2 = input.value;
    var input = document.getElementById("inputTrianguloI3");
    const base = input.value;

    if (lado1 != lado2) {
        alert("Elado 1 y 2 deben ser iguales para que sea un triangulo isosceles")
    } else if(lado1 < (base/2)) {
        alert("La longitud de base debe ser mayor a los lados para que este sea un triangulo isosceles")
    }else {
        alert("Los datos han sido ingresados satisfactoriamente")
    }

    const altura = alturaTrianguloIsosceles(lado1, base);
    alert(altura);
}


function alturaTrianguloIsosceles(lado1, base) {
    return Math.sqrt(lado1*lado1-((base / 2) * (base / 2)))
} 