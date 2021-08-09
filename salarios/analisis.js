  // Esta funcion calcula la mediana.
  function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(// hace lo mismo que el for anterior, acumula un valor para hacer una suma indefinida de valores
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Entra en la mitad de la lista, se una el parseInt para que solo tome valores enteros
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
    );
    
    
  
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

// El modulo automaticamente nos devuelve un booleano
function esPar(numerito) {
    return (numerito % 2 === 0); 
}



const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana Top 10%

//.splice() recibe dos parametros , el primero donde quiere que se ubique en la indexacion y el segundo cuantos datos del arreglo quiere tomar


const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});