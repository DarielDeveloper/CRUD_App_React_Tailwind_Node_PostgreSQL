
import { Client } from 'pg';

/* Nota sobre la lectura del fichero .env 
A partir del node 20 ya se puede leer los fichero .env evitando dependencias de pkt de tercero como dotenv
Para decirle a node que tiene que leer fichero .env tienes que incorporar en el script --env-file .env para cada inicio de la app sepa del fichero
 "scripts": {
     "dev": "nodemon --env-file .env ./src/index.js"
  },

*/

//Para hacer las conexiones hay 2 formas: ->
/*
📊 Tabla Comparativa Detallada
Característica	               Client	                               Pool
Tipo de conexión	      Conexión única y dedicada	               Múltiples conexiones compartidas
Uso de recursos	Alto    (1 conexión siempre activa)	               Optimizado (conexiones reutilizables)
Escalabilidad	           Baja	                                        Alta
Costo por conexión	       1 conexión = 1 cliente	                  1 conexión = múltiples clientes
Gestión	                   Manual	                                     Automática
Mejor para	          Scripts, tareas batch, operaciones           largas	APIs web, aplicaciones concurrentes
 
 */
const db = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,

});

db.connect();
db.on('error', (err) => {
  console.error(`Error al conectar la base de datos ${err}`);
  //Cerrar proceso
  process.exit(-1);
})

export const query = (text, params) => db.query(text, params);