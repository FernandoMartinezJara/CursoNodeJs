const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message : '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tarea`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
];

const inquirerMenu = async () => {

    console.clear();
    console.log('======================'.green);
    console.log('Seleccione una opción'.white);
    console.log('======================\n'.green);

    const {opcion} = await inquirer.prompt(menuOpts);
    return opcion;

}

const pausa = async () =>{

    const question = [
        {
            type: 'input',
            name: 'opcion',
            message : `Presione ${'Enter'.green} para continuar`,
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async (message) => {

        const question = [
            {
                type: 'input',
                name: 'desc',
                message,
                validate(value){
                    if(value.length === 0){
                        return 'Por Favor ingrese un valor';
                    }

                    return true;
                }
            }
        ];

        const { desc } = await inquirer.prompt(question);
        return desc;

}

const listaTareasBorrar = async (tareas = []) => {

    const choices = tareas.map((tarea, index) => {
       
        const idx = `${index + 1}`.green;
        
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const menuOpts = [{
        type: 'list',
        name: 'opcion',
        message : 'Borrar',
        choices 
    }];

    const {opcion} = await inquirer.prompt(menuOpts);
    return opcion;


}


const confirmar = async (message) => {


    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);

    return ok;
}

const listaTareasCheckBox = async (tareas = []) => {

    const choices = tareas.map((tarea, index) => {
       
        const idx = `${index + 1}`.green;
        
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: tarea.completadoEn ? true : false
        }
    });

    const menuOpts = [{
        type: 'checkbox',
        name: 'ids',
        message : 'Seleccione',
        choices 
    }];

    const {ids} = await inquirer.prompt(menuOpts);
    return ids;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listaTareasBorrar,
    confirmar,
    listaTareasCheckBox
};