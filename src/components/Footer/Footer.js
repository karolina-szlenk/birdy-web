import React from "react";
import StickyFooter from "react-sticky-footer";

const Footer = () => (
  <StickyFooter
    bottomThreshold={50}
    normalStyles={{
      backgroundColor: "#000",
      padding: "1rem",
      color: "#fff"
    }}
  >
    © 2020 | All rights reserved
  </StickyFooter>
);

export default Footer;
