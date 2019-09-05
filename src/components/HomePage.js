import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
import banner from "../static/images/marketing/finding-problem-solution.jpg";
import MarketingCard from "./MarketingCard";
import { styled } from "@material-ui/styles";

// const Newsletter = styled(Paper)({
//   color: "white",
//   backgroundColor: "blue",
//   textAlign: "center"
// });

// const SignUpField = styled(TextField)({
//   marginLeft: "10px",
//   marginRight: "10px"
// });

const CardGrid = styled(Grid)({
  flexGrow: 1
});

const HomeImage = styled(Grid)({
  backgroundColor: "#b51d4b"
});

const HomePage = () => {
  const title1 = "Have a problem?";
  const title2 = "Help solve a problem!";
  const description1 =
    '"I need this problem solved!" We understand that there are plenty of problems that need to be solved. We also know that finding users that can help us pinpoint how to solve the problems are hard to find. Usually you would need to ask friends of friends, or pass out flyers to get volunteers to gather data on where to start. We help solve this by offering a platform where people can signup to help give information on the problem they want solved!';
  const description2 =
    "Have a problem in your life that hasn't been solved by any company so far? Search our website to see if anyone else around the globe also has the same problem that they are trying to solve! All you need to do is look through our website and find that problem that is bugging you. By signing up and helping out with research, we'll let you know when the problem turns into a project to be solved.";
  const button1 = "Submit A Problem";
  const button2 = "See Problem List";

  return (
    <Card>
      <HomeImage container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <CardMedia
            component="img"
            alt="Person who has a problem, thinks about it, and then solves it."
            height="auto"
            src={banner}
            title="Contemplative Person"
          />
        </Grid>
      </HomeImage>
      <CardGrid container justify="space-around">
        <Grid item xs={12} md={5}>
          <MarketingCard
            title={title1}
            description={description1}
            displayButton={button1}
            buttonLink="/submitaproblem"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <MarketingCard
            title={title2}
            description={description2}
            displayButton={button2}
            buttonLink="/problems"
          />
        </Grid>
      </CardGrid>
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
