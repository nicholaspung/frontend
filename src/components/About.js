import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { useTheme, styled } from "@material-ui/styles";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SearchIcon from "@material-ui/icons/Search";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import team from "../static/team";
import TeamPictures from "./TeamPictures";
import aboutus from "../static/images/marketing/teamwork.jpg";

const HowItWorks = styled(Paper)({
  margin: "20px"
});

const BoldTypography = styled(Typography)({
  fontWeight: "bold"
});

const PaddedBottomTypography = styled(Typography)({
  paddingBottom: '5px'
})

const About = () => {
  const theme = useTheme();
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
        <Grid item lg={4} xs={10} style={{ paddingBottom: "20px" }}>
          <BoldTypography
            variant="h4"
            component="h2"
            style={{ textAlign: "center" }}
          >
            About Us
          </BoldTypography>
          <Typography
            variant="body1"
            component="p"
            style={{ textAlign: "center" }}
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
      <Grid
        container
        justify="center"
        style={{ backgroundColor: theme.palette.background.secondary }}
      >
        <HowItWorks square>
          <Grid container justify="center" style={{ paddingTop: "10px" }}>
            <BoldTypography variant="h4" component="h2">
              How It Works
            </BoldTypography>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ backgroundColor: theme.palette.background.secondary }}
          >
            <Grid item xs={1}>
              <SearchIcon fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <BoldTypography variant="body2" component="p">
                Step 1
              </BoldTypography>
              <PaddedBottomTypography variant="body1" component="p">
                Find a problem that you have.
              </PaddedBottomTypography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={1}>
              <SubscriptionsIcon fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <BoldTypography variant="body2" component="p">
                Step 2
              </BoldTypography>
              <PaddedBottomTypography variant="body1" component="p">
                Sign up to a problem, and when enough participants are
                registered, we'll turn the problem into a project.
              </PaddedBottomTypography>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ backgroundColor: theme.palette.background.secondary }}
          >
            <Grid item xs={1}>
              <HowToRegIcon fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <BoldTypography variant="body2" component="p">
                Step 3
              </BoldTypography>
              <PaddedBottomTypography variant="body1" component="p">
                Lambda School students will reach out to ask for help.
                Afterwards, they will start building the project that solves
                your problem.
              </PaddedBottomTypography>
            </Grid>
          </Grid>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ paddingBotton: "10px" }}
          >
            <Grid item xs={1}>
              <DoneAllIcon fontSize="large" />
            </Grid>
            <Grid item xs={8}>
              <BoldTypography variant="body2" component="p">
                Step 4
              </BoldTypography>
              <PaddedBottomTypography variant="body1" component="p">
                After 8 weeks, Lambda School students have finished Version 1.0
                of the project! You'll be able to try out the project as soon as
                they are finished.
              </PaddedBottomTypography>
            </Grid>
          </Grid>
        </HowItWorks>
      </Grid>
      <Grid container justify="center">
        <Typography variant="h6" component="h2">
          Meet the team
        </Typography>
      </Grid>
      <Grid container spacing={3} justify="center">
        {team.map(person => (
          <TeamPictures
            name={person.name}
            description={person.description}
            github={person.github}
            linkedin={person.linkedin}
            key={person.name}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default About;
