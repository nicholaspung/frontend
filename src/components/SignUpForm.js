import React from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { addUser } from "../actions";
import "../styles/SignUpForm.css";

import { DetailsBackButton } from "../static/stylingComponents";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        full_name: "",
        email: ""
      },
      error: ""
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
    this.setState({
      full_name: "",
      email: ""
    });
  };

  //email must be unique and all fields are required

  render() {
    return (
      <div className="form-style-6">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            onChange={this.handleInputChange("full_name")}
            value={this.state.newUser.full_name}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleInputChange("email")}
            value={this.state.newUser.email}
          />
          <Grid container justify="space-between">
            <DetailsBackButton onClick={this.handleSubmit}>
              Sign up!
            </DetailsBackButton>

            <DetailsBackButton onClick={this.props.opener}>
              cancel
            </DetailsBackButton>
          </Grid>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addUser }
)(SignUpForm);
