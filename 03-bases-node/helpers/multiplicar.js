const fs = require('fs');
const colors = require('colors');

const multiplicar = async (base = 1, listar, hasta=10) => {

    try {
        
        console.log('============ Tabla del'.green, colors.red(base), '============'.green);
        console.log('====================================='.green);
        
        let salida, consola = '';
        
        for (let index = 1; index <= hasta; index++) {
            consola += `${base} ${'x'.yellow} ${index} ${'='.yellow} ${ index * base }\n`;
            salida += `${base} x ${index} = ${ index * base }\n`;
        }

        if(listar){
            console.log(salida);
        }

        const nombreArchivo = `tabla-${base}.txt`;
        
        fs.writeFileSync(`./multiplicaciones/${nombreArchivo}`, salida);

        return `${nombreArchivo} creada`;

    } catch (error) {
        throw error;
    }
};

module.exports = {
    multiplicar
};