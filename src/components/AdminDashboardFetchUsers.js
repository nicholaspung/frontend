import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions";

import UsersModal from "./UsersModal";
import AdminProblem from "./AdminProblem";

class AdminDashboardFetchUsers extends React.Component {
  state = {
    isOpenUsers: false
  };

  componentDidMount() {
    this.props.getUsers();
  }

  seeUsers = e => {
    e.preventDefault();
    this.setState({ isOpenUsers: true });
  };

  render() {
    const users = this.props.users;

    return (
      <div>
        <AdminProblem seeUsers={this.seeUsers} />
        <UsersModal
          isOpenUsers={this.state.isOpenUsers}
          onClose={e => this.setState({ isOpenUsers: false })}
        >
          {users.full_name}
        </UsersModal>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: users.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(AdminDashboardFetchUsers);
