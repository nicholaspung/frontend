import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions";

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newUser: {
        problem_id: "",
        full_name: "",
        email: ""
      },
      error: ""
    };
  }

  // componentDidMount() {
  //   this.props.addUser();
  //   // this.setState({ list: { ...this.props.smurfs } });
  // }

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

  // handleInputChange = e => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     newUser: {
  //       ...prevState.newUser,
  //       [e.target.name]: e.target.value
  //     }
  //   }));
  // };

  handleSubmit = e => {
    e.preventDefault();
    const user = {
      problem_id: this.props.problem_idYo,
      full_name: this.state.full_name,
      email: this.state.email
    };

    this.props.addUser(user);
    this.setState({
      problem_id: "",
      full_name: "",
      email: ""
    });
  };

  //email must be unique and all fields are required

  render() {
    console.log(this.props.addUser);
    return (
      <div>
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
          />
          <button onClick={this.handleSubmit}> Sign up! </button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   users: state.users
// });

export default connect(
  null,
  { addUser }
)(SignUpForm);
