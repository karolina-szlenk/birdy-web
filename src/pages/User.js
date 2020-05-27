import React, { useState, useEffect } from "react";

const User = ({ match }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${match.params.id}`)
      .then((res) => res.json())
      .then((res) => setUser(res.data));
  }, [match.params.id]);
  return (
    <div>
      <img src={user.avatar} alt="user_img" />
      {user.first_name}
      {user.last_name}
      {user.email}
    </div>
  );
};

export default User;
