import React, { Component } from "react";
import AdminProblem from "./AdminProblem";
import styled from "styled-components";

const AdminMiddleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export class AdminMiddle extends Component {
  render() {
    console.log("ADMIN MIDDLE", this.props);
    return (
      <AdminMiddleDiv>
        {this.props.problems.map(problem => {
          return (
            <AdminProblem
              key={problem.id}
              problem={problem}
              updateProblem={this.props.updateProblem}
              removeProblem={this.props.removeProblem}
              seeUsers={this.props.seeUsers}
              isOpenUsers={this.props.isOpenUsers}
            />
          );
        })}
      </AdminMiddleDiv>
    );
  }
}

export default AdminMiddle;
