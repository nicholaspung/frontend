import React from "react";
import { Toolbar, AppBar } from "@material-ui/core";

const Footer = () => {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <p style={{ color: "#707486" }}>Copyright Lambda NeXt</p>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
