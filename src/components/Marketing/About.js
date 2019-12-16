import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/styles";
import team from "../../static/team";
import TeamPictures from "./TeamPictures";
import aboutus from "../../static/images/marketing/teamwork.png";
import HowItWorks from "./HowItWorks";
import howItWorks from "../../static/howItWorks";

const styles = {
  howItWorks: { margin: "4.5rem 2rem" },
  bolding: { fontWeight: "bold" },
  centering: { textAlign: "center" },
  paddedBottomSmall: { paddingBottom: "0.5rem" },
  paddedBottomMedium: { paddingBottom: "4.5rem" },
  paddedTopSmall: { paddingTop: "0.75rem" },
  paddedTopMedium: { paddingTop: "4.5rem" },
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
            Prod VaLid is a project to help students find problems to build a
            fully functional project to showcase their skills. The goal of Prod
            VaLid is to build projects that solve a real world problem. This
            website was created to help alleviate the pain in choosing which
            problem to solve by helping source volunteers and research the
            problem before committing teams to creating a working prototype.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        className={classes.secondaryBackground}
        id="howitworks"
      >
        <Paper square className={classes.howItWorks}>
          <Grid container justify="center" className={classes.paddedTopSmall}>
            <Typography
              variant="h4"
              component="h2"
              className={classes.bolding}
              gutterBottom
            >
              How It Works
            </Typography>
          </Grid>
          {howItWorks.map(steps => (
            <HowItWorks steps={steps} key={steps.step} />
          ))}
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
                  github={person.github}
                  githubname={person.githubname}
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

About.defaultProps = {
  classes: {}
};

About.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(About);
