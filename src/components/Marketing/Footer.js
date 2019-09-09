import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/styles";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Grid container justify="center">
            <Grid item>
              <p style={{ color: theme.palette.footerText.main }}>
                Copyright © 2019 Lambda School - All rights reserved
              </p>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
