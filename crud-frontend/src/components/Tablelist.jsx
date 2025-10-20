const clients = [
  {
    id: 1,
    name: "Creola Katherine Johnson",
    email: "alice.johnson@example.com",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    activated: true,
  },
  {
    id: 2,
    name: "Mario José Molina-Pasquel Henríquez",
    email: "alice.johnson@example.com",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    activated: true,
  },
  {
    id: 3,
    name: "Mohammad Abdus Salam",
    email: "alice.johnson@example.com",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    activated: false,
  },
  {
    id: 4,
    name: "Percy Lavon Julian",
    email: "alice.johnson@example.com",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    activated: false,
  },
  {
    id: 5,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    activated: true,
  },
];

export default function Tablelist({ handleOpen }) {
  return (
    <>
      <div className="overflow-x-auto mt-10 ">
        <table className="table bg-slate-800">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Job</th>
              <th>Application</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="hover">
            {clients.map((client) => (
              <tr key={client.id}>
                <th>{client.id}</th>
                <td>{client.name} </td>
                <td>{client.profession}</td>
                <td>{client.accomplishment}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      client.activated
                        ? "btn-primary"
                        : "btn-outline btn-primary"
                    }`}
                  >
                    {client.activated ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleOpen("edit")}
                    className="btn btn-secondary"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
