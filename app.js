
require('colors');
const { inquirerMenu, 
    pausa, 
    leerInput 
} = require('./helpers/inquirer');
const Tareas = require('./helpers/models/tareas');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async() => {
    let opt= '';
    const tareas = new Tareas();
    
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
                // console.log( tareas._listado);
                console.log( tareas.listadoArr);
                break;
        }
        await pausa();
    }while( opt !=='0' );
}

main();





