// import React from "react";
// import { connect } from "react-redux";
// import { getUsers } from "../actions";

// // import UsersModal from "./UsersModal";
// import AdminMiddle from "./AdminMiddle";

// class AdminModalFetchUsers extends React.Component {
//   state = {
//     isOpenUsers: false
//   };

//   componentDidMount() {
//     this.props.getUsers();
//   }

//   render() {
//     return (
//       <div>
//         <AdminMiddle
//           users={this.props.users}
//           seeUsers={this.props.seeUsers}
//           problems={this.props.problems}
//           updateProblem={this.props.updateProblem}
//           removeProblem={this.props.removeProblem}
//         />
//       </div>
//     );
//   }
// }

// const mapStateToProps = ({ users }) => ({
//   users: users.users
// });

// export default connect(
//   mapStateToProps,
//   { getUsers }
// )(AdminModalFetchUsers);
