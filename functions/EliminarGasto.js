const fs = require('fs');

function EliminarGasto (id){    

    try {

        let  { gastos }  =  JSON.parse(fs.readFileSync("gastos.json","utf8"));        

        gastos = gastos.filter(gasto => gasto.idg != id);

        fs.writeFileSync("gastos.json", JSON.stringify({ gastos }));

        
    } catch (error) {

        console.log(`X Error al eliminar un gasto : `, error);
        
    }

};

module.exports = EliminarGasto;