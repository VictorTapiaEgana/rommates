const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

async function agregarGasto (id, nombre , descripcion, monto){

    try {

        const gasto = {
            idg:uuidv4(),
            id,
            nombre,
            descripcion,
            monto
        };

        const  { gastos }  =  await JSON.parse(fs.readFileSync("gastos.json","utf8"));       

        gastos.push(gasto);

        fs.writeFileSync("gastos.json", JSON.stringify({ gastos }));
        
    } catch (error) {

        console.log(`X Error al agregar el gasto : `, error);
        
    }

};

module.exports = agregarGasto;