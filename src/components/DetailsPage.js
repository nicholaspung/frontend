import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProblems, getUsers } from "../actions";
import { CardTitle } from "../static/stylingComponents";
import SignUpForm from "./SignUpForm";

import {
  Grid,
  Container,
  Box,
  Card,
  CardMedia,
  Typography,
  Breadcrumbs,
  Link
} from "@material-ui/core";
import { styled } from "@material-ui/styles";

import Icon from "@material-ui/core/Icon";
const ImageSetter = require("../static/stylingComponents/ImageSetter");

const ContainerLeft = styled(Grid)({});

const ContainerRight = styled(Grid)({});

const DetailProfieImage = styled(CardMedia)({
  width: "100%",
  borderRadius: "1%",
  padding: 0,
  margin: 0
});

const DetailCard = styled(Card)({
  height: "100%",
  padding: 20
});

const Boxes = styled(Box)({
  boxShadow: "2px 2px silver",
  padding: 10,
  marginBottom: 20
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

  getVotes = (voteData) =>{
    let votes = 0
    if(voteData){
      votes = voteData
    }
    return votes
  }

  vote = (voteData) =>{
    let vote = 0
    //const vote = this.getVotes(voteData)
    let newVote = vote + 1 ;

    vote = newVote;

    console.log(vote)
  }

  render() {
    const { id } = this.props.match.params;
    const problem = this.props.problems.find(prob => `${prob.id}` === id);

    if (!problem) {
      return (
        <div>
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
          </Breadcrumbs>
          <h1>You must be lost </h1>
        </div>
      );
    }
    return (
      <Grid style={{ background: "#f6f7fb" }}>
        <Container style={{ width: "80%", margin: "0 auto" }}>
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

          <Grid container style={{ background: "white" }} alignItems="stretch">
            <ContainerLeft item xs={12} md={6} style={{}}>
              <Box>
                <DetailProfieImage
                  component="img"
                  alt={`${problem.problem_category}: ${problem.problem_title}`}
                  height="auto"
                  src={ImageSetter.staticImage(problem.problem_category)}
                  title={`${problem.problem_category}: ${problem.problem_title}`}
                />
                {/* <Button style={{background:'#233d6e', width:'100%', color:'#fff'}}>Sign up</Button> */}
              </Box>
            </ContainerLeft>

            <ContainerRight item xs={12} md={6} style={{}}>
              <DetailCard style={{}}>
                <CardTitle
                  style={{ margin: 0 }}
                  variant="headline"
                  color="textSecondary"
                  component="h2"
                >
                  {problem.problem_title}
                </CardTitle>

                <Box style={{}}>
                  <Typography variant="body2" component="p" style={{}}>
                    {problem.problem_category}
                  </Typography>
                </Box>
                <Boxes>
                  <Typography variant="body2" component="subtitle1" style={{}}>
                    Description:
                  </Typography>
                  <Typography>{problem.problem_description}</Typography>
                </Boxes>

                <Boxes style={{}}>
                  <Grid container justify="space-between">
                    <Typography>Votes:{this.getVotes(problem.numOfRatings)} </Typography>
                    <Box>
                      <Icon
                        onClick={() => this.vote(problem.numOfRatings)}
                      >thumb_up</Icon>
                    </Box>
                  </Grid>
                </Boxes>

                <Boxes style={{}}>
                  <Grid container justify="space-between">
                    <Typography>Signess:</Typography>
                    <Box>
                      <button>Sign Up</button>
                    </Box>
                  </Grid>
                </Boxes>
              </DetailCard>
            </ContainerRight>
          </Grid>
        </Container>
        {/* all content  / main container */}


        <Grid
          item
          lg={12}
          xs={12}
          sm={12}
          xl={12}
          style={{ background: "#233d6e", padding: 50 }}
        >
          <SignUpForm problem_idYo={id} />
        </Grid>
      </Grid>
    );
  }
}

DetailsPage.defaultProps = {
  problems: [],
  getUsers: function() {},
  getProblems: function() {}
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
