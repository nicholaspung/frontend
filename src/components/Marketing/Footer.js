import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";

const styles = {
  mainColor: { color: "#707486" }
};

const Footer = props => {
  const { classes } = props;
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Grid container justify="center">
            <Grid item>
              <p className={classes.mainColor}>
                Copyright © 2019 Prod VaLid - All rights reserved
              </p>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

Footer.defaultProps = {
  classes: {}
};

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(Footer);
