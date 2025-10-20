/* Hooks */
import { useState } from "react";
/* Component */
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import Tablelist from "./components/Tablelist";
/* Style */
import "./App.css";

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setisOpen(true);
    setModalMode(mode);
  };
  const handleSubmit = () => {
    if (modalMode == "add") {
      console.log("modal add");
    } else {
      console.log("modal edit");
    }
  };
  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <Tablelist handleOpen={handleOpen} />
      <ModalForm
        isOpen={isOpen}
        onSubmit={handleSubmit}
        onClose={() => setisOpen(false)}
        mode={modalMode}
      />
    </>
  );
}

export default App;
