import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import { getAdminProblems, UpdateAdminProblems } from "../actions";

import AdminMiddle from "./AdminMiddle";
import Modal from "./Modal";
import ModalTwo from "./ModalTwo";
// import UsersModal from "./UsersModal";
import AdminModalFetchUsers from "./AdminModalFetchUsers";

const AdminMain = styled.div`
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

class AdminDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      isApproved: false,
      isOpen: false,
      isOpenR: false
      // isOpenUsers: false
    };
  }

  componentDidMount() {
    this.props.getAdminProblems();
  }

  updateProblem = (e, problem) => {
    e.preventDefault();

    if (problem.isApproved === false) {
      this.props.UpdateAdminProblems(problem.id, !problem.isApproved);
      this.setState({ isOpen: true });
    }
  };

  removeProblem = (e, problem) => {
    e.preventDefault();

    if (problem.isApproved) {
      this.props.UpdateAdminProblems(problem.id, !problem.isApproved);

      this.setState({ isOpenR: true });
    }
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
        <AdminModalFetchUsers />
        {/* <UsersModal
          isOpenUsers={this.state.isOpenUsers}
          onClose={e => this.setState({ isOpenUsers: false })}
        >
          <AdminDashboardFetchUsers />
        </UsersModal> */}
      </AdminMain>
    );
  }
}

const mapStateToProps = ({ problems }) => ({
  problems: problems.problems
});

export default connect(
  mapStateToProps,
  { getAdminProblems, UpdateAdminProblems }
)(AdminDashboard);

/// newer code
// import React from "react";
// import { connect } from "react-redux";
// import { getAdminProblems, UpdateAdminProblems } from "../actions";

// import AdminProblem from "./AdminProblem";

// // import ProblemCard from "./ProblemCard";
// import AdminDashboardFetchUsers from "./AdminDashboardFetchUsers";

// import Modal from "./Modal";
// import ModalTwo from "./ModalTwo";
// // import UsersModal from "./UsersModal";

// import { styled } from "@material-ui/styles";

// import Grid from "@material-ui/core/Grid";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import Container from "@material-ui/core/Container";

// const MyGrid = styled(Grid)({
//   padding: 24
// });

// const category = [
//   "all",
//   "health",
//   "technology",
//   "fitness",
//   "personal",
//   "science",
//   "finance"
// ];

// class AdminDashboard extends React.Component {
//   state = {
//     selectedCategory: "all",
//     problemCount: false,
//     isApproved: false,
//     isOpen: false,
//     isOpenR: false
//     // isOpenUsers: false
//   };

//   componentDidMount() {
//     if (this.props.getAdminProblems()) {
//       this.setState({ problemCount: true });
//     }
//     this.props.getAdminProblems();
//     console.log(this.sCategory());
//   }

//   categorySelected = e => {
//     this.setState({
//       selectedCategory: e.target.value
//     });
//   };

//   sCategory = () => {
//     const selected = this.state.selectedCategory.toLowerCase();
//     const problems = this.props.problems.filter(
//       prob => prob.problem_category.toLowerCase() === selected
//     );

//     if (selected === "all") {
//       return this.props.problems;
//     } else {
//       return problems;
//     }
//   };

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

//   // updateProblem = (e, problem) => {
//   //   e.preventDefault();

//   //   this.props.UpdateAdminProblems(problem.id, !problem.isApproved);
//   //   this.setState({ isOpen: true });
//   // };

//   // removeProblem = (e, problem) => {
//   //   e.preventDefault();

//   //   this.props.UpdateAdminProblems(problem.id, !problem.isApproved);
//   //   this.setState({ isOpenR: true });
//   // };

//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "600px" }}>
//           <MyGrid>
//             <FormControl spacing={2} style={{ minWidth: 120 }}>
//               <InputLabel htmlFor="categories">Filter</InputLabel>
//               <Select
//                 value={this.state.selectedCategory}
//                 onChange={this.categorySelected}
//                 inputprops={{
//                   name: this.state.selectedCategory,
//                   id: "categories"
//                 }}
//               >
//                 {category.map((cat, index) => (
//                   <MenuItem key={index} value={cat}>
//                     {cat.toUpperCase()}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </MyGrid>
//           {this.sCategory().length > 0 ? (
//             <div>
//               <MyGrid container spacing={4}>
//                 {this.sCategory().map(problem => (
//                   <Grid item key={problem.id}>
//                     <AdminProblem
//                       updateProblem={this.updateProblem}
//                       removeProblem={this.removeProblem}
//                       // seeUsers={this.seeUsers}
//                       problems={problem}
//                     />
//                   </Grid>
//                 ))}
//               </MyGrid>
//             </div>
//           ) : (
//             <MyGrid container>
//               Sorry {this.state.selectedCategory.toUpperCase()} problems are not
//               available{" "}
//             </MyGrid>
//           )}
//         </Container>
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
//         <AdminDashboardFetchUsers />
//         {/* <UsersModal
//           isOpenUsers={this.state.isOpenUsers}
//           onClose={e => this.setState({ isOpenUsers: false })}
//         >
//           {this.props.usersName}
//         </UsersModal> */}
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ problems }) => ({ problems: problems.problems });

// export default connect(
//   mapStateToProps,
//   { getAdminProblems, UpdateAdminProblems }
// )(AdminDashboard);
