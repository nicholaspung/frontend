import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { Typography } from '@material-ui/core';
import banner from '../static/images/cards/finding-problem-solution.jpg';
import MarketingCard from './MarketingCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  newsletter: {
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        component="img"
        alt="Person who has a problem, thinks about it, and then solves it."
        height="700"
        src={banner}
        title="Contemplative Person"
      />
      <Grid container className={classes.root} spacing={10} justify="center">
        <Grid item>
          <MarketingCard />
        </Grid>
        <Grid item>
          <MarketingCard />
        </Grid>
      </Grid>
      <Card className={classes.newsletter}>
        <CardContent>
          <Typography variant="h6" component="h2">
            Sign up to be notified for new problems!
          </Typography>
        </CardContent>
        <TextField
          id="newsletter-signup"
          label="Newsletter Signup"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </Card>
    </Card>
  );
};

export default HomePage;
