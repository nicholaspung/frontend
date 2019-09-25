import React, { Component } from "react";
import AdminProblem from "./AdminProblem";

export class AdminMiddle extends Component {
  render() {
    return (
      <div>
        {this.props.problems.map(problem => {
          return (
            <AdminProblem
              key={problem.id}
              problem={problem}
              updateProblem={this.props.updateProblem}
              removeProblem={this.props.removeProblem}
            />
          );
        })}
      </div>
    );
  }
}

export default AdminMiddle;
