const Tarea = require('./tarea');
require('colors');

class Tareas {
    _listado = {};

    get _listadoArr(){

        const listado = [];

        Object.keys(this._listado).forEach(key => {

            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []){

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){

         this._listadoArr.forEach((tarea, index) => {

            const indice = `${index + 1})`.green;
            const {desc, completadoEn} = tarea;

            const estado = completadoEn ? 
            'Completada'.green :
            'Pendiente'.red;

            console.log(`${indice} ${desc} :: ${estado}`);
        });

    }

    listarPendientesCompletadas(completas = true){
    

        if(completas){
            const _tareas = this._listadoArr.
                filter(tarea => tarea.completadoEn);
            console.log('\n');
            _tareas.forEach((tarea, index) => {
                const indice = `${index + 1})`.green;
                const {desc} = tarea;
                const estado = 'Completada'.green;
                console.log(`${indice} ${desc} :: ${estado}`);
            });
        }
        else{
            const _tareas = this._listadoArr.
                filter(tarea => !tarea.completadoEn);
            console.log('\n');
            _tareas.forEach((tarea, index) => {
                const indice = `${index + 1})`.green;
                const {desc} = tarea;
                const estado = 'Pendiente'.green;
                console.log(`${indice} ${desc} :: ${estado}`);
            });
        }


    }
}

module.exports = Tareas;