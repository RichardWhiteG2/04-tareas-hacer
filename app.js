
require('colors');
const { inquirerMenu, pausa } = require('./helpers/inquirer');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {
    let opt= '';
    
    do{
        // opt = await mostrarMenu();
        opt = await inquirerMenu();
        console.log({opt});
        await pausa();
    }while( opt !=='0' );
}

main();





