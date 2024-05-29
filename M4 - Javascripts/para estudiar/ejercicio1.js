/**
 * PASO 1. Declaro los elementos del DOM que voy a necesitar para el ejercicio
 * y los capturo asignándolos a variables declaradas con la palabras const en
 * vez de let porque nunca necesitaré reasignarlas. Necesito: 
 * a) el formulario
 * b) los elementos donde se mostrarán mensajes al usuario de error y éxito.
 * 
 * Solo necesito declarar mi formulario porque este ya tiene dentro de sí todos
 * los inputs y sus valores, por lo que declarar un listado de todos los inputs
 * no solo no es necesario si no que además puede resultar en código propenso a
 * errores.
 */
const formulario = document.querySelector("#formulario");
const errorMessage = document.querySelectorAll(".error");
const successMessage = document.querySelector(".success");


/**
 * PASO 2. Declaro el patrón de expresión regular que utilizaré para validar los
 * campos de mi formulario asignándolos a una variable. Cuidado si usas el flag
 * g al final del objeto regex.  
 */
const validationPattern = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/;


/**
 * PASO 3. Declaro el eventListener que utilizaré. En este caso, utilizaré el 
 * evento 'submit' sobre el formulario. El evento 'submit' se dispara en el 
 * momento en que un usuario intenta enviar los datos del formulario. Esto por 
 * defecto puede ser a través de su último botón o input[submit] o también al 
 * activar la tecla enter si no es en un textarea. Usaré una función nombrada 
 * para manejar el evento porque tiene varias ventajas aparte del orden en el 
 * código.
 */
formulario.addEventListener("submit", validarFormulario);


/**
 * PASO 4. Declaro y defino la lógica de la función que validarFormulario que 
 * será la función que se ejecute cuando se produzca el evento. Necesitaré usar 
 * de la propiedad preventDefault() del evento para evitar que el formulario  
 * recargue automáticamente la página al enviar los datos. Por esto declararé el 
 * evento dentro de los parámetros de la función. Yo usaré la letra 'e' como 
 * nombre de este objeto 'evento'.  
 */
function validarFormulario(e) {
  e.preventDefault();                     // evito que recargue la página.
  cleanMsgs();                            // limpio los mensajes de UI.
  
  const inputQty = e.target.length-1;     // capturo la cantidad de inputs.
  let isValid = true;                     // bandera para validar si form valido
  
  /**
   * Ahora recorreré todos los inputs que no son el botón submit, a través de
   * event.target[n] donde N es cada uno de los inputs. Enviaré a validar su 
   * contenido y cada uno devolverá un false o true. Si cualquiera de ellos es 
   * false, se asignará la bandera como false. Los casos true se ignorarán 
   * porque la bandera está asignada por defecto en true para enviar el form, 
   * asi que sólo controlaré los casos 'malos' que invalidarán el formulario. 
   * Solo controlaré este aspecto en el handler del evento. Toda otra acción 
   * como la lógica de validación misma (con un patrón regex) o mostrar los 
   * mensajes al usuario se harán con funciones helpers. Al validador solo le 
   * 'interesa' saber si el formulario es válido o no, no porqué ni cómo. Al 
   * final, solo para el caso válido, se activará un mensaje de error (en esta
   * parte también se enviarían los datos a "algún lado"). 
   */
  for (let input = 0; input < inputQty; input++) {
    const inputValidation = validate(e.target[input].value, input);
    if ( inputValidation == false ) isValid = false;
  }

  if (isValid) {
    formulario.reset();                      // limpio los inputs
    showMsg(-1);                             // entrego mensaje de éxito.
  }
}    
   

/**
 * 
 * @param {*} input el input del usuario
 * @param {*} index el index del elemento del mensaje de error asociado al input 
 * @returns false o true dependiendo de si el ingreso testea ok al patrón regex
 * 
 * Esta función valida contra el patrón regex si cada input que se le pasa es 
 * válido o no. Si no es válido devuelve un false además de setear el mensaje de
 * error ayudado de la función helper showMsg que recibe el tipo de mensaje y en
 * el caso de ser error, usa el índice (0, 1 o 2) para pintar el elemento que 
 * corresponde al input de mismo índica. En caso de pasar la validación devuelve 
 * true simplemente.
 */
function validate(input, index) {           // func helper para validar.
  if (!validationPattern.test(input)) {     // aplica al patrón a un input
    showMsg(index);                         // si no es valido, mensaje y return
    return false;
  }                                         
  return true;
}
   
/**
 * 
 * @param {*} index es el indice del elemento asociado que se usa para los mensa
 * jes de error solamente. Si es -1, se asume que es el mensaje de éxito y se 
 * procede de acuerdo a ello. 
 * 
 * Esta función para pintar mensajes recibirá un argument que corresponde al ín-
 * dice de un elemento de error. Si el índice es -1 la lógica entiende que fue 
 * invocada por el mensaje de éxito así que se procederá en relación a ello. 
 */
function showMsg(index) {
    const campo = ['nombre', 'asunto', 'mensaje'];
    
    index === -1
      ? successMessage.textContent = '¡Mensaje enviado con éxito!'
      : errorMessage[index].textContent = `El ${campo[index]} es requerido.`;
}

/**
 * Ultima función helper. Limpia todos los mensajes. Usa del método forEach 
 * asociado al objeto que devuelve querySelectorAll para recorrer todos los 
 * nodos sin preocuparnos de cómo lo hace. También limpia el mensaje de éxito
 * que no tendría sentido luego de un envío exitoso mientras ingresamos los
 * datos de un nuevo formulario.
 */
function cleanMsgs() {
    errorMessage.forEach(elem => elem.textContent = '');
    successMessage.textContent = '';
}