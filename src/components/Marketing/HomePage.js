import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";
import GroupIcon from "@material-ui/icons/Group";
import BuildIcon from "@material-ui/icons/Build";
import banner from "../../static/images/marketing/finding-problem-solution.jpg";
import MarketingCard from "./MarketingCard";

// const Newsletter = styled(Paper)({
//   color: "white",
//   backgroundColor: "blue",
//   textAlign: "center"
// });

// const SignUpField = styled(TextField)({
//   marginLeft: "10px",
//   marginRight: "10px"
// });

const HomeImage = styled(Grid)({
  backgroundColor: "#b51d4b"
});

const HomePage = () => {
  const theme = useTheme();
  const title1 = "Have a Tech Project Made.";
  const title2 = "Help a Project to be Made.";
  const description1 = "Organizations/Individuals submit tech project ideas";
  const description2 = "Individuals looking to have a tech project made";
  const button1 = "Submit A Project Idea";
  const button2 = "See Project List";

  return (
    <Card
      style={{
        backgroundColor: theme.palette.background.secondary,
        borderRadius: "0px"
      }}
    >
      <HomeImage container justify="center">
        <Grid item xs={10} md={8} lg={6}>
          <CardMedia
            component="img"
            alt="Person who has a problem, thinks about it, and then solves it."
            height="auto"
            src={banner}
            title="Contemplative Person"
          />
        </Grid>
      </HomeImage>
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
      {/* <Newsletter square>
        <CardContent>
          <Typography variant="h6" component="h2">
            Sign up to be notified for new problems!
          </Typography>
        </CardContent>
        <SignUpField
          id="newsletter-signup"
          label="Newsletter Signup"
          margin="normal"
          variant="outlined"
        />
      </Newsletter>
      <Paper>hi</Paper> */}
    </Card>
  );
};

export default HomePage;
