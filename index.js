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