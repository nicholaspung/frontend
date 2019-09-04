import React from "react";
import team from "../static/team";
import TeamPictures from "./TeamPictures";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { styled } from "@material-ui/styles";

const MyPaper = styled(Paper)({
  fontSize: "3rem",
  margin: "1rem"
});

const About = () => (
  <Grid container justify="center">
    <MyPaper>About Us</MyPaper>
    <Paper>
      Lambda School NeXt is Lambda School's flagship program to help their
      students build a fully functional project to showcase their skills. The
      goal of Lambda School NeXt is to build projects that solve a real world
      problem. This website was created to help alleviate the pain of choosing
      which problem to solve by helping source volunteers and research the
      problem before committing teams to solve the problem.
    </Paper>
    <Grid>
      <p>HowItWorks</p>
      <p>Step 1</p>
      <p>Find a problem that you have.</p>
      <p>Step 2</p>
      <p>
        Read the description. See if you want someone to solve your problem.
      </p>
      <p>Step 3</p>
      <p>
        Sign up to volunteer your time to help create a solution. Your time will
        only be used to help create a project out of a problem in the beginnings
        stages.
      </p>
      <p>Step 4</p>
      <p>
        Lambda School students will reach out to ask for help. Afterwards, they
        will start on building a project that solves your problem.
      </p>
      <p>Step 5</p>
      <p>Let us know if you would like to be notified about feedback.</p>
      <p>Step 6</p>
      <p>
        After 8 weeks, a working solution will be posted up for you to check out
        our Lambda School students' work!
      </p>
    </Grid>
    <MyPaper>Meet the team</MyPaper>
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

export default About;
