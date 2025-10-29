/* Hooks */
import { useEffect, useState } from "react";

/* Component */
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import Tablelist from "./components/Tablelist";
import axios from "axios";
/* Style */
import "./App.css";

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [errorTable, setErrorTable] = useState("");

  const fechtData = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/clients");
      setTableData(result.data);
    } catch (error) {
      setErrorTable(error.message);
    }
  };

  useEffect(() => {
    fechtData();
  }, []);

  const handleOpen = (mode, client) => {
    setClientData(client);
    setisOpen(true);
    setModalMode(mode);
  };
  const handleSubmit = async (newclientData) => {
    if (modalMode == "add") {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/clients",
          newclientData
        );
        setTableData((prevData) => [...prevData, response.data]);
      } catch (error) {
        console.error(`Error al crear cliente ${error}`);
      }
    } else {
      try {
        //Edit
        const response = await axios.put(
          `http://localhost:3000/api/clients/${clientData.id}`,
          newclientData
        );
        setTableData((prevData) =>
          prevData.map((client) =>
            clientData.id === client.id ? response.data : client
          )
        );
      } catch (error) {
        console.error(`Error al crear cliente ${error}`);
      }
    }
  };

  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
      <Tablelist
        handleOpen={handleOpen}
        searchTerm={searchTerm}
        setTableData={setTableData}
        tableData={tableData}
        errorTable={errorTable}
      />
      <ModalForm
        isOpen={isOpen}
        onSubmit={handleSubmit}
        onClose={() => setisOpen(false)}
        mode={modalMode}
        clientData={clientData}
      />
    </>
  );
}

export default App;
