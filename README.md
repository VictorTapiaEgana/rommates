
# Rommates

 Aplicación web que conta de una pantalla para gregar usuario desde una API  y mantenedor  de gastos( crear, editar, eliminar), permite agregar cuotas a los diferenctes usuarios agregados al sistema, todo gestionado por un  RESTful en node. 



![](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white) ![](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white) ![](https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white) ![](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black) ![](https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white)

# Endpoints:
```
GET /gastos: Devuelve todos los gastos almacenados en el archivo
gastos.json.

POST /gasto: Recibe el payload con los datos del gasto y los almacena.

PUT /gasto: Recibe el payload de la consulta y modifica los datos
almacenados en el servidor

DELETE /gasto: Recibe el id del gasto la elimine del historial de gastos.

GET /roommates: Devuelve todos los roommates almacenados en el servidor

```

### Estructura de Carpetas
```
└── 📁Roommates    
    └── 📁functions
        └── agregraGasto.js
        └── editarGasto.js
        └── EliminarGasto.js
        └── listarcompaneros.js
        └── listarGastos.js
        └── nuevocompanero.js
    └── gastos.json    
    └── 📁pages
        └── gastos.html
        └── index.html
        └── rommates.html
    └── 📁public
        └── 📁css
            └── style.css
        └── 📁images
            └── add.png
            └── logo.png
            └── main.jpg
            └── pagar.png
        └── 📁js
            └── gastos.js
            └── rommates.js    
    └── roommates.json
    └── server.js
```


## Dependencias
```
  "dependencies": {
    "bootstrap": "^5.3.3",
    "express": "^4.19.2",
    "fs": "^0.0.1-security",
    "uuid": "^10.0.0"
  }
  
```

## instalacion

```
 git clone https://github.com/VictorTapiaEgana/rommates.git
 npm install
 npm start
```
# Screenshots
## Agregar usuarios.
![](https://raw.githubusercontent.com/VictorTapiaEgana/rommates/master/github/main.png)

## Mantenedor de gastos.
![](https://raw.githubusercontent.com/VictorTapiaEgana/rommates/master/github/agregar.png)