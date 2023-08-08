
require('colors');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
    pausa, 
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async() => {
    let opt= '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if( tareasDB ){ // cargar tareas

        tareas.cargarTareasFromArray( tareasDB );
    }
    do{
        // opt = await mostrarMenu();
        //Imprimir menu
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //Crear opcion
                const desc = await leerInput('Descripción');
                tareas.crearTarea(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas();
                break;
            case '4':
                tareas.listarPendientesCompletadas (false);
                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                console.log(ids);
                break;
            case '6':
                const id =  await  listadoTareasBorrar( tareas.listadoArr)
                if (id !=='0'){
                    const ok = await confirmar('¿Estas Seguro?');
                    if( ok ){
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada.')
                    }
                }
                break;
        }

        guardarDB(tareas.listadoArr)
        await pausa();
    }while( opt !=='0' );
}

main();





