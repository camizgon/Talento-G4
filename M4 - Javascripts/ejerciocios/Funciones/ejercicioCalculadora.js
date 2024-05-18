/** Ejercicio 
 * Calculadora básica:
Crea una calculadora simple que solicite al usuario dos números y una operación (suma, resta, multiplicación o división). Luego, utiliza funciones para realizar la operación seleccionada y muestra el resultado.
 */

/**Mis datos */
//Bienvenida al programa
//Solicitar 2 números al usuario
//Solicitar una operación al usuario (suma,resta,multiplicación,división)
//utilizar funciones para las operasiones seleccionadas
//mostrar resultado

/**Resolución del ejercico */
//Bienvenida al programa
let bienvenida = prompt("Bienvenido a calculadora");
//Solicitar 2 números al usuario
let usuarioNum1 =  Number(prompt("Ingrese el primer número"));
let usuarioNum2 =  Number(prompt("Ingrese el segundo número"));
//Solicitar una operación al usuario (suma,resta,multiplicación,división)
let usuarioOperacion = prompt("Indique la operación que desea realizar puede ser : suma, resta, multiplicación, división");


//utilizar funciones para las operasiones seleccionadas
function calculate(num1, num2, operacion) {
    let resultado;
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicación":
            resultado = num1 * num2;
            break;
        case "división":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operación no válida";
    }
    return resultado;
}

//mostrar resultado
if (!isNaN(usuarioNum1) && !isNaN(usuarioNum2)) {
    let resultadoCalculate = calculate(usuarioNum1, usuarioNum2, usuarioOperacion);
    alert("El resultado de su operación es: " + resultadoCalculate);
} else {
    alert("El valor ingresado no es válido");
}

/**Explicación del código:

Solicitud de entrada: El programa solicita al usuario dos números y la operación que desea realizar (suma, resta, multiplicación o división).

Definición de la función calculate: Esta función toma tres parámetros: num1, num2 y operacion. Utiliza un switch para determinar qué operación realizar. Dependiendo de la operación seleccionada, se ejecuta el código correspondiente y se calcula el resultado.

Llamada a la función calculate: Se verifica si los números ingresados son válidos (mediante !isNaN()) antes de llamar a la función calculate. Si ambos números son válidos, se llama a la función calculate con los números y la operación seleccionada como argumentos. El resultado se almacena en una variable resultadoCalculate.

Alerta del resultado: Se muestra un mensaje de alerta con el resultado de la operación calculada.*/

/*Ejemplos de uso:

Calculadora simple: Puedes usar este código como una calculadora básica para realizar operaciones aritméticas simples entre dos números. Por ejemplo, para calcular la suma de dos números ingresados por el usuario.

Aplicación de gestión financiera: Si estás creando una aplicación de gestión financiera, puedes utilizar este código para permitir a los usuarios calcular rápidamente cosas como el saldo después de una operación, el total de una factura, etc.

Herramienta de conversión de unidades: Modificando la función calculate, podrías convertir este código en una herramienta de conversión de unidades. Por ejemplo, podrías permitir a los usuarios convertir entre diferentes unidades de medida, como kilogramos a libras o kilómetros a millas.

Calculadora de puntajes en juegos: Si estás desarrollando un juego, podrías usar este código para calcular puntajes, por ejemplo, para sumar los puntajes de varios jugadores en diferentes categorías.

En resumen, este código es útil para realizar operaciones aritméticas básicas entre dos números y puede adaptarse para su uso en una variedad de aplicaciones, desde calculadoras hasta aplicaciones de gestión y juegos. */