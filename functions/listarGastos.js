const fs = require("fs");

async function listarGastos() {

  const { gastos } = await JSON.parse(fs.readFileSync("gastos.json", "utf8"));

  return gastos;  

}

module.exports = listarGastos;
