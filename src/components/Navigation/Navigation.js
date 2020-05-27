import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";

export default function Navigation() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <React.Fragment>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/contact"
            name="contact"
            active={activeItem === "contact"}
            onClick={handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/users"
            name="users"
            active={activeItem === "users"}
            onClick={handleItemClick}
          />
        </Menu>
      </Segment>
    </React.Fragment>
  );
}
