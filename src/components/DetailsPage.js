import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProblemsByID, getUsers, updateVote } from "../actions";
import { CardTitle } from "../static/stylingComponents";
import SignUpModal from './ModalSignUp';

import {
  Grid,
  Container,
  Button,
  Box,
  Card,
  Icon,
  Paper,
  CardMedia,
  Typography,
  Breadcrumbs,
  Link
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
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

const Mypaper = styled(Paper)({
  padding: 10,
  marginBottom: 20
});




class DetailsPage extends React.Component {

  state = {
    isOpen: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProblemsByID(id);
    this.props.getUsers();
  }

  openModal = () => {
    this.setState({ isOpen: !this.state.isOpen});
  }

  getProgress = () => {
    const totalSignedNeeded = 10;
    const val = (this.getSignee() / totalSignedNeeded) * 100;
    return `${val}%`;
  };

  getSignee = () => {
    const signed = this.props.users.filter(
      signee => `${signee.problem_id}` === `${this.props.match.params.id}`
    );
    
    return signed.length;
  };

  getVotes = voteData => {
    let votes = 0;
    if (voteData) {
      votes = voteData;
    }
    return votes;
  };

  vote = voteData => {
    const { id } = this.props.match.params;
    let vote = this.getVotes(voteData);

    let newVote = vote + 1;
    vote = newVote;
    this.props.updateVote(id, vote);
  };

  

  render() {
    const problem = this.props.problems;

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
      <div>
      <Grid container style={{ background: "#f6f7fb" }}>
        <SignUpModal modaler={this.openModal}
          isOpen={this.state.isOpen}
          onClose={e => this.setState({ isOpen: false })}
        >
        </SignUpModal>
        <Container style={{ width: "80%", margin: "0 auto", height:'615px' }}>
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

          <Grid container spacing={2}>
            <ContainerLeft item xs={12} md={6} style={{}}>
              <Box>
                <DetailProfieImage
                  component="img"
                  alt={`${problem.problem_category}: ${problem.problem_title}`}
                  height="auto"
                  // src={ImageSetter.staticImage('technology')}
                  src={ImageSetter.staticImage(`${problem.problem_category}`)}
                  title={`${problem.problem_category}: ${problem.problem_title}`}
                />
                {/* <Button style={{background:'#233d6e', width:'100%', color:'#fff'}}>Sign up</Button>*/}
              </Box>
            </ContainerLeft>

            <ContainerRight item xs={12} md={6}>
              <DetailCard style={{background:'#fff'}}>
                <Grid container justify="space-between" style={{marginBottom:20}}>
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
                      <Icon>
                        {ImageSetter.staticIcon(`${problem.problem_category}`)}
                      </Icon>
                    </Typography>
                  </Box>
                </Grid>
                <Box style={{margin:'20px 0px', textAlign:"center"}}>
                  <Typography variant="body2" component="" style={{}}>
                    Description:
                  </Typography>
                  <Typography>{problem.problem_description}</Typography>
                </Box>

                <Mypaper style={{}}>
                  <Grid container justify="space-between">
                    <Typography>
                      Votes: {this.getVotes(problem.numOfRatings)}
                    </Typography>
                    <Box>
                      <Icon onClick={() => this.vote(problem.numOfRatings)}>
                        thumb_up
                      </Icon>
                    </Box>
                  </Grid>
                </Mypaper>

                <Mypaper style={{}}>
                  <Grid container justify="space-between">
                    <Typography onClick={this.getSignee}>
                      Signess: {this.getSignee()}
                    </Typography>
                    <Box>
                      {problem.isAccepting ? (
                        <Button onClick={this.openModal}>Sign Up</Button>
                      ) : (
                        <Button disabled>Sign Up</Button>
                      )}
                    </Box>
                  </Grid>
                </Mypaper>
              </DetailCard>
            </ContainerRight>
          </Grid>
        </Container>
        {/* all content  / main container */}
      </Grid>
     </div>
    );
  }
}



DetailsPage.defaultProps = {
  problems: {},
  getUsers: function() {},
  getProblem: function() {}
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
<<<<<<< HEAD
  problems: problems.problem,
=======
  problem: problems.problem,
>>>>>>> f902176cdde77eb9ce081d9ce480073ae21d91c1
  users: users.users
});
export default connect(
  mapStateToProps,
  { getProblemsByID, getUsers, updateVote }
)(DetailsPage);
