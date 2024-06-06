// Esta parte del ejercicio lo realice sin ayuda y acompañamiento de IA, asi que igual si puede me gustraria poder obtener un pequeño comentario respecto a a la elaboración de esa parte del ejercicio.
class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion}, y el número telefónico de contacto es: ${this._telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Propietario {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombre() {
        return this._nombreMascota;
    }

    set nombre(nuevoNombre) {
        this._nombreMascota = nuevoNombre;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }
}


/*Desde acá me guíe con todos los tips y archivos que me diste Carlitos en su momento paravestudio y reforzamiento y para ordenar la idea y reforzar el plan de acción del ejercicio me apoye de nuestro fiel amigo ChatGpt jijijij */

// Función para capturar los datos del formulario y crear la instancia 
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombrePropietario = document.getElementById('propietario').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const tipo = document.getElementById('tipo').value;
    const enfermedad = document.getElementById('enfermedad').value;

    // Crear instancia de Mascota
    const mascota = new Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad);

    // Crear el mensaje para mostrar
    const mensaje = `
        <li>${mascota.datosPropietario()}.</li>
        <li>${mascota.tipo}, mientras que el nombre de la mascota es: ${mascota.nombre} y la enfermedad es: ${mascota.enfermedad}</li>
    `;

    // Agregar el mensaje a la lista
    const resultado = document.getElementById('resultado').querySelector('ul');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.innerHTML = mensaje;
    resultado.appendChild(nuevoElemento);

    // Limpiar el formulario
    document.querySelector('form').reset();
});
