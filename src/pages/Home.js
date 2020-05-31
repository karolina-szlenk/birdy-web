import React from "react";
import { Card, Grid, Icon, Header } from "semantic-ui-react";
import "../App.css";

export default function Home() {
  return (
    <React.Fragment>
      <div className="hero"></div>
      <Grid textAlign="center" className="page-container">
        <Grid.Row>
          <Header as="h1" className="main-margin">
            <Icon name="heart outline" />
            <Header.Content>Hello Bird Lover </Header.Content>
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Header as="h4" className="main-margin">
            <Header.Content>
              I believe this is the best place for You. BirdAPP is the place
              when You can find perfect birdwatching spots or share Yours.
              Describe the spot, explain how to behave, learn others, and let
              others benefit from it. The app will allow You to become the part
              of the best birdwatching community.
            </Header.Content>
          </Header>
        </Grid.Row>
        <Grid.Row className="main-margin">
          <Grid.Column mobile={15} tablet={7} computer={5}>
            <Card className="card-wrapper" centered>
              <Icon
                name="map marker alternate"
                size="huge"
                className="tile-icon"
              ></Icon>
              <Card.Content>
                <Card.Header className="subtitle">
                  find spots near Your locations
                </Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={15} tablet={7} computer={5}>
            <Card className="card-wrapper" centered>
              <Icon name="share" size="huge" className="tile-icon"></Icon>
              <Card.Content>
                <Card.Header className="subtitle">
                  share Your spots with others
                </Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={15} tablet={7} computer={5}>
            <Card className="card-wrapper" centered>
              <Icon
                name="calendar alternate outline"
                size="huge"
                className="tile-icon"
              ></Icon>
              <Card.Content>
                <Card.Header className="subtitle">
                  plan birdwatching events
                </Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
}
