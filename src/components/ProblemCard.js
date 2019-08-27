import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import health from "../static/images/cards/health.jpg";
import technology from "../static/images/cards/technology.jpg";
import fitness from "../static/images/cards/fitness.png";
import personal from "../static/images/cards/personal.png";
import science from "../static/images/cards/science.jpg";
import finance from "../static/images/cards/finance.png";
//import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const MyCard = styled(Card)({
  width: 250,
  marginBottom: 25
});

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  width: "100%",
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px"
});

const MyCardMedia = styled(CardMedia)({
  width: '100%',
  height:'200px',
  backgroundColor:'white',
  padding:'10px'
});

const MyTypography = styled(Typography)({
  minHeight:'40px'
})

const MyCategory = styled(Typography)({
  fontWeight:'40px'
})

const category = [
  {name:'health', value:health},
  {name:'technology', value:technology},
  {name:'fitness', value:fitness},
  {name:'personal', value:personal},
  {name:'science', value:science},
  {name:'finance', value:finance}
];

const ProblemCard =  (props) => {
   const problem = props.problems;


   function getImage(image_category){
     const cat = category.find(item => item.name === image_category.toLowerCase());
     return cat.value

   }
 
    return (
      <MyCard>
        <MyCardMedia
          component="img"
          src={getImage(problem.problem_category)}
          title="Contemplative Reptile"
        />
        <MyButton>
          <Link to={`/problem-details/${problem.id}`}>{problem.problem_title}</Link>
        </MyButton>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {problem.problem_category}
          </Typography>
          <MyTypography variant="body2" color="textSecondary" component="p">
            {problem.problem_description.substring(0,50)+"..."}
          </MyTypography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            <Link to={`/problem-details/${problem.id}`}>Learn More</Link>
          </Button>
        </CardActions>
      </MyCard>
    );
};

export default ProblemCard;
