import express from "express";
import cors from "cors";
import clientsRouter from './router/clientRouter.js'
const server = express();
const PORT = 3000;

server.use(cors());
server.use(express.json());
server.use('/api', clientsRouter);

server.listen(PORT, () => {
  console.log(`Server iniciado por el puerto => ${PORT}`);

})



server.get('/create_task', (req, res) => {
  res.send(`<h1> Crear tareas</h1>`)
});

