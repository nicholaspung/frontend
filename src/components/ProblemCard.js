import React from "react";
import {CardActions,  CardContent, Typography, Grid, Tooltip} from "@material-ui/core";
import {ProblemCards, ProblemCardMedia, CallToActionBtn2} from "../static/stylingComponents";


const ImageSetter = require("../static/stylingComponents/ImageSetter");

const ProblemCard = props => {
  const problem = props.problems;

  return (
    <ProblemCards>
      <ProblemCardMedia
        component="img"
        src={ImageSetter.staticImage(problem.problem_category)}
        title={problem.problem_title}
      />
      <Grid
        container
        justify="space-between"
        alignItems="flex-end"
        style={{ background: "white" }}
      >
        <CardContent>
          <Tooltip title={problem.problem_title}>
            <Typography
              style={{ padding: 0, margin: 0, fontWeight: "bold" }}
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
          <Typography
            style={{ padding: 0, margin: 0 }}
            variant="subtitle2"
            color="textSecondary"
            component="p"
          >
            {/* <Icon>{ImageSetter.staticIcon(problem.problem_category)}</Icon> */}
            {problem.problem_category}
          </Typography>
          {/* <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ height: 40 }}
          >
            {problem.problem_description.length > 50
              ? problem.problem_description.substring(0, 50) + "..."
              : problem.problem_description}
          </Typography> */}
        </CardContent>
        <CardActions style={{ background: "white" }}>
          <CallToActionBtn2
            size="medium"
            color="primary"
            href={`/problem-details/${problem.id}`}
          >
            Learn More
          </CallToActionBtn2>
        </CardActions>
      </Grid>
    </ProblemCards>
  );
};

export default ProblemCard;
