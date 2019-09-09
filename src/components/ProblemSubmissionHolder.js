import React from "react";
import ProblemSubmission from "./ProblemSubmission";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";

const styles = {
  background: { backgroundColor: "#f6f7fb" },
  paper: {
    marginTop: "3rem",
    marginBottom: "3rem"
  }
};

const ProblemSubmissionHolder = props => {
  const { classes } = props;
  return (
    <Grid container justify="center" className={classes.background}>
      <Grid item xs={11} md={7}>
        <Paper square elevation={12} className={classes.paper}>
          <ProblemSubmission props={props}/>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ProblemSubmissionHolder);
