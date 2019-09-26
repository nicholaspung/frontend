import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/styles";

import DefaultImage from '../../static/images/cards/default-image.jpg';

const ImageSetter = require("../../static/stylingComponents/ImageSetter");

const styles = {
  problemCards: { boxShadow: "1.5px silver", borderRadius: "0px" },
  background: { backgroundColor: "#6c757c", width: "100%" },
  callToActionBtn2: {
    backgroundColor: "#bb1333",
    borderRadius: "0px",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#750808"
    }
  },
  noTextDecoration: { textDecoration: "none" },
  bolded: { fontWeight: "bold" },
  padded: { paddingBottom: "1rem", paddingRight: "1rem", paddingLeft: "1rem" },
  buttonPadding: { padding: "0.5rem" }
};

const ProblemCard = props => {
  const { problem, classes, signups } = props;

  return (
    <Card className={classes.problemCards} raised>
      <CardMedia
        className={classes.background}
        component="img"
        src={ImageSetter.staticImage(problem.problem_category) || DefaultImage}
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
                gutterBottom
                variant="h5"
                color="initial"
                component="h3"
              >
                {problem.problem_title.length > 20
                  ? problem.problem_title.substring(0, 20) + "..."
                  : problem.problem_title}
                :
              </Typography>
            </Tooltip>
            <Typography variant="body2" component="p" gutterBottom>
              {problem.problem_description > 40
                ? problem.problem_description.substring(0, 40) + "..."
                : problem.problem_description}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              Category: {problem.problem_category}
            </Typography>
          </CardContent>
        </Grid>
        <Grid container alignItems="center" direction="row-reverse">
          <Grid item xs={12} sm={6} className={classes.buttonPadding}>
            <Typography variant="body2" component="p" align="center">
              # of Sign Ups: <span className={classes.bolded}>{signups}</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Link
              to={`/problem-details/${problem.id}`}
              className={classes.noTextDecoration}
            >
              <Button
                className={classes.callToActionBtn2}
                size="medium"
                color="primary"
                fullWidth
              >
                Learn More
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

ProblemCard.defaultProps = {
  problem: {},
  classes: {},
  signups: 0
};

ProblemCard.propTypes = {
  problem: PropTypes.shape({
    id: PropTypes.number,
    problem_category: PropTypes.string,
    problem_title: PropTypes.string,
    problem_description: PropTypes.string
  }),
  classes: PropTypes.objectOf(PropTypes.string),
  signups: PropTypes.number
};

export default withStyles(styles)(ProblemCard);
