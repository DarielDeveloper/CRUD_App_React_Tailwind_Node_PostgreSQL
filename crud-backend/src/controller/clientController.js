import * as clientService from '../service/clientService.js'

console.log('Controlador');
export const getClient = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    res.status(200).json(clients);
  } catch (error) {
    console.error('Error al listar ' + error);
    res.status(500).json({ message: `Error al listar cliente ${error}` })
  }
}

export const createClient = async (req, res) => {
  try {
    const { name, email, job, isactive } = req.body
    const new_client = await clientService.createClient({ name, email, job, isactive });
    res.status(200).json(new_client);
  } catch (error) {
    console.error('Error al crear ' + error);
    res.status(500).json({ message: `Error al crear cliente ${error}` })
  }
}

export const updateClient = async (req, res) => {
  try {
    const clientId = req.params.id;
    const { name, email, job, isactive } = req.body
    const update_client = await clientService.updateClient({ name, email, job, isactive }, clientId);
    if (updateClient) {
      res.status(200).json(update_client);
    }
    res.status(404).json({ message: `Client ${clientId} no found` });
  } catch (error) {
    console.error('Error al editar ' + error);
    res.status(500).json({ message: `Error al editar cliente ${error}` })
  }
}

export const deleteClient = async (req, res) => {
  try {
    const clientId = req.params.id;

    const delete_client = await clientService.deleteClient(clientId);
    if (updateClient) {
      res.status(200).json(delete_client);
    }
    res.status(404).json({ message: `Client ${clientId} no found` });
  } catch (error) {
    console.error('Error al eliminar ' + error);
    res.status(500).json({ message: `Error al eliminar cliente ${error}` })
  }
}

export const searchClient = async (req, res) => {
  try {
    const clientId = req.params.q;

    const search_client = await clientService.searchClient(clientId);
    res.status(200).json(search_client);

  } catch (error) {
    console.error('Error al buscar ' + error);
    res.status(500).json({ message: `Error al buscar cliente ${error}` })
  }
}