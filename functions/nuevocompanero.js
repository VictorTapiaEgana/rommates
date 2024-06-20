const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

async function nuevocompanero(){ 
        
        const data = await fetch('https://randomuser.me/api/');       
        const rommatee = await (data).json();

        const DEVE = 50000;
        
        roomy = {
                 id: uuidv4(),
                 nombre : `${rommatee.results[0].name.first} ${rommatee.results[0].name.last}`,
                 correo : rommatee.results[0].email,            
                 avatar : rommatee.results[0].picture.large,
                 debe: DEVE
        };

        const  { companeros }  =  JSON.parse(fs.readFileSync("roommates.json","utf8"));

        companeros.push(roomy);

        fs.writeFileSync("roommates.json", JSON.stringify({ companeros }));
        
}

module.exports = nuevocompanero;