const radiologia = [
    {
        hora: '11:00', //posicion 0
        especialista: 'Ignacio Schulz', //posicion 1
        paciente: 'Francisca Rojas', //posicion 2
        rut: '9878782-1', //posicion 3
        prevision: 'FONASA', //posicion 4 
    },
    {
        hora: '11:30',
        especialista: 'Federico Subercaseaux', 
        paciente: 'Pamela Estrada',
        rut: '15345241-3',
        prevision: 'ISAPRE',
    },
    {
        hora: '15:00',
        especialista: 'Fernando Wurthz',
        paciente: 'Armando Luna',
        rut: '16445345-9',
        prevision: 'ISAPRE',
    },
    {
        hora: '15:30',
        especialista: 'Ana Maria Godoy',
        paciente: 'Manuel Godoy',
        rut: '17666419-0',
        prevision: 'FONASA'
    },
    {
        hora: '16:00',
        especialista: 'Patricia Suazo',
        paciente: 'Ramon Suazo',
        rut: '14989389-k',
        prevision: 'FONASA',
    }
];

const ResultadoPacientesRadiologia = document.getElementById('pacientesRadiologia');

ResultadoPacientesRadiologia.innerHTML = ` Radiología : Primer paciente: ${radiologia[0].paciente} - ${radiologia[4].prevision} | Último paciente: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}`;

console.table(radiologia);

const traumatologia = [
    {
        hora: '8:00',
        especialista: 'Maria Paz Altuzarra',
        paciente: 'Paula Sanchez',
        rut: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'Raul Araya',
        paciente: 'Angelica Navas',
        rut: '15444147-9',
        prevision: 'ISAPRE',
    },
    {
        hora: '10:30',
        especialista: 'Maria Arriagada',
        paciente: 'Ana Klapp',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'Alejandro Badilla',
        paciente: 'Felipe Mardones',
        rut: '15474233-6',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:30',
        especialista: 'Ceciclia Budnik',
        paciente: 'Diego Marre',
        rut: '16554741-k',
        prevision: 'FONASA',
    },
    {
        hora: '12:00',
        especialista: 'Arturo Cavagnaro',
        paciente: 'Cecilia Mendez',
        rut: '9747535-8',
        prevision: 'ISAPRE',
    },
    {
        hora: '12:30',
        especialista: 'Andres Kanacri',
        paciente: 'Marcial Suazo',
        rut: '11254785-5',
        prevision: 'ISAPRE',
    }
];

const resultadosPacientesTraumatologia = document.getElementById ('pacientesTraumatologia')

resultadosPacientesTraumatologia.innerHTML = ` Traumatologia : Primer paciente: ${traumatologia[0].paciente} - ${traumatologia[4].prevision} | Último paciente: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}`;



console.table(traumatologia);

const dental = [
    {
        hora: '8:30',
        especialista: 'Andrea Zuñiga',
        paciente: 'Marcela Retamal',
        rut: '11123425-6',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:00',
        especialista: 'Maria Pia Zañartu',
        paciente: 'Angel muñoz',
        rut: '9878789-2',
        prevision: 'ISAPRE',
    },
    {
        hora: '11:30',
        especialista: 'Scarlett Witting',
        paciente: 'Mario Kast',
        rut: '7998789-5',
        prevision: 'FONASA',
    },
    {
        hora: '13:00',
        especialista: 'Francisco Von Teuber',
        paciente: 'Karin Fernandez',
        rut: '18887662-k',
        prevision: 'FONASA',
    },
    {
        hora: '13:30',
        especialista: 'Eduardo Viñuela',
        paciente: 'Hugo Sanchez',
        rut: '17665461-4',
        prevision: 'FONASA',
    },
    {
        hora: '14:00',
        especialista: 'Raquel Villaseca',
        paciente: 'Ana Sepulveda',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    }
];

const ResultadoPacientesDental = document.getElementById('pacientesDental');

ResultadoPacientesDental.innerHTML = ` Dental : Primer paciente: ${dental[0].paciente} - ${dental[4].prevision} | Último paciente: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}`;

console.table(dental);