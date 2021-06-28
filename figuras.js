// codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//codigo triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;

const ladoTriangulo2 = 6;

const baseTriangulo = 4;


console.log(
    "Los lados del triangulo miden: "
     + ladoTriangulo1 
     + "cm, " 
     + ladoTriangulo2 
     + "cm, " 
     + baseTriangulo 
     + "cm"
);

const altulaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + altulaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * altulaTriangulo) / 2;
console.log("El area del Triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();


//codigo triangulo
console.group("Circulos");

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
const diametroCirculo= radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
const PI = Math.PI;
console.log("PI es : " + PI);
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es :");
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm2");

console.groupEnd();