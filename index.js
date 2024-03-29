// se creó el array vacío
let array1 = [];

//creando un arreglo con elementos
let array2 = [1, 2, 3, 4,]

//arreglo con datos diferentes
let array3 = [1, 2, "hola", 3.0, true];

// Crear un array utilizando el constructor Array
let array4 = new Array(1, 2, 3, 4, 5);

// Crear un array con una secuencia numérica usando el método Array.from() 
let array5 = Array.from({length: 6}, (_, index) => index + 1);

// array mediante la repetición de un valor
let array6 = new Array(5).fill(11);

//  Crear un array a partir de una cadena de texto
let array7 = "hola, cual es tu nombre";
let arrayCadena = array7.split(" ");
console.log(arrayCadena);

// Crear un array combinando dos arrays existentes 
// arrays existentes
let array8 = [1, 2, 3, 4];
let array9 = [1, 2, 3, 4, 5];
let arrayCombin = [...array8, ...array9];
console.log(arrayCombin);

//  Crear un array con valores únicos utilizando el método Set() y el operador spread
let array10ConDuplicados = [1, 2, 3, 3, 4, 5, 5];
let array10SinDuplicaados = [...new Set(array10ConDuplicados)];
console.log(array10SinDuplicaados);

// array con una función que genere valores dinámicamente
function generarArray(longitud) {
    let array = [];
    for (let i = 0; i < longitud; i++) {
        // En este ejemplo, generamos valores aleatorios entre 0 y 100
        array.push(Math.floor(Math.random() * 101)); // Genera un número aleatorio entre 0 y 100
    }
    return array;
}
// Ejemplo de uso: crear un array con 10 valores generados dinámicamente
let miArray = generarArray(10);
console.log(miArray);

// Obtener la longitud de un array
let arreglo11 = [1, 2, 3, 4, 5];
let longitud = arreglo11.length;
console.log("La longitud del arreglo es " + longitud);

//agregar un elemento al final del arreglo
let array12 = [1,2,3,4,5,];
array12.push(6);
console.log(array12);

// Eliminar el último elemento del array usando
let array13 = [1,2,3,4,5,6];
let element = array13.pop();
console.log(element);
console.log(array13);

// Agregar elementos al principio del array usando
let array14 = [2, 3, 4]
array14.unshift(1);
console.log(array14);

// Eliminar el primer elemento del array usando
let array15 = [1, 2, 3, 4, 5, 6];
let elementUno = array15.shift();
console.log(elementUno);
console.log(array15);

// Obtener una porción del array usando
let array16 = [1, 2, 3, 4, 5, 6, 7];
let posic = array16.slice(3, 7);
console.log(posic);

//  Convertir un array en un string usando
let array17 = ["h", "o", "l", "a",];
let arrayAString = array17.join("");
console.log(arrayAString);

//Obtener una subsección del array desde un índice negativo
let array18 = [1, 2, 3, 4, 5, 6, 7, 8];
let cantArray = array18.slice(-4);
console.log(cantArray);
 
//Eliminar una porción del array sin modificar el original usando
 let array19 = [1, 2, 3, 4, 5, 6,];
 let eliminUnaPart = array19.slice(1, 3).concat(array19.slice(4));
 console.log(eliminUnaPart);
 console.log(array19);

 // Agregar múltiples elementos al principio del array usando unshift() con spread operator ...
let array20 = [4, 5, 6,];
array20.unshift(1, 2, 3,);
console.log(array20);