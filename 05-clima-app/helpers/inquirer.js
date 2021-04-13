const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message : '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar Ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'3.'.green} Salir`
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

const listarLugares = async (lugares = []) => {

    const choices = lugares.map((lugar, index) => {
       
        const idx = `${index + 1}`.green;
        
        return {
            value: lugar.id,
            name: `${idx} ${lugar.nombre}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const menuOpts = [{
        type: 'list',
        name: 'opcion',
        message : 'Seleccione',
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
    listarLugares,
    confirmar,
    listaTareasCheckBox
};