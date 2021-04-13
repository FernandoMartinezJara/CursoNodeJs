require('dotenv').config();

const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () =>{

    const busqueda = new Busquedas();
    let opt;

    do {

        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const busquedaCiudad = await leerInput('Ciudad')

                const ciudades = await busqueda.ciudad(busquedaCiudad);

                const idCiudad = await listarLugares(ciudades);

                if(idCiudad === '0') continue;

                const ciudad = ciudades.find(c => c.id === idCiudad);

                busqueda.agregarHistorial(ciudad.nombre)

                const clima = await busqueda.climaCiudad(ciudad.lat, ciudad.lng);

                console.log('\n Información de la Ciudad'.green);
                console.log('Ciudad:', ciudad.nombre);
                console.log('Lat:', ciudad.lat);
                console.log('Lng:', ciudad.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Mínima:', clima.min);
                console.log('Máxima:', clima.max);
                console.log('Cómo está el clima:', clima.desc);

                pausa();
                
                break;
        
            case 2:

               return busqueda.historial.forEach((lugar, i) => {

                    const idx = `${ i + 1}.`.green;
                    console.log(`${idx} ${lugar}`);
                    
                })
                
                break;
        }
    } while (opt !== 0);




}


main();