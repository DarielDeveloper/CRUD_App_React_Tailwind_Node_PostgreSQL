/* Hooks */
import { useState } from "react";

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

  const handleOpen = (mode, client) => {
    console.log(client);

    setClientData(client);
    setisOpen(true);
    setModalMode(mode);
  };
  const handleSubmit = async (newclientData) => {
    if (modalMode == "add") {
      try {
        await axios.post("http://localhost:3000/api/clients", newclientData);
      } catch (error) {
        console.error(`Error al crear cliente ${error}`);
      }
    } else {
      try {
        await axios.put(
          `http://localhost:3000/api/clients/${newclientData.id}`,
          newclientData
        );
      } catch (error) {
        console.error(`Error al crear cliente ${error}`);
      }
    }
  };

  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
      <Tablelist handleOpen={handleOpen} searchTerm={searchTerm} />
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
