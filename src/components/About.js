import React from "react";
import team from "../static/team";
import TeamPictures from "./TeamPictures";

const About = () => (
  <>
    <p>About Us</p>
    <p>
      Lambda School NeXt is Lambda School's flagship program to help their
      students build a fully functional project to showcase their skills. The
      goal of Lambda School NeXt is to build projects that solve a real world
      problem. This website was created to help alleviate the pain of choosing
      which problem to solve by helping source volunteers and research the
      problem before committing teams to solve the problem.
    </p>
    <p>Meet the team:</p>
    <div>
      {team.map(person => (
        <TeamPictures
          name={person.name}
          description={person.description}
          github={person.github}
          linkedin={person.linkedin}
          key={person.name}
        />
      ))}
    </div>
  </>
);

export default About;
