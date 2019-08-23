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
  descriptors: {
    flexGrow: 1,
    margin: '10px 0'
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
  const title1 = 'Have a problem?';
  const title2 = 'Help solve a problem!';
  const description1 = '"I need this problem solved!" We understand that there are plenty of problems that need to be solved. We also know that finding users that can help us pinpoint how to solve the problems are hard to find. Usually you would need to ask friends of friends, or pass out flyers to get volunteers to gather data on where to start. We help solve this by offering a platform where people can signup to help give information on the problem they want solved!';
  const description2 = "Have a problem in your life that hasn't been solved by any company so far? Search our website to see if anyone else around the globe also has the same problem that they are trying to solve! All you need to do is look through our website and find that problem that is bugging you. By signing up and helping out with research, we'll let you know when the problem turns into a project to be solved.";
  const button1 = 'Submit A Problem';
  const button2 = 'See Problem List';

  return (
    <Card>
      <CardMedia
        component="img"
        alt="Person who has a problem, thinks about it, and then solves it."
        height="700"
        src={banner}
        title="Contemplative Person"
      />
      <Grid container className={classes.descriptors} spacing={10} justify="center">
        <Grid item>
          <MarketingCard
            title={title1}
            description={description1}
            displayButton={button1}
          />
        </Grid>
        <Grid item>
          <MarketingCard
            title={title2}
            description={description2}
            displayButton={button2}
          />
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
