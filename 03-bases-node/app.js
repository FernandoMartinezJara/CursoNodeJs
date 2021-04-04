const {  multiplicar } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

multiplicar(argv.b, argv.l, argv.h).
    then(nombreArchivo => console.log(nombreArchivo.rainbow)).
    catch(err => console.log(err));

