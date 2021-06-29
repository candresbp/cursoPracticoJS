// Prueba de Javascript
// Que es una variable y para que sirve?
// Una variable es un espacio en memoria que se aparta para poder programar
// Cual es la diferencia entre declarar e inicializar una variable?
// Una variable se declara para reservar su espacio en memoria, se inicializa para guardar info en ese espacio
// Cual es la diferencia entre sumar números y concatenar strings?
// Sumar numeros no es mas que la operación aritmética de la suma, concatenar strings es unir los caracteres que se desea.
// Cual operador me permite sumar o concatenar?
// Para los dos casos se utiliza el signo suma”+”.

// 2 Determina el nombre y tipo de dato para almacenar en variables la siguiente informacion:

var  nombre = "Andres";
var lastName = "Bonilla";
var nombreUsuarioPlatzi = "loscarboni";
var edad = 30;
var correoElectronico = "loscarboni@hotmail.com";
var mayorDeEdad = true;
var dineroAhorrado = 3000;
var deudas = null;

// 3 Traduce a codigo de javascript las variables del ejemplo anterior y deja tu codigo en los comentarios.

// Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior :
    //Nombre completo 
    //Dinero real (dinero ahorrado menos deudas)

nombre+ " " +lastName
//"Andres Bonilla"

// otra forma
let fullName = `${nombre}${lastName}`;
let dineroReal = dineroAhorrado - deudas;

dineroAhorrado-deudas
//3000

// Funciones

//1 Responde las siguientes preguntas en la seccion de comentarios:
    //Que es una funcion?
        //es un bloque de codigo que hace una serie de procedimientos y evita la tarea manual
    //Cuando me sirve usar una funcion en mi codigo?
        //cuando se repite varias lineas de codigo haciendo lo mismo en mi proyecto
    //Cuel es la diferecia entre parametros y argumentos en una funcion?
        //Parametro es una variable que esta en la definicion de una funcion.
        //Argumento son los datos que se pasan a los parametros de una funcion.

var name;
var lastName;
var completeName = name + lastName;
var nickname;

function ingresoDatos(name, lasrName, nickname) {
    name = prompt('Ingresa tu nombre');
    lastName = prompt('ingresa tu apellido');
    nickname = prompt('ingresa tu apodo');
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname);
}

ingresoDatos()


//Condicionales 

    //Responde las soguientes preguntas en la seccion de comentarios:
        //Que es una condiacional?
            //una condicional es un programa que segun si cumple una condicion especifica la maquina realiza una tarea
        //Que tipos de condicionales existen en JavaScript y cuales son sus diferencias?
            //if, else || switch || ternario
        //Pueno combinar funciones y condicionales
            //Si!
    //Replica el comportamiento del siguiente codigo que usa la sentencia switch utilizando if, else y else if

var tipodDeSuscripcion = "basic"

if (tipodDeSuscripcion === "free") {
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipodDeSuscripcion === "basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipodDeSuscripcion === "expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un annio");
}else if(tipodDeSuscripcion === "expert2"){
    console.log("Tu y alguien mas pueden tomat TODOS los cursos de Platzi durante un annio")
}else {
    console.log("No quieres estudiar")
}

