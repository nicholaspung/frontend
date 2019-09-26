import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import LambdaLogo from "../../static/images/marketing/LambdaNeXt-14.png";
import {
  setHeaderNavFalse,
  setHeaderNavOpposite
} from "../../actions/nav.action";

const styles = {
  navMenu: { cursor: "pointer" },
  navMenuLink: { color: "white", textDecoration: "none", width: "100%" },
  headerLink: { color: "#55596d", textDecoration: "none", borderRadius: "0px" },
  logo: {
    paddingTop: "5px",
    width: "150",
    position: "relative",
    float: "left"
  },
  navMenuButton: { backgroundColor: "#233d6e", width: "100%" },
  colorWhite: { color: "white" }
};

const Header = props => {
  const { checked, setHeaderNavFalse, setHeaderNavOpposite, classes } = props;

  // Used to make Nav Bar in mobile view act like a regular Nav Bar
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 600) {
        setHeaderNavFalse();
      }
    });
  }, [checked, setHeaderNavFalse]);

  function handleChange() {
    setHeaderNavOpposite(checked);
  }

  function handleLinkChange() {
    setHeaderNavFalse();
  }

  return (
    <div>
      <Grid container alignItems="center">
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Link
              to="/"
              onClick={handleLinkChange}
              className={`${classes.headerLink} ${classes.logo}`}
            >
              <img src={LambdaLogo} width="130px" alt="Lambda School Logo" />
            </Link>
            <Hidden xsDown>
              <Grid container justify="flex-end">
                <Link to="/submitaproblem" className={classes.headerLink}>
                  <Button>Submit A Problem</Button>
                </Link>
                <Link to="/problems" className={classes.headerLink}>
                  <Button>See Problems</Button>
                </Link>
                <Link to="/about" className={classes.headerLink}>
                  <Button>About Us</Button>
                </Link>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid container justify="flex-end">
                <MenuIcon onClick={handleChange} className={classes.navMenu} />
              </Grid>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Grid>
      <Collapse in={checked}>
        <Grid container>
          <Link to="/submitaproblem" className={classes.navMenuLink}>
            <Paper square className={classes.navMenuButton}>
              <Button
                fullWidth
                onClick={handleLinkChange}
                className={classes.colorWhite}
              >
                Submit A Problem
              </Button>
            </Paper>
          </Link>
          <Link to="/problems" className={classes.navMenuLink}>
            <Paper square className={classes.navMenuButton}>
              <Button
                fullWidth
                onClick={handleLinkChange}
                className={classes.colorWhite}
              >
                See Problems
              </Button>
            </Paper>
          </Link>
          <Link to="/about" className={classes.navMenuLink}>
            <Paper square className={classes.navMenuButton}>
              <Button
                fullWidth
                onClick={handleLinkChange}
                className={classes.colorWhite}
              >
                About Us
              </Button>
            </Paper>
          </Link>
        </Grid>
      </Collapse>
    </div>
  );
};

Header.defaultProps = {
  classes: {},
  checked: false,
  setHeaderNavFalse: function wrong() {},
  setHeaderNavOpposite: function wrong2() {}
};

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  checked: PropTypes.bool,
  setHeaderNavFalse: PropTypes.func,
  setHeaderNavOpposite: PropTypes.func
};

const mapStateToProps = ({ nav }) => ({ checked: nav.checked });

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { setHeaderNavFalse, setHeaderNavOpposite }
  )(Header)
);
