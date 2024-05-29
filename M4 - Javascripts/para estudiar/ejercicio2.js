const botonera = document.querySelector('#botonera');
const caja = document.querySelector('#caja');

botonera.addEventListener("click", cambiarColor);

function cambiarColor(e) {
    caja.style.backgroundColor = e.target.style.backgroundColor;
}


/**
 * Esto es todo el código necesario para completar el ejercicio. Primero,
 * capturamos la caja con botones a través de un div que agregué en el html, y 
 * luego la caja. 
 * 
 * Entonces agregamos el eventListener a la botonera para que escuche cuando se 
 * le hace click dentro. Acá lo interesante: un elemento, cuando tiene un evento
 * asociado, 'sabe' si ese evento fue disparado mediante alguno de sus propios 
 * hijos, y como todas las cajitas de colores son hijos de la botonera, cuando
 * clickeamos alguno de ellos, el evento se dispara y el 'culpable' queda 
 * registrado en una propiedad del evento llamada 'target'. Por eso cuando en 
 * la última linea solicitamos el color de fondo del e.target lo que estamos 
 * haciendo es pedir el color de fondo del elemento que disparó el evento por 
 * más que el evento esté registrado en el padre. 
 */