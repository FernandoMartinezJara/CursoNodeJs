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


const getEmpleado = (empleadoId, callback) => {
    const empleado = empleados.
        find(e => e.id == empleadoId)?.nombre;
    
    if(empleado){
        return callback(null, empleado);
    }
    callback(`Empleado con id ${empleadoId} no existe`);
}

const getSalario = (salarioId, callback) => {
    const salario = salarios.
        find(s => s.id == salarioId)?.salario;
    
    if(salario){
        return callback(null, salario);
    }
    callback(`Salario con id ${salarioId} no existe`);
}

const id = 3;

getEmpleado(id, (err, empleado) => {
    if(err)
    {
        return console.log(err);
    }

    getSalario(id, (err, salario) =>{
        if(err)
        {
            return console.log(err);
        }
    
        console.log('El empleado', empleado, 'Tiene un salario de:', salario);
    })
});


