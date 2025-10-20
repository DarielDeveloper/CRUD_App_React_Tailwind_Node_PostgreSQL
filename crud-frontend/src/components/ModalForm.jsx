export default function ModalForm({ isOpen, onClose, mode }) {
  const handleSubmit = (e) => {
    console.log("hola");

    //Interrumpe el evento del submit
    e.preventDefault();
    //Cierre del modal
    onClose();
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit}>
            <h2 className="font-bold text-lg py-4">
              {mode == "edit" ? "Edit client" : "Client details"}
            </h2>

            <label className="input input-bordered flex items-center  my-4">
              <input type="text" className="grow" placeholder="Name" />
            </label>
            <label className="input input-bordered flex items-center  my-4">
              <input type="email" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center my-4">
              <input type="text" className="grow" placeholder="Job" />
            </label>
            <label className="input input-bordered flex items-center  my-4">
              <input type="text" className="grow" placeholder="Application" />
            </label>
            <div className="flex mb-4 justify-between my-4">
              <select className="select select-bordered w-1/2 max-w-xs my-4">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <button className="btn btn-success " type="submit">
              {mode == "edit" ? "Save change" : "Add client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
