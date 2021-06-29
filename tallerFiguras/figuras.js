// codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;    
} 

console.groupEnd();

//codigo triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


console.groupEnd();


//codigo Circulos
console.group("Circulos");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return  diametro * PI;
} 

function areaCirculo(radio) {
    return (radio * radio) * PI;
}


console.groupEnd();


//Aqui interactuamos con HTML

//Funciones para Cuadrados

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Funciones para triangulos

function calcularPerimetroTriangulo() {
    const input = document.getElementById("inputTriangulo1");
    const value1 = input.value;
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = input.value;
    const input3 = document.getElementById("inputTriangulo3");
    const value3 = input.value;
    
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("inputTriangulo1");
    const value1 = input.value;
    const input2 = document.getElementById("inputAlturaTriangulo");
    const altura = input.value;

    const area = areaTriangulo(value1, altura);
    alert(area);
}

//Funcionas circulos


function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

// Altura Triangulo Isosceles

