const fs = require('fs');

function listarcompaneros (){

    try {
        
        const  { companeros }  =  JSON.parse(fs.readFileSync("roommates.json","utf8"));
        return companeros;
        

    } catch (error) {
        
        console.log(`X Error al leer el archivo roommates.json`, error);

    }

}

module.exports = listarcompaneros;