import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const styles = {
  secondaryBackground: { backgroundColor: "#f6f7fb" },
  bolding: { fontWeight: "bold" },
  paddedBottomSmall: { paddingBottom: "0.5rem" }
};

const HowItWorks = ({ classes, steps }) => {
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      className={steps.grey ? classes.secondaryBackground : null}
    >
      <Grid item xs={2}>
        {steps.icon}
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body2" component="p" className={classes.bolding}>
          {steps.step}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={classes.paddedBottomSmall}
        >
          {steps.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(HowItWorks);
