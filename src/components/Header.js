import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import MenuIcon from "@material-ui/icons/Menu";
import LambdaLogo from "../static/images/marketing/lambda-logo.png";

const HeaderLink = styled(Link)({
  color: "#55596d",
  textDecoration: "none"
});

const Logo = styled(HeaderLink)({
  paddingTop: "5px",
  width: "150",
  position: "relative",
  float: "left"
});

const NavMenu = styled(MenuIcon)({
  cursor: "pointer"
});

const NavMenuButton = styled(Paper)({
  backgroundColor: "#233d6e",
  width: "100%"
});

const NavMenuLink = styled(Link)({
  color: "white",
  textDecoration: "none"
});

const Header = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 600) {
        setChecked(false);
      }
    });
  }, [checked]);

  function handleChange() {
    setChecked(prev => !prev);
  }

  return (
    <div>
      <Grid container alignItems="center">
        <AppBar position="sticky" color="default">
          <Toolbar>
            <Logo to="/">
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
            <Button fullWidth>
              <NavMenuLink to="/submitaproblem">Submit A Problem</NavMenuLink>
            </Button>
          </NavMenuButton>
          <NavMenuButton square>
            <Button fullWidth>
              <NavMenuLink to="/problems">See Problems</NavMenuLink>
            </Button>
          </NavMenuButton>
          <NavMenuButton square>
            <Button fullWidth>
              <NavMenuLink to="/about">About Us</NavMenuLink>
            </Button>
          </NavMenuButton>
        </Grid>
      </Collapse>
    </div>
  );
};

export default Header;
