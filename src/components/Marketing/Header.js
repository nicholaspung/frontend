import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  setHeaderNavFalse,
  setHeaderNavTrue,
  setHeaderNavOpposite
} from "../../actions";
import { styled, useTheme } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import LambdaLogo from "../../static/images/marketing/lambda-logo.png";

const NavMenu = styled(MenuIcon)({
  cursor: "pointer"
});

const NavMenuLink = styled(Link)({
  color: "white",
  textDecoration: "none"
});

const Header = props => {
  const theme = useTheme();
  const HeaderLink = styled(Link)({
    color: theme.palette.primary.secondary,
    textDecoration: "none"
  });

  const Logo = styled(HeaderLink)({
    paddingTop: "5px",
    width: "150",
    position: "relative",
    float: "left"
  });

  const NavMenuButton = styled(Paper)({
    backgroundColor: theme.palette.secondary.secondary,
    width: "100%"
  });

  const {
    checked,
    setHeaderNavFalse,
    setHeaderNavTrue,
    setHeaderNavOpposite
  } = props;

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
            <Logo to="/" onClick={handleLinkChange}>
              <img src={LambdaLogo} width="130px" alt="Lambda School Logo" />
            </Logo>
            <Hidden xsDown>
              <Grid container justify="flex-end">
                <Button>
                  <HeaderLink to="/submitaproblem">Submit A Problem</HeaderLink>
                </Button>
                <Button>
                  <HeaderLink to="/problems">See Problems</HeaderLink>
                </Button>
                <Button>
                  <HeaderLink to="/about">About Us</HeaderLink>
                </Button>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid container justify="flex-end">
                <NavMenu onClick={handleChange} />
              </Grid>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Grid>
      <Collapse in={checked}>
        <Grid container>
          <NavMenuButton square>
            <Button fullWidth onClick={handleLinkChange}>
              <NavMenuLink to="/submitaproblem">Submit A Problem</NavMenuLink>
            </Button>
          </NavMenuButton>
          <NavMenuButton square onClick={handleLinkChange}>
            <Button fullWidth>
              <NavMenuLink to="/problems">See Problems</NavMenuLink>
            </Button>
          </NavMenuButton>
          <NavMenuButton square onClick={handleLinkChange}>
            <Button fullWidth>
              <NavMenuLink to="/about">About Us</NavMenuLink>
            </Button>
          </NavMenuButton>
        </Grid>
      </Collapse>
    </div>
  );
};

const mapStateToProps = ({ nav }) => ({ checked: nav.checked });

export default connect(
  mapStateToProps,
  { setHeaderNavFalse, setHeaderNavTrue, setHeaderNavOpposite }
)(Header);
