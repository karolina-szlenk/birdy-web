import React from "react";

const User = ({ match }) => {

  // const user = users.find((user) => user.id === match.params.id);

  return (
    <div>
      {match.params.id}
    </div>
  );
};

export default User;