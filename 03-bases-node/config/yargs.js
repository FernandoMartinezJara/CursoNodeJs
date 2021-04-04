const argv = require('yargs')
    .option('b', {
        alias : 'base',
        type: 'number',
        demandOption: true,
        describe : 'Permite ingresar base de multiplo.'
    })
    .option('h', {
        alias : 'hasta',
        type: 'number',
        demandOption: false,
        describe : 'Permite ingresar límite de multiplicaión.'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra el resultado por consola.'
    })
    .check((argv, options) => {
        if(isNaN(argv.b) || isNaN(argv.h)){
            throw 'La base debe ser un número.'
        }
        return true;
    })
    .argv;

module.exports = argv;