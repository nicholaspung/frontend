import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { getAdminProblems, UpdateAdminProblems, getUsers } from "../actions";

import AdminMiddle from "./AdminMiddle";
import Modal from "./Modal";
import ModalTwo from "./ModalTwo";
import UsersModal from "./UsersModal";
import AdminModalFetchUsers from "./AdminModalFetchUsers";

const AdminMain = styled.div`
  background: #394f4c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

class AdminDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      isApproved: false,
      isOpen: false,
      isOpenR: false,
      isOpenUsers: false,
      problemUsers: []
    };
  }

  componentDidMount() {
    this.props.getAdminProblems();
    this.props.getUsers();
  }

  updateProblem = (e, problem) => {
    e.preventDefault();

    if (problem.isApproved === false) {
      this.props.UpdateAdminProblems(problem.id, !problem.isApproved);
      this.setState({ isOpen: true });
    } else if (problem.isApproved) {
      this.props.UpdateAdminProblems(problem.id, !problem.isApproved);
      this.setState({ isOpenR: true });
    }
  };

  // updateProblem = (e, problem) => {
  //   e.preventDefault();

  //   if (problem.isApproved === false) {
  //     this.props.UpdateAdminProblems(problem.id, !problem.isApproved);
  //     this.setState({ isOpen: true });
  //   }
  // };

  // removeProblem = (e, problem) => {
  //   e.preventDefault();

  //   if (problem.isApproved) {
  //     this.props.UpdateAdminProblems(problem.id, !problem.isApproved);

  //     this.setState({ isOpenR: true });
  //   }
  // };

  seeUsers = (e, id) => {
    e.preventDefault();
    console.log("PROBLEM ID", id);
    const problemUsers = this.props.users.filter(u => u.problem_id === id);
    this.setState({ problemUsers }, () => console.log(this.state));
    this.setState({ isOpenUsers: true });
  };

  // seeUsers = e => {
  //   e.preventDefault();

  //   this.setState({ isOpenUsers: true });
  // };

  render() {
    console.log(this.props.problems);
    return (
      <AdminMain>
        <AdminMiddle
          updateProblem={this.updateProblem}
          removeProblem={this.removeProblem}
          problems={this.props.problems}
          seeUsers={this.seeUsers}
          isOpenUsers={this.state.isOpenUsers}
        />
        <Modal
          isOpen={this.state.isOpen}
          onClose={e => this.setState({ isOpen: false })}
        >
          This problem has been successfully approved!
        </Modal>
        <ModalTwo
          isOpenR={this.state.isOpenR}
          onClose={e => this.setState({ isOpenR: false })}
        >
          This problem has been successfully rejected!
        </ModalTwo>
        <AdminModalFetchUsers
          problems={this.props.problems}
          updateProblem={this.updateProblem}
          removeProblem={this.removeProblem}
          seeUsers={this.seeUsers}
        />

        <UsersModal
          isOpenUsers={this.state.isOpenUsers}
          onClose={e => this.setState({ isOpenUsers: false })}
        >
          {this.state.problemUsers.map(problemUser => {
            return (
              <div>
                <p style={{ textTransform: "capitalize" }}>
                  Name: {problemUser.full_name} || Email: {problemUser.email}{" "}
                </p>
              </div>
            );
          })}
        </UsersModal>
      </AdminMain>
    );
  }
}

const mapStateToProps = ({ problems, users }) => ({
  problems: problems.problems,
  users: users.users
});

export default connect(
  mapStateToProps,
  { getAdminProblems, UpdateAdminProblems, getUsers }
)(AdminDashboard);

// import React from "react";
// import styled from "styled-components";

// import { connect } from "react-redux";

// import { getAdminProblems, UpdateAdminProblems } from "../actions";

// import AdminMiddle from "./AdminMiddle";
// import Modal from "./Modal";
// import ModalTwo from "./ModalTwo";
// // import UsersModal from "./UsersModal";
// import AdminModalFetchUsers from "./AdminModalFetchUsers";

// const AdminMain = styled.div`
//   background: #394f4c;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   width: 100%;
// `;

// class AdminDashboard extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isApproved: false,
//       isOpen: false,
//       isOpenR: false
//       // isOpenUsers: false
//     };
//   }

//   componentDidMount() {
//     this.props.getAdminProblems();
//   }

//   updateProblem = (e, problem) => {
//     e.preventDefault();

//     if (problem.isApproved === false) {
//       this.props.UpdateAdminProblems(problem.id, !problem.isApproved);
//       this.setState({ isOpen: true });
//     }
//   };

//   removeProblem = (e, problem) => {
//     e.preventDefault();

//     if (problem.isApproved) {
//       this.props.UpdateAdminProblems(problem.id, !problem.isApproved);

//       this.setState({ isOpenR: true });
//     }
//   };

//   // seeUsers = e => {
//   //   e.preventDefault();

//   //   this.setState({ isOpenUsers: true });
//   // };

//   render() {
//     console.log(this.props.problems);
//     return (
//       <AdminMain>
//         <AdminMiddle
//           updateProblem={this.updateProblem}
//           removeProblem={this.removeProblem}
//           problems={this.props.problems}
//         />
//         <Modal
//           isOpen={this.state.isOpen}
//           onClose={e => this.setState({ isOpen: false })}
//         >
//           This problem has been successfully approved!
//         </Modal>
//         <ModalTwo
//           isOpenR={this.state.isOpenR}
//           onClose={e => this.setState({ isOpenR: false })}
//         >
//           This problem has been successfully rejected!
//         </ModalTwo>
//         <AdminModalFetchUsers />

//         {/* <UsersModal
//           isOpenUsers={this.state.isOpenUsers}
//           onClose={e => this.setState({ isOpenUsers: false })}
//         >
//           <AdminDashboardFetchUsers />
//         </UsersModal> */}
//       </AdminMain>
//     );
//   }
// }

// const mapStateToProps = ({ problems }) => ({
//   problems: problems.problems
// });

// export default connect(
//   mapStateToProps,
//   { getAdminProblems, UpdateAdminProblems }
// )(AdminDashboard);
