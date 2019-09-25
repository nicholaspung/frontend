import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions";

// import UsersModal from "./UsersModal";
import AdminModalMiddle from "./AdminModalMiddle";

class AdminModalFetchUsers extends React.Component {
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
    console.log(this.props.users);
    return (
      <div>
        <AdminModalMiddle
          users={this.props.users}
          seeUsers={this.seeUsers}
          // isOpenUsers={this.state.isOpenUsers}
        />
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
)(AdminModalFetchUsers);
