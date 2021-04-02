const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Raul'
    },
    {
        id: 3,
        nombre: 'Aurora'
    }
];

const salarios = [
    {
        id: 1,
        salario: 100
    },
    {
        id: 2,
        salario: 200
    },
    {
        id: 3
    }
];


const getEmpleado = (empleadoId) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.
            find(e => e.id == empleadoId)?.nombre;
        
        empleado ? 
            resolve(empleado) :
            reject(`Empleado con id ${empleadoId} no existe`);
    });
}

const getSalario = (salarioId) => {

    return new Promise((resolve, reject) => {
        const salario = salarios.
            find(salario => salario.id == salarioId)?.salario;

        salario ? 
            resolve(salario) : 
            reject(`El Salario con id ${salarioId} no existe`);

    });
}

const id = 3;

let nombre;
getEmpleado(id).
    then(empleado => {
        nombre = empleado;
        return getSalario(id)
    }).
    then(salario => {
       return console.log('El empleado', nombre, 'tiene un salario de:', salario)
    }).
    catch(err => console.log(err));

