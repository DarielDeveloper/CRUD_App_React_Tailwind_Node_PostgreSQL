import express from 'express'
import * as clientController from '../controller/clientController.js'

const route = express.Router();

route.get('/clients', clientController.getClient);
route.post('/clients', clientController.createClient);
route.put('/clients/:id', clientController.updateClient);
route.delete('/clients/:id', clientController.deleteClient);
route.get('/clients/:search', clientController.searchClient);

export default route;