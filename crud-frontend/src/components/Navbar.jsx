export default function Navbar({ onOpen, onSearch }) {
  //enviando búsqueda
  const onHandleSearch = (event) => {
    onSearch(event.target.value);
  };
  return (
    <>
      <div className="navbar bg-base-100 p-4">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">List client</a>
        </div>
        <div className="form-control">
          <input
            onChange={onHandleSearch}
            type="text"
            placeholder="Search"
            className="input input-bordered w-48 md:w-auto"
          />
        </div>
        <div className="navbar-end">
          <a className="btn btn-success" onClick={onOpen}>
            Add client
          </a>
        </div>
      </div>
    </>
  );
}
