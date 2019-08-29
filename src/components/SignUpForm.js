import React, { Component } from "react";

export class SignUpForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input name="username" type="text" placeholder="Username" />

          <input name="email" type="email" placeholder="Email" />

          <button>Sign up!</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
