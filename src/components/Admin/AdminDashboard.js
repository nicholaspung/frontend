import React from "react";
import { withStyles } from "@material-ui/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";

import {
  getAdminProblems,
  updateAdminProblems,
  getUsers,
  deleteAdminProblem
} from "../../actions";

import AdminProblemList from "./AdminProblemList";
import UsersModal from "./UsersModal";
import RemoveRefWarning from "../RemoveRefWarning";

const styles = {
  background: { minHeight: window.innerHeight - 8 * 16 },
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

    if (!problem.isApproved) {
      this.props.updateAdminProblems(problem.id, !problem.isApproved);
      this.setState(prevState => ({
        ...prevState,
        isOpen: true,
        isApproved: true
      }));
    } else {
      this.props.updateAdminProblems(problem.id, !problem.isApproved);
      this.setState(prevState => ({
        ...prevState,
        isOpenR: true,
        isApproved: false
      }));
    }
  };

  seeUsers = (e, id) => {
    e.preventDefault();
    const problemUsers = this.props.users.filter(u => u.problem_id === id);
    this.setState(prevState => ({
      ...prevState,
      problemUsers,
      isOpenUsers: true
    }));
  };

  render() {
    return (
      <div className={this.props.classes.background}>
        <AdminProblemList
          updateProblem={this.updateProblem}
          removeProblem={this.removeProblem}
          problems={this.props.problems}
          seeUsers={this.seeUsers}
          isOpenUsers={this.state.isOpenUsers}
          deleteAdminProblem={this.props.deleteAdminProblem}
          isApproved={this.state.isApproved}
        />
        <Modal
          aria-labelledby="problem-approval-modal-title"
          aria-describedby="problem-approval-modal-description"
          open={this.state.isOpen}
          disableAutoFocus
          className={this.props.classes.modal}
          onClose={e =>
            this.setState(prevState => ({ ...prevState, isOpen: false }))
          }
        >
          <RemoveRefWarning>
            <Grid container justify="center">
              <Grid item xs={11} sm={7}>
                <Paper square>
                  <Typography
                    component="h4"
                    variant="h6"
                    className={this.props.classes.padding}
                  >
                    This problem has been successfully approved!
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </RemoveRefWarning>
        </Modal>
        <Modal
          aria-labelledby="problem-rejection-modal-title"
          aria-describedby="problem-rejection-modal-description"
          open={this.state.isOpenR}
          disableAutoFocus
          className={this.props.classes.modal}
          onClose={e =>
            this.setState(prevState => ({ ...prevState, isOpenR: false }))
          }
        >
          <RemoveRefWarning>
            <Grid container justify="center">
              <Grid item xs={11} sm={7}>
                <Paper square>
                  <Typography
                    component="h4"
                    variant="h6"
                    className={this.props.classes.padding}
                  >
                    This problem has been successfully rejected!
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </RemoveRefWarning>
        </Modal>

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
    { getAdminProblems, updateAdminProblems, getUsers, deleteAdminProblem }
  )(AdminDashboard)
);
