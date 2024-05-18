/** Explicación lógica de ejercicio 1 funciones
 * Definición de variables: En la primera línea, creamos una variable bienvenida que almacena el mensaje de bienvenida al juego, obtenido a través de la función prompt(), que solicita al usuario que ingrese un valor. En la segunda línea, creamos una variable usuario que almacena el número ingresado por el usuario, convirtiendo el valor de entrada en un número utilizando Number(prompt()).

Definición de la función doblarNumero: Creamos una función llamada doblarNumero que toma un parámetro numero. Dentro de esta función, multiplicamos el parámetro numero por 2 y almacenamos el resultado en una variable resultado, luego devolvemos este resultado utilizando la instrucción return.

Condición para verificar la validez del número ingresado: Usamos isNaN(usuario) para verificar si el valor ingresado por el usuario es un número válido. isNaN() devuelve true si el valor pasado no es un número. Si el valor ingresado por el usuario no es un número válido, mostramos un mensaje de alerta indicando que el valor no es válido.

Doblado del número ingresado: Si el valor ingresado por el usuario es un número válido, llamamos a la función doblarNumero pasando el número ingresado como argumento. El resultado se almacena en la variable resultadoDoblado. Luego mostramos un mensaje de alerta que muestra el resultado del doblado del número ingresado por el usuario.

En resumen, este código solicita al usuario que ingrese un número, lo dobla utilizando una función, y luego muestra el resultado del doblado. Si el usuario ingresa un valor que no es un número válido, se muestra un mensaje de alerta indicando que el valor no es válido.
 * 
 */

let bienvenida = prompt("Bienvenido al juego de doblar el número"); //Denición de variables
let usuario = Number(prompt("Ingrese un número a doblar su valor")); // Definicion de variables 

function doblarNumero(numero){ //Definición de la funcion tomando de el parametro (numero)
    let resultado = numero *2; // Operación matematica del programa (acá es donde realiza el doblar el búmero ingresado por el usu)
    return resultado; // se almaceda el dato del resultado en la variable resultado, luego retornamos el valor, return lo que hace es devolver el resultado y lo asigna a la varieble resultado.
}
    if(!isNaN(usuario)) { //Verificar si el usuario ingreso un múmero valido con isNaN determina un valor pasado como argumento devuelve true si el valor no es número y false si es un número significa "No es un número"
        let resultadoDoblado = doblarNumero(usuario);
        alert("El resultado de su número es:" + resultadoDoblado);
        } else{
        alert("El valor ingresado no es valido")
    }
