import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import ProblemSubmission from "./ProblemSubmission";

import QuestionMark from "../static/images/marketing/question-mark.png";

const styles = {
  background: { backgroundColor: "#f6f7fb" },
  paper: {
    marginTop: "3rem",
    marginBottom: "3rem"
  },
  questionMark: {
    backgroundImage: `url(${QuestionMark})`,
    backgroundSize: "5rem 9.5rem",
    minHeight: "9.5rem"
  }
};

const ProblemSubmissionHolder = props => {
  const { classes } = props;
  return (
    <div>
      <Grid container justify="center" className={classes.background}>
        <Grid item xs={11} md={7}>
          <Paper square elevation={12} className={classes.paper}>
            <ProblemSubmission props={props} />
          </Paper>
        </Grid>
      </Grid>
      <div className={`${classes.questionMark} ${classes.background}`} />
    </div>
  );
};

ProblemSubmissionHolder.defaultProps = { classes: {} };

ProblemSubmissionHolder.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(ProblemSubmissionHolder);
