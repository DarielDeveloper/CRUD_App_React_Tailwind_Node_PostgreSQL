import { query } from '../db.js'

export const getClients = async () => {
  try {
    const { rows } = await query('SELECT * FROM clients_tb');
    return rows;
  } catch (error) {
    console.error('Error al hacer la query ' + error);
  }

}

export const createClient = async (data) => {
  try {
    const { name, email, job, isactive } = data
    const { rows } = await query(`INSERT INTO clients_tb (name, email, job, isactive) VALUES ($1, $2, $3, $5) RETURNING *`, [name, email, job, isactive]);
    return rows[0];
  } catch (error) {
    console.error('Error al insertar cliente en la base de datos' + error);
  }
}

export const updateClient = async (data, clientId) => {
  try {
    const { name, email, job, isactive } = data
    const { rows } = await query(`UPDATE  clients_tb SET name=$1, email=$2, job=$3, isactive=$4  where id=$5 RETURNING *`, [name, email, job, isactive, clientId]);
    return rows[0];
  } catch (error) {
    console.error('Error al actulizar el cliente en la base de datos' + error);
  }
}

export const deleteClient = async (clientId) => {
  try {
    const { rows } = await query(`DELETE FROM  clients_tb where id=$1`, [clientId]);
    return rows > 0;
  } catch (error) {
    console.error('Error al eliminar el cliente en la base de datos' + error);
  }
}

export const serachClient = async (serachTerm) => {
  try {
    const { rows } = await query(`SELECT * FROM  clients_tb where name LIKE $1 OR email LIKE $2 OR job LIKE $3`, [`%${serachTerm}%`]);
    return rows;
  } catch (error) {
    console.error('Error al eliminar el cliente en la base de datos' + error);
  }
}