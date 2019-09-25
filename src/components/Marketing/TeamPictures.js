import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

import DefaultGitHubPicture from "../../static/images/marketing/default-github-picture.png";

const styles = {
  noBorderRadius: {
    borderRadius: "0px",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center"
  },
  avatar: { width: "10rem", height: "auto" },
  githubButton: {
    backgroundColor: "#bb1333",
    borderRadius: "0px",
    "&:hover": {
      backgroundColor: "#750808"
    }
  },
  githubLink: { textDecoration: "none", color: "#ffffff" },
  autoMargin: { margin: "auto" }
};

const TeamPictures = ({ name, github, position, classes, githubname }) => {
  const [avatar, setAvatar] = useState(DefaultGitHubPicture);

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubname}`)
      .then(response => response.json())
      .then(data => setAvatar(data.avatar_url));
  }, [githubname]);

  return (
    <Grid item xs={11} sm={6} md={4}>
      <Card className={classes.noBorderRadius}>
        <CardContent className={classes.autoMargin}>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="caption" component="p">
            {position}
          </Typography>
          <Button className={classes.githubButton}>
            <a href={github} className={classes.githubLink}>
              Link to GitHub
            </a>
          </Button>
        </CardContent>
        <CardMedia
          component="img"
          title={`${name}'s picture`}
          src={avatar}
          className={classes.avatar}
          alt={`${name}'s picture`}
        />
      </Card>
    </Grid>
  );
};

TeamPictures.defaultProps = {
  name: "",
  github: "",
  position: "",
  githubname: "",
  classes: {}
};

TeamPictures.propTypes = {
  name: PropTypes.string,
  github: PropTypes.string,
  githubname: PropTypes.string,
  position: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(TeamPictures);
