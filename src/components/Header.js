import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  button: {
    color: 'white',
    textDecoration: 'none'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={`${classes.title} ${classes.button}`}>
            Lambda NeXt
          </Link>
          <div>
            <Button>
              <Link to="/submitaproblem" className={classes.button}>
                Submit A Problem
              </Link>
            </Button>
            <Button>
              <Link to="/problems" className={classes.button}>
                See Problems
              </Link>
            </Button>
            <Button>
              <Link to="/about" className={classes.button}>
                About Us
              </Link>
            </Button>
            <Button>
              <Link to="/howitworks" className={classes.button}>
                How It Works
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
