import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SearchIcon from "@material-ui/icons/Search";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import team from "../../static/team";
import TeamPictures from "./TeamPictures";
import aboutus from "../../static/images/marketing/teamwork.png";

const styles = {
  howItWorks: { margin: "2rem" },
  bolding: { fontWeight: "bold" },
  centering: { textAlign: "center" },
  paddedBottomSmall: { paddingBottom: "0.5rem" },
  paddedBottomMedium: { paddingBottom: "1.5rem" },
  paddedTopSmall: { paddingTop: "0.75rem" },
  paddedTopMedium: { paddingTop: "1.5rem" },
  meetTheTeam: {
    backgroundColor: "#233d6e",
    paddingBottom: "2rem",
    width: "100%"
  },
  secondaryBackground: { backgroundColor: "#f6f7fb" }
};

const About = props => {
  const { classes } = props;

  return (
    <Grid container justify="center">
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="row-reverse"
      >
        <Grid item lg={6} sm={8}>
          <CardMedia
            component="img"
            alt="Person who has a problem, thinks about it, and then solves it."
            height="auto"
            src={aboutus}
            title="Contemplative Person"
          />
        </Grid>
        <Grid item lg={4} xs={10} className={classes.paddedBottomMedium}>
          <Typography
            variant="h4"
            component="h2"
            className={`${classes.bolding} ${classes.centering}`}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={classes.centering}
          >
            Lambda School NeXt is Lambda School's flagship program to help their
            students build a fully functional project to showcase their skills.
            The goal of Lambda School NeXt is to build projects that solve a
            real world problem. This website was created to help alleviate the
            pain of choosing which problem to solve by helping source volunteers
            and research the problem before committing teams to solve the
            problem.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.secondaryBackground}>
        <Paper square className={classes.howItWorks}>
          <Grid container justify="center" className={classes.paddedTopSmall}>
            <Typography variant="h4" component="h2" className={classes.bolding}>
              How It Works
            </Typography>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.secondaryBackground}
          >
            <Grid item xs={2}>
              <SearchIcon fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="body2"
                component="p"
                className={classes.bolding}
              >
                Step 1
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.paddedBottomSmall}
              >
                Find a problem that you have.
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={2}>
              <SubscriptionsIcon fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="body2"
                component="p"
                className={classes.bolding}
              >
                Step 2
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.paddedBottomSmall}
              >
                Sign up to a problem, and when enough participants are
                registered, we'll turn the problem into a project.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.secondaryBackground}
          >
            <Grid item xs={2}>
              <HowToRegIcon fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="body2"
                component="p"
                className={classes.bolding}
              >
                Step 3
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.paddedBottomSmall}
              >
                Lambda School students will reach out to ask for help.
                Afterwards, they will start building the project that solves
                your problem.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.paddedBottomSmall}
          >
            <Grid item xs={2}>
              <DoneAllIcon fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <Typography
                variant="body2"
                component="p"
                className={classes.bolding}
              >
                Step 4
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.paddedBottomSmall}
              >
                After 8 weeks, Lambda School students have finished Version 1.0
                of the project! You'll be able to try out the project as soon as
                they are finished.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid className={classes.meetTheTeam}>
        <Container>
          <Grid container justify="center">
            <Typography
              variant="h4"
              component="h2"
              color="primary"
              className={`${classes.paddedTopMedium} ${classes.paddedBottomMedium}`}
            >
              Meet the team
            </Typography>
          </Grid>
          <Grid container spacing={3} justify="center">
            {team
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map(person => (
                <TeamPictures
                  name={person.name}
                  description={person.description}
                  github={person.github}
                  linkedin={person.linkedin}
                  position={person.position}
                  key={person.name}
                />
              ))}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(About);
