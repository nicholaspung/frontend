import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Icon from "@material-ui/core/Icon";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { getProblemsByID, getUsers, updateVote } from "../../actions";
import { CardTitle } from "../../static/stylingComponents";
import ModalSignUp from "./ModalSignUp";
import DefaultImage from "../../static/images/cards/default-image.jpg";

const ImageSetter = require("../../static/stylingComponents/ImageSetter");

const styles = {
  wholeContainer: {
    background: "#f6f7fb",
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    minHeight: window.innerHeight - 8 * 16
  },
  crumbs: { marginBottom: "2rem" },
  bolded: { fontWeight: "bold" },
  lostPaper: { padding: "1.5rem" },
  linkGrey: { color: "#55596d", textDecoration: "none" },
  linkRed: { color: "#bb1333", textDecoration: "none" },
  detailProfileImage: {
    width: "100%",
    borderRadius: "0px"
  },
  detailCard: {
    height: "100%",
    padding: "1.5rem",
    background: "#ffffff",
    borderRadius: "0px"
  },
  votesSignees: { padding: "1.5rem", margin: "1rem" },
  paddedBottom: { paddingBottom: "1rem" },
  button: {
    backgroundColor: "#bb1333",
    borderRadius: "0px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#750808"
    }
  },
  vote: { cursor: "pointer" }
};

class DetailsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      voteClicked: false
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
    this.setState(prevState => ({ ...prevState, voteClicked: true }));
  };

  render() {
    const { problem } = this.props;
    const { id } = this.props.match.params;

    // Can probably refactor this somehow
    if (this.props.fetchingProblem) {
      return (
        <Grid
          container
          justify="center"
          className={this.props.classes.wholeContainer}
        >
          <Grid item xs={9}>
            <Breadcrumbs
              aria-label="breadcrumb"
              className={this.props.classes.crumbs}
            >
              <Link
                to="/"
                className={`${this.props.classes.bolded} ${this.props.classes.linkGrey}`}
              >
                Home
              </Link>
              <Link
                to="/problems"
                className={`${this.props.classes.bolded} ${this.props.classes.linkGrey}`}
              >
                Problems
              </Link>
            </Breadcrumbs>
            <Paper
              square
              elevation={6}
              className={this.props.classes.lostPaper}
            >
              <Typography variant="h4" component="h3">
                Loading problem...
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      );
    }

    if (!problem.id || problem.isApproved === false) {
      return (
        <Grid
          container
          justify="center"
          className={this.props.classes.wholeContainer}
        >
          <Grid item xs={9}>
            <Breadcrumbs
              aria-label="breadcrumb"
              className={this.props.classes.crumbs}
            >
              <Link
                to="/"
                className={`${this.props.classes.bolded} ${this.props.classes.linkGrey}`}
              >
                Home
              </Link>
              <Link
                to="/problems"
                className={`${this.props.classes.bolded} ${this.props.classes.linkGrey}`}
              >
                Problems
              </Link>
            </Breadcrumbs>
            <Paper
              square
              elevation={6}
              className={this.props.classes.lostPaper}
            >
              <Typography variant="h4" component="h3">
                You must be lost. Return to the{" "}
                <Link to="/problems" className={this.props.classes.linkRed}>
                  problems dashboard.
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      );
    }
    return (
      <Grid container className={this.props.classes.wholeContainer}>
        <ModalSignUp
          modaler={this.openModal}
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
          id={id}
          problem={problem}
        />
        <Container>
          <Breadcrumbs
            aria-label="breadcrumb"
            className={this.props.classes.crumbs}
          >
            <Link
              to="/"
              className={`${this.props.classes.linkGrey} ${this.props.classes.bolded}`}
            >
              Home
            </Link>
            <Link
              to="/problems"
              className={`${this.props.classes.linkGrey} ${this.props.classes.bolded}`}
            >
              Problems
            </Link>
            <Typography className={this.props.classes.linkRed}>
              {problem.problem_title}
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card square>
                <CardMedia
                  className={this.props.classes.detailProfileImage}
                  component="img"
                  alt={`${problem.problem_category}: ${problem.problem_title}`}
                  height="auto"
                  src={
                    ImageSetter.staticImage(`${problem.problem_category}`) ||
                    DefaultImage
                  }
                  title={`${problem.problem_category}: ${problem.problem_title}`}
                />
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card className={this.props.classes.detailCard}>
                <Grid
                  container
                  justify="space-between"
                  className={this.props.classes.paddedBottom}
                >
                  <CardTitle
                    variant="headline"
                    color="textSecondary"
                    component="h2"
                  >
                    {problem.problem_title}
                  </CardTitle>

                  <Icon>
                    {ImageSetter.staticIcon(`${problem.problem_category}`)}
                  </Icon>
                </Grid>
                <Typography variant="body2" component="p" align="center">
                  Description:
                </Typography>
                <Typography variant="h5" component="h3" align="center">
                  {problem.problem_description}
                </Typography>

                <Paper square className={this.props.classes.votesSignees}>
                  <Grid container justify="space-between" alignItems="center">
                    <Typography component="h3" variant="h5">
                      Votes:{" "}
                      <span className={this.props.classes.bolded}>
                        {this.getVotes(problem.numOfRatings)}
                      </span>
                    </Typography>
                    {this.state.voteClicked ? (
                      <ThumbUpIcon className={this.props.classes.linkRed} />
                    ) : (
                      <ThumbUpAltOutlinedIcon
                        className={this.props.classes.vote}
                        onClick={() => this.vote(problem.numOfRatings)}
                      />
                    )}
                  </Grid>
                </Paper>

                <Paper square className={this.props.classes.votesSignees}>
                  <Grid container justify="space-between" alignItems="center">
                    <Typography
                      component="h3"
                      variant="h5"
                      onClick={this.getSignee}
                    >
                      # of Sign Ups:{" "}
                      <span className={this.props.classes.bolded}>
                        {this.getSignee()}
                      </span>
                    </Typography>
                    {problem.isAccepting ? (
                      <Button
                        className={this.props.classes.button}
                        onClick={this.openModal}
                      >
                        Sign Up Here!
                      </Button>
                    ) : (
                      <Button disabled>Sign Up</Button>
                    )}
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
  classes: {},
  updateVote: function hi() {},
  fetchingProblem: false
};

DetailsPage.propTypes = {
  problem: PropTypes.shape({
    find: PropTypes.func,
    isApproved: PropTypes.bool,
    numOfRatings: PropTypes.number,
    isAccepting: PropTypes.bool,
    problem_description: PropTypes.string,
    problem_category: PropTypes.string,
    problem_title: PropTypes.string,
    id: PropTypes.number
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
  fetchingProblem: PropTypes.bool,
  getUsers: PropTypes.func,
  getProblemsByID: PropTypes.func,
  updateVote: PropTypes.func,
  classes: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = ({ problems, users }) => ({
  problem: problems.problem,
  fetchingProblem: problems.fetchingProblem,
  users: users.users
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getProblemsByID, getUsers, updateVote }
  )(DetailsPage)
);
