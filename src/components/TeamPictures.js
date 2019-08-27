import React from "react";

const TeamPictures = ({ name, description, github, linkedin }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={github}>GitHub</a>
      <a href={linkedin}>LinkedIn</a>
    </>
  );
};

export default TeamPictures;
