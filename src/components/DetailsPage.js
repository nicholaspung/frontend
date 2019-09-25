import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { getProblemsByID, getUsers, updateVote } from "../actions";
import { CardTitle } from "../static/stylingComponents";
import SignUpModal from "./ModalSignUp";

const ImageSetter = require("../static/stylingComponents/ImageSetter");

const styles = {
  wholeContainer: { background: "#f6f7fb" },
  gridCenter: {
    width: "80%",
    margin: "0px auto",
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    minHeight: "615px"
  },
  lostPaper: { padding: "1rem", marginTop: "2rem", background: "#fff" },
  crumbs: { marginBottom: "35px" },
  detailProfileImage: {
    width: "100%",
    borderRadius: "1%",
    padding: 0,
    margin: 0
  },
  detailCard: { height: "100%", padding: 20, background: "#fff" },
  myPaper: { padding: 10, marginBottom: 20 }
};

class DetailsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProblemsByID(id);
    this.props.getUsers();
  }

  openModal = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

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
    const { problem } = this.props;

    if (!problem || problem.isApproved === false) {
      return (
        <Grid className={this.props.classes.wholeContainer}>
          <Grid className={this.props.classes.gridCenter}>
            <Breadcrumbs
              aria-label="breadcrumb"
              className={this.props.classes.crumbs}
            >
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
            <Paper className={this.props.classes.lostPaper}>
              <Typography variant="h2" component="h3">
                You must be lost return to
                <small>
                  <Link color="inherit" href="/problems">
                    problems
                  </Link>
                </small>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      );
    }
    return (
      <Grid container className={this.props.classes.wholeContainer}>
        <SignUpModal
          modaler={this.openModal}
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        />
        <Container className={this.props.classes.gridCenter}>
          <Breadcrumbs
            aria-label="breadcrumb"
            className={this.props.classes.crumbs}
          >
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
            <Grid item xs={12} md={6}>
              <Box>
                <CardMedia
                  className={this.props.classes.detailProfileImage}
                  component="img"
                  alt={`${problem.problem_category}: ${problem.problem_title}`}
                  height="auto"
                  src={ImageSetter.staticImage(`${problem.problem_category}`)}
                  title={`${problem.problem_category}: ${problem.problem_title}`}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card className={this.props.classes.detailCard}>
                <Grid container justify="space-between">
                  <CardTitle
                    variant="headline"
                    color="textSecondary"
                    component="h2"
                  >
                    {problem.problem_title}
                  </CardTitle>

                  <Box style={{}}>
                    <Typography variant="body2" component="p">
                      <Icon>
                        {ImageSetter.staticIcon(`${problem.problem_category}`)}
                      </Icon>
                    </Typography>
                  </Box>
                </Grid>
                <Box style={{ margin: "20px 0px", textAlign: "center" }}>
                  <Typography variant="body2" component="">
                    Description:
                  </Typography>
                  <Typography>{problem.problem_description}</Typography>
                </Box>

                <Paper className={this.props.classes.myPaper}>
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
                </Paper>

                <Paper className={this.props.classes.myPaper}>
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
                </Paper>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    );
  }
}

DetailsPage.defaultProps = {
  problem: {},
  getUsers: function hi() {},
  getProblemsByID: function hi() {},
  users: [],
  classes: {}
};

DetailsPage.propTypes = {
  problem: PropTypes.shape({
    find: PropTypes.func,
    isApproved: PropTypes.bool,
    numOfRatings: PropTypes.number,
    isAccepting: PropTypes.bool,
    problem_description: PropTypes.string,
    problem_category: PropTypes.string,
    problem_title: PropTypes.string
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node
    }).isRequired
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      problem_title: PropTypes.string,
      problem_category: PropTypes.string,
      problem_id: PropTypes.number
    })
  ),
  getUsers: PropTypes.func,
  getProblemsByID: PropTypes.func,
  classes: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = ({ problems, users }) => ({
  problem: problems.problem,
  users: users.users
});
export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getProblemsByID, getUsers, updateVote }
  )(DetailsPage)
);
