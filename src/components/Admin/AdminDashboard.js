import React from "react";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";

import {
  getAdminProblems,
  getUsers,
  updateAdminProblems,
  deleteAdminProblem
} from "../../actions";

import ActionModal from "./ActionModal";
import AdminProblemList from "./AdminProblemList";
import UsersModal from "./UsersModal";

const styles = {
  background: {
    minHeight: window.innerHeight - 8 * 16
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  padding: { padding: "1.5rem" }
};

class AdminDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      isApproved: false,
      isOpenApprove: false,
      isOpenReject: false,
      isOpenDelete: false,
      isOpenUsers: false,
      problemUsers: []
    };
  }

  componentDidMount() {
    this.props.getAdminProblems();
    this.props.getUsers();
  }

  seeUsers = (e, id) => {
    e.preventDefault();
    const problemUsers = this.props.users.filter(u => u.problem_id === id);
    this.setState(prevState => ({
      ...prevState,
      problemUsers,
      isOpenUsers: true
    }));
  };

  approveProblem = id => {
    const isApproved = true;
    this.props
      .updateAdminProblems(id, isApproved)
      .then(() => {
        return this.props.getAdminProblems();
      })
      .then(() => {
        this.openModal("isOpenApprove");
      });
  };

  // Currently buggy in terms of UI, clicking on any of the buttons shifts the UI
  rejectProblem = id => {
    const isApproved = false;
    this.props
      .updateAdminProblems(id, isApproved)
      .then(() => {
        return this.props.getAdminProblems();
      })
      .then(() => {
        this.openModal("isOpenReject");
      });
  };

  deleteProblem = id => {
    this.props
      .deleteAdminProblem(id)
      .then(() => {
        return this.props.getAdminProblems();
      })
      .then(() => {
        this.openModal("isOpenDelete");
      });
  };

  closeModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isOpenApprove: false,
      isOpenReject: false,
      isOpenDelete: false
    }));
  };

  openModal = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: true
    }));
  };

  render() {
    return (
      <div className={this.props.classes.background}>
        <AdminProblemList
          problems={this.props.problems}
          seeUsers={this.seeUsers}
          isOpenUsers={this.state.isOpenUsers}
          isApproved={this.state.isApproved}
          approveProblem={this.approveProblem}
          rejectProblem={this.rejectProblem}
          deleteProblem={this.deleteProblem}
        />
        <ActionModal
          type="problem-approval"
          text="This problem has been successfully approved."
          isOpenApprove={this.state.isOpenApprove}
          closeModal={this.closeModal}
        />
        <ActionModal
          type="problem-rejection"
          text="This problem has been rejected."
          isOpenApprove={this.state.isOpenReject}
          closeModal={this.closeModal}
        />
        <ActionModal
          type="problem-delete"
          text="This problem has been successfully deleted."
          isOpenApprove={this.state.isOpenDelete}
          closeModal={this.closeModal}
        />
        <UsersModal
          isOpenUsers={this.state.isOpenUsers}
          onClose={e =>
            this.setState(prevState => ({ ...prevState, isOpenUsers: false }))
          }
        >
          {this.state.problemUsers.map(problemUser => {
            return (
              <div>
                <p style={{ textTransform: "capitalize" }}>
                  Name: {problemUser.full_name} || Email: {problemUser.email}
                </p>
              </div>
            );
          })}
        </UsersModal>
      </div>
    );
  }
}

const mapStateToProps = ({ problems, users }) => ({
  problems: problems.problems,
  users: users.users
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getAdminProblems, getUsers, updateAdminProblems, deleteAdminProblem }
  )(AdminDashboard)
);
