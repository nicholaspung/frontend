import React from "react";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import GroupIcon from "@material-ui/icons/Group";
import BuildIcon from "@material-ui/icons/Build";
import MarketingCard from "./MarketingCard";
import banner from "../../static/images/marketing/finding-problem-solution.jpg";
import homePage from "../../static/homePage";

const styles = {
  description: {
    backgroundColor: "#ffffff",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem"
  },
  homeImage: { backgroundColor: "#b51d4b" },
  root: { backgroundColor: "#f6f7fb", borderRadius: "0px" },
  link: { color: "#bb1333", textDecoration: "none" }
};

const HomePage = ({ classes }) => {
  const {
    title1,
    title2,
    description1,
    description2,
    button1,
    button2
  } = homePage;

  return (
    <Card className={classes.root}>
      <Grid container justify="center" className={classes.homeImage}>
        <Grid item xs={10} md={8} lg={6}>
          <CardMedia
            component="img"
            alt="Person who has a problem, thinks about it, and then solves it."
            height="auto"
            src={banner}
            title="Contemplative Person"
          />
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.description}>
        <Grid item xs={10} md={8} lg={6}>
          <Typography component="h1" variant="h3" gutterBottom>
            Discover Projects For Lambda to Build
          </Typography>
          <Typography component="h2" variant="h5">
            We have Lambda School students build working prototypes for your
            next problem.{" "}
            <HashLink to="/about#howitworks" className={classes.link}>
              Learn more→
            </HashLink>
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="space-around" spacing={0}>
        <Grid item xs={10} md={4}>
          <MarketingCard
            title={title1}
            description={description1}
            displayButton={button1}
            buttonLink="/submitaproblem"
            icon={<BuildIcon fontSize="large" />}
          />
        </Grid>
        <Grid item xs={10} md={4}>
          <MarketingCard
            title={title2}
            description={description2}
            displayButton={button2}
            buttonLink="/problems"
            icon={<GroupIcon fontSize="large" />}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

HomePage.defaultProps = {
  classes: {}
};

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(HomePage);
