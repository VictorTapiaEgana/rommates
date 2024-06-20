const express = require('express');
const path = require('path');

const nuevocompanero = require('./functions/nuevocompanero');
const listarcompaneros = require('./functions/listarcompaneros');
const agregarGasto = require('./functions/agregraGasto');
const listarGastos = require('./functions/listarGastos');
const EliminarGasto = require('./functions/EliminarGasto');
const EditarGasto = require('./functions/editarGasto');

const PORT = process.env.SERVER_PORT || 3003;
const app = express();

app.use(express.json());

app.use(express.static(path.join(process.cwd(),'/pages')));
app.use(express.static(path.join(process.cwd(),'/public')));

app.use('/CSS',express.static(path.join(process.cwd(),'/node_modules/bootstrap/dist/css')));
app.use('/CSSJS',express.static(path.join(process.cwd(),'/node_modules/bootstrap/dist/js')));

// listar Compañeros
app.get('/roommates', async(req,res)=>{

    try {

       const companeros = await listarcompaneros();
       res.status(200).send(companeros)
        
    } catch (error) {

        res.status(500);
        console.log(`X Error al obtener los registros : `, error);   

    }

});

// Guardar Compañero
app.post('/roommate',async (req,res)=>{
    
    try {

        const resultado = await nuevocompanero();
        res.status(200).send(resultado)     
        
    } catch (error) {

        res.status(500);
        console.log(`X Error al guardar los registros : ` ,error);
        
    }

});

// Guardar Gastos
app.post('/gastos',(req,res)=>{

    const { id, nombre, descripcion, monto } =  req.body;   

    try {

        const resultado = agregarGasto ( id, nombre, descripcion, monto );    
        res.status(200).send(resultado);
        
    } catch (error) {
        
        res.status(500);
        console.log(`X Error al registra el nuevo gasto : ` , error);

    }


});

// listar Gastos
app.get('/gastos',async (req,res)=>{

     try {

        const resultado = await listarGastos();        
        res.status(200).send(resultado);
        
     } catch (error) {

        res.status(500);
        console.log(`X Error al obtener los gastos : `, error);        
     }

});

// Eliminar Gastos
app.delete('/gastos',(req,res)=>{

    const { id } = req.body;
    console.log(id)

    try {

        const resultado = EliminarGasto(id);
        res.status(200).send(resultado);
        
    } catch (error) {
        
        console.log(`X Error al eliminar un gasto : `, error);
        res.status(500).send('');

    }
    
});

// Modififcar Gastos
app.put('/gastos',async (req,res)=>{

    const { IdDelGasto, descGAstos, MontoApagar } = req.body;    

    try {

        const resultado  = await EditarGasto (IdDelGasto,descGAstos,MontoApagar);
        res.status(200).send(resultado);
        
    } catch (error) {
        
        console.log(`X Error al editar un gasto : `, error);
        res.status(500);

    }


});

// Index
app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(process.cwd(),'/pages/index.html'));
});

// roommates.html
app.get('/agregarrommates',(req,res)=>{
    res.status(200).sendFile(path.join(process.cwd(),'/pages/rommates.html'));
});

// gastos.html
app.get('/agregargastos',(req,res)=>{
    res.status(200).sendFile(path.join(process.cwd(),'/pages/gastos.html'));
});

// Holiwis
app.listen(PORT,()=>{
    console.clear();
    console.log(`Holiwis en port : ${PORT}`);
});