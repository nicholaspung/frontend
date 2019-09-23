import React from "react";
import PropTypes from "prop-types";
import {Grid, Icon} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/styles";
import {Link}from 'react-router-dom'

const ImageSetter = require("../static/stylingComponents/ImageSetter");

const styles = {
  problemCards: { boxShadow: "2px 3px silver", borderRadius: "0px" },
  backgroundWhite: { backgroundColor: "white", width: "100%" },
  callToActionBtn2: {
    backgroundColor: "#bb1333",
    borderRadius: "0px",
    color: "#ffffff"
  },
  bolded: { fontWeight: "bold" },
  padded: { paddingBottom: "1rem", paddingRight: "1rem", paddingLeft: "1rem" }
};

const FeatureCard = props => {
  const { problem, classes } = props;

  return (
      <Link to={`/problem-details/${problem.id}`}>
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
            <Grid container item>
            <CardContent style={{padding:5, textAlign:"center", width:'100%',background:'#bb1333', color:'#fff'}}>
                <Tooltip title={problem.problem_title}>
                <Typography
                    className={classes.bolded}
                    noWrap
                    gutterBottom
                    variant="body2"
                    color="initial"
                    component="h3"
                    style={{padding:5, justify:"center"}}
                >{ <Icon>{ImageSetter.staticIcon(problem.problem_category)}</Icon> }

                    {problem.problem_title.length > 20
                    ? problem.problem_title.substring(0, 20) + "..."
                    : problem.problem_title}
                </Typography>
                </Tooltip>
            </CardContent>
            </Grid>
        </Grid>
        </Card>
      </Link>
  );
};

FeatureCard.defaultProps = {
  problem: {},
  classes: {}
};

FeatureCard.propTypes = {
  problem: PropTypes.shape({
    id: PropTypes.number,
    problem_category: PropTypes.string,
    problem_title: PropTypes.string
  }),
  classes: PropTypes.objectOf(PropTypes.string)
};

export default withStyles(styles)(FeatureCard);
