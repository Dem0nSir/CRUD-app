import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  });

  const handleDelete=(id)=>{
        const confirm = window.confirm("Do you want to delete?");
        if(confirm){
            axios.delete("http://localhost:3030/users/"+id)
            // eslint-disable-next-line no-unused-vars
            .then(result=>{
                alert("record deleted");
                navigate("/");
            })
            .catch((err)=>console.log(err))
        }
  }
  return (
    <div className="justify-content-center  d-flex align-items-center mt-5">
      <div className="w-75">
        <Link to="/create" className="btn btn-primary btn-sm mb-2">
          Create +{" "}
        </Link>
        <table className="table text-center">
          <thead className="table-success">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <img
                      src={user.image}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="rounded-circle"
                    />
                  </td>
                  <td>
                    <Link to={`/update/${user.id}`} className="btn btn-success me-2 btn-sm" >
                      Update
                    </Link>
                    <button onClick={()=>handleDelete(user.id)} className="btn btn-danger me-2 btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
