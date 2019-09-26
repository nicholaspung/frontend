import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import ProblemSubmission from "./ProblemSubmission";

const styles = {
  background: {
    backgroundColor: "#f6f7fb"
  }
};

const ProblemSubmissionHolder = props => {
  const { classes } = props;
  const [innerHeight, setInnerHeight] = useState(window.innerHeight - 8 * 16);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerHeight(window.innerHeight - 8 * 16);
    });
  }, []);

  return (
    // <div className={classes.minimumHeight}>
    <Grid
      container
      justify="center"
      alignContent="center"
      className={classes.background}
      style={{ minHeight: innerHeight }} // added here because only way to make style variable
    >
      <Grid item xs={11} md={7} className={classes.minimumHeight}>
        <Paper square elevation={12}>
          <ProblemSubmission props={props} />
        </Paper>
      </Grid>
    </Grid>
    // </div>
  );
};

ProblemSubmissionHolder.defaultProps = { classes: {} };

ProblemSubmissionHolder.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(ProblemSubmissionHolder);
