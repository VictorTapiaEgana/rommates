const fs = require('fs');

async function EditarGasto(idg, descripcion, monto){

    try {   
        
        let  { gastos }  =  JSON.parse(fs.readFileSync("gastos.json","utf8"));

        let indice = gastos.findIndex(g => g.idg === idg);

        if (indice !== -1) {
            gastos[indice].descripcion = descripcion;
            gastos[indice].monto = monto;
        }

        fs.writeFileSync("gastos.json", JSON.stringify({ gastos }));

    } catch (error) {

        console.log(`X Error al editar un gasto : `, error);

    }

};

module.exports = EditarGasto;