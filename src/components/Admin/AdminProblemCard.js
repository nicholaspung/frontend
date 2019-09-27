import React from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import DefaultImage from "../../static/images/cards/default-image.jpg";
const ImageSetter = require("../../static/stylingComponents/ImageSetter");

const styles = {
  green: { color: "green" },
  red: { color: "#a60202" },
  link: { color: "black", textDecoration: "none" },
  padding: { padding: "1.5rem 0.5rem" },
  paddingBottom: { paddingBottom: "1.5rem" },
  paddingTop: { paddingTop: "1.5rem" }
};

const AdminProblem = props => {
  const { classes, problem } = props;

  const deleteProblem = e => {
    props.deleteAdminProblem(problem.id);
  };

  return (
    <Card square>
      <Typography
        variant="h5"
        component="h1"
        align="center"
        className={classes.padding}
      >
        {problem.problem_title} || {problem.problem_category}
      </Typography>
      <Grid container alignItems="center" justify="space-around">
        <Grid item xs={12} lg={5}>
          <CardMedia
            component="img"
            src={
              ImageSetter.staticImage(problem.problem_category) || DefaultImage
            }
            title={problem.problem_title}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography
            variant="h5"
            component="h3"
            align="center"
            className={classes.paddingTop}
            gutterBottom
          >
            Status:
            {problem.isApproved ? (
              <span className={classes.green}> Approved</span>
            ) : (
              <span className={classes.red}> Not Approved</span>
            )}
          </Typography>
        </Grid>
      </Grid>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.paddingBottom}
        >
          {problem.problem_description}
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Button onClick={e => props.updateProblem(e, problem)}>
              Approve
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button onClick={e => props.updateProblem(e, problem)}>
              Reject
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button onClick={deleteProblem}>Delete</Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to={`/problems/${problem.id}`} className={classes.link}>
              <Button>Details</Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button onClick={e => props.seeUsers(e, problem.id)}>
              Signees
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(AdminProblem);
