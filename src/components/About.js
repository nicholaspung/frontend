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
