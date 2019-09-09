import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProblems, getUsers } from "../actions";
//import Rating from '@material-ui/lab/Rating';

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import SignUpForm from "./SignUpForm";
import {
  CardTitle,
  DetailsTitle,
  DetailsDescription,
  ProgressContainer,
  ProgressBarContainer
} from "../static/stylingComponents";

import Icon from "@material-ui/core/Icon";
const ImageSetter = require("../static/stylingComponents/ImageSetter");

const theme = createMuiTheme();
theme.typography.p = {
  color: "green"
};

const ContainerLeft = styled(Grid)({
  //border:'2px solid green',
  width: 400,
  marginRight: "15px"
});

const ContainerRight = styled(Grid)({
  //border:'2px solid green',
});

const DetailProfieImage = styled(CardMedia)({
  width: "100%",
  borderRadius: "1%"
});

const DetailCard = styled(Card)({
  marginBottom: "20px",
  padding: "10px"
});

const ProgressBar = styled(Card)({
  fontWeight: "bold",
  backgroundColor: "#458B74",
  height: "35px"
});

class DetailsPage extends React.Component {
  componentDidMount() {
    this.props.getProblems();
    this.props.getUsers();
  }

  getProgress = () => {
    const totalSignedNeeded = 10;
    const val = (this.getSignee() / totalSignedNeeded) * 100;
    return `${val}%`;
  };

  getSignee = () => {
    const signed = this.props.users.filter(
      signee => `${signee.problem_id}` === this.props.match.params.id
    );
    return signed.length;
  };

  render() {
    const { id } = this.props.match.params;
    const problem = this.props.problems.find(prob => `${prob.id}` === id);

    if (!problem) {
      return (
        <MuiThemeProvider theme={theme}>
          {/* <Button>font-size: 1rem</Button> */}
          <div>
            <h1>You must be lost </h1>
          </div>
        </MuiThemeProvider>
      );
    }
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container style={{ background: "#f6f7fb" }}>
          <Grid container style={{ width: "60%", margin: "0 auto" }}>
            <Breadcrumbs aria-label="breadcrumb" style={{ margin: "35px 0px" }}>
              <Link color="inherit" href="/" style={{ fontWeight: "bold" }}>
                Home
              </Link>
              <Link
                color="inherit"
                href="/problems"
                style={{ fontWeight: "bold" }}
              >
                Problems
              </Link>
              <Typography style={{ color: "rgb(187, 19, 51)" }}>
                {problem.problem_title}
              </Typography>
            </Breadcrumbs>

            <Grid container>
              <ContainerLeft>
                <DetailProfieImage
                  component="img"
                  alt={`${problem.problem_category}: ${problem.problem_title}`}
                  height="auto"
                  src={ImageSetter.staticImage(problem.problem_category)}
                  title={`${problem.problem_category}: ${problem.problem_title}`}
                />

                <DetailCard>
                  <CardTitle
                    variant="headline"
                    color="textSecondary"
                    component="h2"
                  >
                    {problem.problem_title}
                  </CardTitle>

                  <DetailsDescription
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <Typography
                      variant="body2"
                      component="h4"
                      style={{ margin: "5px 0px 5px 0px" }}
                    >
                      <Icon>category</Icon> {problem.problem_category}
                    </Typography>

                    <Typography
                      variant="body2"
                      component="h4"
                      alignItems="center"
                      style={{ margin: "5px 0px 5px 0px" }}
                    >
                      <Icon>calendar_today</Icon> 16 days ago
                    </Typography>
                  </DetailsDescription>

                  <DetailsDescription
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ margin: "15px 0px 0px 0px" }}
                  >
                    <Grid container justify="space-between">
                      <Box>
                        <Icon style={{ color: "rgb(187, 19, 51)" }}>star</Icon>
                        <Icon style={{ color: "rgb(187, 19, 51)" }}>star</Icon>
                        <Icon style={{ color: "rgb(187, 19, 51)" }}>star</Icon>
                        <Icon style={{ color: "rgb(187, 19, 51)" }}>star</Icon>
                        <Icon style={{ color: "rgb(187, 19, 51)" }}>star</Icon>
                      </Box>
                      <Box>
                        <Typography variant="body1" component="span">
                          Votes: {problem.numOfRatings}
                        </Typography>
                      </Box>

                      {/* <Rating value={value} readOnly /> */}
                      <Box>
                        <Icon>thumb_up</Icon>
                        <Icon>thumb_down</Icon>
                      </Box>
                    </Grid>
                  </DetailsDescription>
                </DetailCard>

                <DetailCard>
                  <ProgressContainer>
                    <CardTitle variant="body2" component="h2">
                      Status
                    </CardTitle>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {` ${this.getSignee()} people signed up to help`}
                    </Typography>
                    <ProgressBarContainer>
                      <ProgressBar
                        style={{ width: this.getProgress() }}
                      ></ProgressBar>
                    </ProgressBarContainer>
                  </ProgressContainer>
                </DetailCard>
              </ContainerLeft>

              <Grid
                item
                lg={4}
                xs={10}
                style={{ paddingBottom: "1.5rem", textAlign: "center" }}
              >
                <ContainerRight>
                  <DetailCard>
                    <DetailsTitle
                      variant="headline"
                      color="textSecondary"
                      component="h2"
                    >
                      {problem.problem_title}
                    </DetailsTitle>
                    <DetailsDescription
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {problem.problem_description}
                    </DetailsDescription>
                  </DetailCard>
                </ContainerRight>
              </Grid>
            </Grid>
          </Grid>{" "}
          {/* all content  / main container */}
          <Grid
            lg={12}
            xs={12}
            sm={12}
            xl={12}
            style={{ background: "#233d6e" }}
          >
            <SignUpForm problem_idYo={id} />
          </Grid>
        </Grid>{" "}
        {/* body container */}
      </MuiThemeProvider>
    );
  }
}

DetailsPage.defaultProps = {
  problems: {},
  getUsers() {},
  getProblems() {}
};

DetailsPage.propTypes = {
  problems: PropTypes.shape({
    find: PropTypes.func
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired,

  getProblems: PropTypes.func
};

const mapStateToProps = ({ problems, users }) => ({
  problems: problems.problems,
  users: users.users
});
export default connect(
  mapStateToProps,
  { getProblems, getUsers }
)(DetailsPage);
