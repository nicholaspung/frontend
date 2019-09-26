import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { addUser, getUsers } from "../../actions";

const styles = {
  button: {
    backgroundColor: "#bb1333",
    borderRadius: "0px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#750808"
    }
  },
  paddedBottom: { paddingBottom: "1.5rem" },
  paddedTop: { paddingTop: "1.5rem" },
  padding: { padding: "1.5rem" },
  color: { color: "#bb1333" }
};
class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newUser: {
        full_name: "",
        email: ""
      },
      error: "",
      isSubmitted: false
    };
  }

  handleInputChange = name => e => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      newUser: {
        ...prevState.newUser,
        [name]: e.target.value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    const problemID = parseInt(this.props.id);

    const user = {
      problem_id: problemID,
      full_name: this.state.newUser.full_name,
      email: this.state.newUser.email
    };

    this.props.addUser(user);
    this.setState(prevState => ({
      ...prevState,
      newUser: { full_name: "", email: "" },
      isSubmitted: true
    }));
    setTimeout(() => {
      this.props.getUsers();
      this.props.opener();
    }, 2000);
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={11} sm={7} md={5}>
          <Paper square>
            {this.state.isSubmitted ? (
              <Typography
                component="h2"
                variant="h4"
                className={this.props.classes.padding}
              >
                You have been signed up! Returning to the problem details for{" "}
                <span className={this.props.classes.color}>
                  {this.props.problem.problem_title}
                </span>
              </Typography>
            ) : (
              <form onSubmit={this.handleSubmit} autoComplete="off">
                <Container className={this.props.classes.paddedBottom}>
                  <Typography className={this.props.classes.paddedTop}>
                    Please provide your name and email address. We will contact
                    you through email when the problem has been approved for
                    Lambda students start working on the problem.
                  </Typography>
                  <TextField
                    id="full_name"
                    label="Full Name"
                    value={this.state.newUser.full_name}
                    onChange={this.handleInputChange("full_name")}
                    margin="normal"
                    fullWidth
                    required
                  />
                  <TextField
                    id="email"
                    label="Email"
                    value={this.state.newUser.email}
                    onChange={this.handleInputChange("email")}
                    margin="normal"
                    fullWidth
                    required
                  />
                </Container>
                <Grid container justify="space-between">
                  <Grid item xs={12} sm={6}>
                    <Button
                      type="submit"
                      fullWidth
                      onClick={this.handleSubmit}
                      className={this.props.classes.button}
                    >
                      Sign up!
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button fullWidth onClick={this.props.opener}>
                      cancel
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

SignUpForm.defaultProps = {
  classes: {},
  opener: function hi() {},
  problem: {},
  addUser: function hi() {},
  getUsers: function hi() {}
};

SignUpForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  opener: PropTypes.func,
  addUser: PropTypes.func,
  getUsers: PropTypes.func,
  problem: PropTypes.shape({
    find: PropTypes.func,
    isApproved: PropTypes.bool,
    numOfRatings: PropTypes.number,
    isAccepting: PropTypes.bool,
    problem_description: PropTypes.string,
    problem_category: PropTypes.string,
    problem_title: PropTypes.string,
    id: PropTypes.number
  })
};

export default withStyles(styles)(
  connect(
    null,
    { addUser, getUsers }
  )(SignUpForm)
);
