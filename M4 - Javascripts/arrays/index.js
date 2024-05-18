/*ARRAYS => Su sintaxís es : definir entre [] separados por una , tiene */ 

let miPrimerArrays = ["pelota", "Camnila" , "Sebastian"];


//Console.log(miPrimerArrays); // Muestro el arrays en consola
//console.log(miPrimerArrays[0]); // Muestra el primer elemento de arrays en consola

/*--------------------------------------------------------------------------------------------------*/
/* Acceder a la longitud del arrays (Cuantos elementos tiene el array?)*/
const programa_web = [
    "JavaScript", //posicion 0
    "React JS", //posición 1
    "Vue JS", // posición 2
    "Angular JS", // posición 3
    "Node Js", // posición 4
];

console.log("Cuantos elementos tiene el array?", programa_web , length);

/* Acceder a un valor dinamicamente */
let arraysColores = ["Azul" , "Amarillo" , "Naranja", /*??? */]
let numeroMisterioso = 2

console.log(arraysColores[numeroMisterioso + 1]);