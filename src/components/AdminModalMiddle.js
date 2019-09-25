import React, { Component } from "react";
import AdminProblem from "./AdminProblem";

export class AdminModalMiddle extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return (
            <AdminProblem
              key={user.id}
              user={user}
              seeUsers={this.props.seeUsers}
            />
          );
        })}
      </div>
    );
  }
}

export default AdminModalMiddle;