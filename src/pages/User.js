import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Image, Message } from "semantic-ui-react";
import "../App.css";

const User = ({ match }) => {
  const descriptions = [
    {
      id: 1,
      txt:
        "Parrots, parrots are my thing. They are the biggest beauties in the whole world.",
    },
    {
      id: 2,
      txt:
        "Watching birds made me calm. Thanks to them, I am able to connect with my internal animal.",
    },
    {
      id: 3,
      txt:
        "I love birdwatching. I could do it 24/7. This is the best thing in life. I don`t know why most of people do not appreciate such beautiful beings.",
    },
    {
      id: 4,
      txt:
        "Yo, all. Rember one thing. Never try to hurt a bird, otherwise, You will have to deal with me.",
    },
    {
      id: 5,
      txt: "Birds are the best. That`s the only quote You need to remember.",
    },
    {
      id: 6,
      txt:
        "My thing are birds predators. The way how they evolve, to become ultimate killers is amazing.",
    },
  ];
  const renderDescription = descriptions
    .filter((item) => item.id === Number(match.params.id))
    .map((item) => item.txt);

  const [user, setUser] = useState({});
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${match.params.id}`)
      .then((res) => res.json())
      .then((res) => setUser(res.data))
      .catch(() => setError(true));
  }, [match.params.id]);

  return (
    <div className="app-container">
      {isError ? (
        <Message negative size="huge">
          <Message.Header>Error 404</Message.Header>
          <p>File not found!</p>
        </Message>
      ) : (
        <Card className="card-container" centered>
          <Card.Content>
            <Image floated="right" size="tiny" src={user.avatar} />
            <Card.Header className="title" textAlign="left">
              {user.first_name} {user.last_name}
            </Card.Header>
            <Card.Meta textAlign="left">{user.email}</Card.Meta>
            <Card.Description textAlign="left">
              {renderDescription}
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Button
              as={Link}
              to="/users"
              content="Back to users"
              color="blue"
            />
          </Card.Content>
        </Card>
      )}
    </div>
  );
};

export default User;
