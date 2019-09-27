import React from "react";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import AdminProblemCard from "./AdminProblemCard";

const styles = { gridPadding: { padding: "1.5rem 3rem" } };

const AdminMiddle = props => {
  return (
    <Grid
      container
      justify="space-around"
      spacing={2}
      className={props.classes.gridPadding}
    >
      {props.problems.map(problem => (
        <Grid item key={problem.id} xs={12} sm={6} md={4}>
          <AdminProblemCard
            problem={problem}
            seeUsers={props.seeUsers}
            isOpenUsers={props.isOpenUsers}
            isApproved={props.isApproved}
            approveProblem={props.approveProblem}
            rejectProblem={props.rejectProblem}
            deleteProblem={props.deleteProblem}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(AdminMiddle);
