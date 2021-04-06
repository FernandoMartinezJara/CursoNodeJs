const fs = require('fs')
const archivo = './db/data.json';

const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () => {
    if(!fs.existsSync(archivo)){
        return null;
    }

    const input = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const inputParse = JSON.parse(input);
    return inputParse;

}

module.exports = {
    guardarDB,
    leerDB
}