import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/styles";

const ImageSetter = require("../static/stylingComponents/ImageSetter");

const styles = {
  problemCards: { boxShadow: "2px 3px silver", borderRadius: "0px" },
  backgroundWhite: { backgroundColor: "white", width: "100%" },
  callToActionBtn2: {
    backgroundColor: "#bb1333",
    borderRadius: "0px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#750808"
    }
  },
  bolded: { fontWeight: "bold" },
  padded: { paddingBottom: "1rem", paddingRight: "1rem", paddingLeft: "1rem" }
};

const ProblemCard = props => {
  const { problem, classes } = props;

  return (
    <Card className={classes.problemCards}>
      <CardMedia
        className={classes.backgroundWhite}
        component="img"
        src={ImageSetter.staticImage(problem.problem_category)}
        title={problem.problem_title}
      />
      <Grid
        container
        justify="space-between"
        alignItems="flex-end"
        className={classes.backgroundWhite}
      >
        <Grid item>
          <CardContent>
            <Tooltip title={problem.problem_title}>
              <Typography
                className={classes.bolded}
                noWrap
                gutterBottom
                variant="body2"
                color="initial"
                component="h3"
              >
                {problem.problem_title.length > 20
                  ? problem.problem_title.substring(0, 20) + "..."
                  : problem.problem_title}
              </Typography>
            </Tooltip>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {/* <Icon>{ImageSetter.staticIcon(problem.problem_category)}</Icon> */}
              {problem.problem_category}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item className={classes.padded}>
          <Button
            className={classes.callToActionBtn2}
            size="medium"
            color="primary"
            href={`/problem-details/${problem.id}`}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

ProblemCard.defaultProps = {
  problem: {},
  classes: {}
};

ProblemCard.propTypes = {
  problem: PropTypes.shape({
    id: PropTypes.number,
    problem_category: PropTypes.string,
    problem_title: PropTypes.string
  }),
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(ProblemCard);
