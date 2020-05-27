import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Image, Grid } from "semantic-ui-react";
import "../App.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/`)
      .then((res) => res.json())
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <React.Fragment>
      <Grid textAlign="center" className="page-container">
        <Grid.Row>
          <Card>
            <Card.Content>
              <Card.Header className="title">App users</Card.Header>
            </Card.Content>
          </Card>
        </Grid.Row>
        <Grid.Row>
          {users.map((user) => (
            <Grid.Column
              key={user.id}
              centered
              mobile={15}
              tablet={7}
              computer={5}
            >
              <Card className="card-wrapper" centered>
                <Image
                  src={user.avatar}
                  wrapped
                  ui={false}
                  className="user-image"
                />
                <Card.Content>
                  <Card.Header className="subtitle">{user.first_name}</Card.Header>
                  <Button
                    as={Link}
                    to={`/users/${user.id}`}
                    labelPosition="right"
                    icon="angle double right"
                    content="More details"
                    color="blue"
                  ></Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}
