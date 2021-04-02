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

const getInfoUsuario = async (id) => {
    
    try{    
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleadp ${empleado} es de: ${salario}`;
    }
    catch(err){
        throw err;
    }
};

const id = 3;

getInfoUsuario(id).
    then(msg => console.log(msg)).
    catch(err => console.log(err))