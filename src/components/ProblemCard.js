import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import health from "../static/images/cards/health.jpg";
import technology from "../static/images/cards/technology.jpg";
import fitness from "../static/images/cards/fitness1.jpg";
import personal from "../static/images/cards/personal.jpg";
import science from "../static/images/cards/science1.jpg";
import finance from "../static/images/cards/finance.jpg";
import Icon from '@material-ui/core/Icon';

import {
  ProblemCardLink,
  CallToActionBtn2
} from '../static/stylingComponents'

//import PropTypes from 'prop-types';

import { Link as RouterLink  } from "react-router-dom";

const MyCard = styled(Card)({
  
  boxShadow:'2px 4px silver'
});

const MyCardMedia = styled(CardMedia)({
  backgroundColor: "white",
  height:200
});

// const MyCategory = styled(Typography)({
//   fontWeight: "40px"
// });

const category = [
  { name: "health", value: health, icon:'local_hospital'},
  { name: "technology", value: technology, icon:'settings_remote' },
  { name: "fitness", value: fitness, icon:'directions_run' },
  { name: "personal", value: personal, icon:'person' },
  { name: "science", value: science, icon:'eco' },
  { name: "finance", value: finance, icon:'equalizer' }
];


const ProblemCard = props => {
  const problem = props.problems;

  function getImage(image_category) {
    const cat = category.find(
      item => item.name === image_category.toLowerCase()
    );
    return cat.value;
  }

  function getIcon(image_category) {
    const cat = category.find(
      item => item.name === image_category.toLowerCase()
    );
    return cat.icon;
  }

  return (
    <MyCard>
      <ProblemCardLink component={RouterLink} to={`/problem-details/${problem.id}`}>
        <MyCardMedia
          component="img"
          src={getImage(problem.problem_category)}
          title={problem.problem_title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" color="textSecondary" component="h2">
              {problem.problem_title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          
              <Icon>{getIcon(problem.problem_category)}</Icon>
              {problem.problem_category}
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {problem.problem_description.substring(0, 50) + "..."}
          </Typography>
        </CardContent>
      </ProblemCardLink>
        <CardActions>
          <CallToActionBtn2 size="medium" color="primary" href={`/problem-details/${problem.id}`} >
            Learn More
          </CallToActionBtn2>
        </CardActions>
    </MyCard>
  );
};

export default ProblemCard;
