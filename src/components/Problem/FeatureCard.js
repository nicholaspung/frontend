import React from "react";
import PropTypes from "prop-types";
import Icon from "@material-ui/core/Icon";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const ImageSetter = require("../../static/stylingComponents/ImageSetter");

const styles = {
  problemCards: { boxShadow: "1.5px silver", borderRadius: "0px" },
  bolded: { fontWeight: "bold" },
  featureCard: {
    padding: "1.25rem",
    textAlign: "center",
    width: "100%",
    background: "#bb1333",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#750808"
    }
  },
  noTextDecoration: { textDecoration: "none" }
};

const FeatureCard = props => {
  const { problem, classes } = props;

  return (
    <Link to={`/problems/${problem.id}`} className={classes.noTextDecoration}>
      <Card className={classes.problemCards}>
        <CardMedia
          component="img"
          src={ImageSetter.staticImage(problem.problem_category)}
          title={problem.problem_title}
        />
        <CardContent className={classes.featureCard}>
          <Icon>{ImageSetter.staticIcon(problem.problem_category)}</Icon>
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
        </CardContent>
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
