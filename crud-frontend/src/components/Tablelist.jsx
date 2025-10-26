import { useState, useEffect } from "react";
import axios from "axios";

export default function Tablelist({ handleOpen, searchTerm }) {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fechtData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/api/clients");
        setTableData(result.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fechtData();
  }, []);

  //Filter data for term search
  const filterDataSearch = tableData.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleted = async ({ id, name }) => {
    const confirm = window.confirm(
      `¿Estas seguro de eliminar el cliente ${name} ?`
    );
    if (confirm) {
      try {
        await axios.delete(`http://localhost:3000/api/clients/${id}`);
        setTableData(tableData.filter((client) => client.id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <>
      {error && <div className="alert alert-error ">{error}</div>}
      <div className="overflow-x-auto mt-10 ">
        <table className="table bg-slate-800">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="hover">
            {filterDataSearch.map((client) => (
              <tr key={client.id}>
                <th>{client.id}</th>
                <td>{client.name} </td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      client.isactive
                        ? "btn-primary"
                        : "btn-outline btn-primary"
                    }`}
                  >
                    {client.isactive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleOpen("edit", client)}
                    className="btn btn-secondary"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => handleDeleted(client)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
