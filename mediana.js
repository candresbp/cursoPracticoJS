function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(// hace lo mismo que el for anterior, acumula un valor para hacer una suma indefinida de valores
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista1 = [
    400000000,
    200,
    100,
    500,
];

// Metodod sort para organizar los numeros de la lista ascendntemente

lista1.sort((a, b) => {
    if(a <b) {
        return - 1;
    }else if (a > b) {
        return 1;
    }else {
        return 0;
    }
});

console.log(lista1);

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    }else {
        return false;
    }

}

let mediana;

if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promerioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);
    mediana = promerioElemento1y2;
}else {
    mediana = lista1[mitadLista1];
}

function calcularMediana() {

}