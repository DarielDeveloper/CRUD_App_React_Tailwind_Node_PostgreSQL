import { useEffect, useState } from "react";

export default function ModalForm({
  isOpen,
  onClose,
  mode,
  onSubmit,
  clientData,
}) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [job, setJob] = useState("");
  const [isactive, setIsactive] = useState(false);

  const handleSelectActive = (e) => {
    setIsactive(e.target.value == "Active");
  };
  const handleSubmit = async (e) => {
    try {
      console.log("hola");
      //Interrumpe el evento del submit
      e.preventDefault();
      const clientData = { name, email, job, isactive };
      //Ejecuto del padre
      await onSubmit(clientData);
    } catch (error) {
      console.error(error);
    }
    //Cierre del modal
    onClose();
  };

  useEffect(() => {
    console.log("efect modal");
    console.log(clientData);

    if (mode == "edit" && clientData) {
      console.log("hola modal edit");

      setName(clientData.name);
      setemail(clientData.email);
      setJob(clientData.job);
      setIsactive(clientData.isactive);
    } else {
      setName("");
      setemail("");
      setJob("");
      setIsactive(false);
    }
  }, [mode, clientData]);

  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <form method="dialog" onSubmit={handleSubmit}>
            <h2 className="font-bold text-lg py-4">
              {mode == "edit" ? "Edit client" : "Client details"}
            </h2>

            <label className="input input-bordered flex items-center  my-4">
              <input
                value={name}
                type="text"
                className="grow"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center  my-4">
              <input
                value={email}
                type="email"
                className="grow"
                placeholder="Email"
                onChange={(e) => setemail(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center my-4">
              <input
                value={job}
                type="text"
                className="grow"
                placeholder="Job"
                onChange={(e) => setJob(e.target.value)}
              />
            </label>

            <div className="flex mb-4 justify-between my-4">
              <select
                value={isactive ? "Active" : "Inactive"}
                className="select select-bordered w-1/2 max-w-xs my-4"
                onChange={handleSelectActive}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <button className="btn btn-success " type="submit">
              {mode == "edit" ? "Save change" : "Add client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
