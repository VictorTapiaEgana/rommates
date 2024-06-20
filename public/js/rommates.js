const Tbody = document.getElementById('tbodyrommates');
const btnAgregar = document.getElementById('btnAgregar');
const totalRoomys = document.getElementById('totalRoomys');

let Companero = '';

btnAgregar.addEventListener('click',async()=>{

   fetch('/roommate', { method : 'POST' })
   .then( result=>(window.location.href = '/agregarrommates'));

});

// Llenar Tabla
function llenarTabla ( arrayComapaneros, arrayGastos ){

     let fila = '';
     let totalDeuda = 0;
     let totalAbonos = 0;
     let totalSaldos = 0;

     
     arrayComapaneros.sort((a, b) => a.nombre.localeCompare(b.nombre));

     arrayComapaneros.forEach((compa,index) => {

      const buscarGastos = (id) =>{
         return arrayGastos
         .filter(gasto => gasto.id === id)
         .reduce((total, gasto) => total + parseFloat(gasto.monto), 0);
      };

     Deuda = compa.debe;
     Abonos = (buscarGastos(compa.id));
     Saldo = Number( Deuda - Abonos)

   

     totalDeuda += Deuda;
     totalAbonos += Abonos;
     totalSaldos += Saldo;

       let idCorto = compa.id;       
       idCorto =  idCorto.slice(0,8);

        fila += `<tr>
                    <th>${ idCorto }</th>
                    <td><img class="avatar" src="${compa.avatar}" alt="avatar roommate">${ compa.nombre }</td>
                    <td>${ compa.correo }</td>
                    <td>${ convertirMoneda(Deuda) }</td>

                    <td ${ Abonos === 0 
                           ? `class="bg-danger"` 
                           : `class="bg-success"`
                        }>${ convertirMoneda(Abonos) }</td>

                    <td>${ convertirMoneda(Saldo) }</td>
                 </tr>`        
     });
   //   Totales
     fila += `<tr>
                  <td></td>
                  <td></td>
                  <td class="d-flex justify-content-end"><strong>Totales :</strong></td>
                  <td> ${ convertirMoneda(totalDeuda) }</td>
                  <td> ${ convertirMoneda(totalAbonos) }</td>
                  <td> ${ convertirMoneda(totalSaldos) }</td>
              </tr>`

     Tbody.innerHTML = fila;
     totalRoomys.innerHTML = `Total Roomys (<strong>${ arrayComapaneros.length }</strong>)`;

};

document.addEventListener('DOMContentLoaded',async ()=>{

// CARGAR ROOMMATES
   const resultado = await fetch('/roommates')
   const conmpaneros = await resultado.json()

// CARGAR GASTOS
   const resultado2 = await fetch('/gastos')
   const gastos = await resultado2.json()

   llenarTabla(conmpaneros, gastos);

});

// DAR FORMATO CURRENCY A CAMPO MONTO
function convertirMoneda(balance) {

   const formatter = new Intl.NumberFormat('es-CL', {
       style: 'currency',
       currency: 'CLP',
       minimumFractionDigits: 0,
       maximumFractionDigits: 0
   });

   return formatter.format(balance);
};