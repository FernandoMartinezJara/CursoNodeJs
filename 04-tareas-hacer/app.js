const { 
    inquirerMenu, 
    pausa, 
    leerInput,
    listaTareasBorrar,
    confirmar,
    listaTareasCheckBox
} = require('./helpers/inquirer');

const { 
    guardarDB,
    leerDB 
} = require('./helpers/guardarArchivo');

const Tareas = require('./models/tareas');

const main = async () =>{

    let opt = '';
    const tareas = new Tareas();

    const tareasDb = leerDB();

    if(tareasDb){
        tareas.cargarTareasFromArray(tareasDb);
    }

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
            break;

            case '2':
                tareas.listadoCompleto()
            break;

            case '3':
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
               const ids = await listaTareasCheckBox(tareas._listadoArr);
               tareas.toggleCompletadas(ids);
            break;

            case '6':
                const tareaId = await listaTareasBorrar(tareas._listadoArr);

                if(tareaId !== '0'){
                    const ok = await confirmar('¿Está seguro de eliminar?');

                    if(ok)
                    {
                        tareas.borrarTarea(tareaId);
                        console.log('\nTarea Borrada Correctamente'.green);
                    }
                }
            break;
        }

        guardarDB(tareas._listadoArr);

        await pausa();

    }while(opt !== '0');
}

main();