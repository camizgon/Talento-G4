/****************** ENTORNO GLOBAL, EVENTOS y EVENT HANDLERS ******************/
const formulario = document.querySelector("#formulario");       // DOM
const errorMessage = document.querySelectorAll(".error");
const successMessage = document.querySelector(".success");

const validationPattern = /^[a-zA-Z \.ñÑáéíóúÁÉÍÓÚ]+$/;         // REGEX

formulario.addEventListener("submit", validarFormulario);       // EVENTLISTENER


function validarFormulario(e) {                                 // EVENT HANDLER
  e.preventDefault();                     
  cleanMsgs();                            
  
  const inputQty = e.target.length-1;     
  let isValid = true;                     
  
  for (let index = 0; index < inputQty; index++) {
    const inputValidation = validate(e.target[index].value, index);
    if ( inputValidation == false ) isValid = false;
  }
  
  if (isValid) {
    formulario.reset();
    showMsg(-1);
  }
}    

/***************************** FUNCIONES HELPERS *****************************/
function validate(input, index) {                               // VALIDA REGEX
  if (!validationPattern.test(input)) {     
    showMsg(index);                         
    return false;
  }                                         
  return true;
}

function showMsg(index) {                                       // MUESTRA MSGs
    const campo = ['nombre', 'asunto', 'mensaje'];
    
    index === -1
      ? successMessage.textContent = '¡Mensaje enviado con éxito!'
      : errorMessage[index].textContent = `El ${campo[index]} es requerido.`;
}

function cleanMsgs() {                                          // LIMPIA MSGs
    errorMessage.forEach(elem => elem.textContent = '');
    successMessage.textContent = '';
}