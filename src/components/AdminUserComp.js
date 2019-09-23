import React, { Component } from "react";

export class AdminUserComp extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user.full_name} </h1>
      </div>
    );
  }
}

export default AdminUserComp;
