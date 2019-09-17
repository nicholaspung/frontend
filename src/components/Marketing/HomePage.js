import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import GroupIcon from "@material-ui/icons/Group";
import BuildIcon from "@material-ui/icons/Build";
import MarketingCard from "./MarketingCard";
import banner from "../../static/images/marketing/finding-problem-solution.jpg";
import homePage from "../../static/homePage";

// const SignUpField = styled(TextField)({
//   marginLeft: "10px",
//   marginRight: "10px"
// });

const styles = {
  newsletter: {
    color: "white",
    backgroundColor: "blue",
    textAlign: "center",
    borderRadius: "0px"
  },
  signUpField: { marginLeft: "0.75rem", marginRight: "0.75rem" },
  homeImage: { backgroundColor: "#b51d4b" },
  root: { backgroundColor: "#f6f7fb", borderRadius: "0px" }
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
      {/* Material UI Paper component is dumb when using square - if nothing is below, it'll have rounded corners. When something is below, it'll have square corners */}
      {/* <Paper className={classes.newsletter}>
        <CardContent>
          <Typography variant="h6" component="h2">
            Sign up to be notified for new problems!
          </Typography>
        </CardContent>
        <TextField className={classes.signUpField}
          id="newsletter-signup"
          label="Newsletter Signup"
          margin="normal"
          variant="outlined"
        />
      </Paper> */}
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
