import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/`)
      .then((res) => res.json())
      .then((res) => setUsers(res.data));
  });
    
  return (
    <React.Fragment>
      Users
      {users.map((user) => (
        <div key={user.id}>
          {user.id}
          <Link to={`/users/${user.id}`}>{user.first_name}</Link>
          <h3>{user.email}</h3>
        </div>
      ))}
    </React.Fragment>
  );
}
