import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { getProblems } from '../actions';
import sweetPic from '../static/images/cards/reptile.jpg';

const MyCard = styled(Card)({
  maxWidth: 345
});

const problems = [
  { problem_title: 'Math', problem_description: 'Solve the universal equation' }
];

const MyCardMedia = styled(CardMedia)({
  height: 140
});

const ProblemCard = () => (
  // componentDidMount() {
  //   this.props.getProblems();
  // }
  <MyCard>
    <CardActionArea>
      <CardContent>
        {problems.map((unit) => (
          <MyCard>
            <MyCardMedia
              component="img"
              src={sweetPic}
              title="Contemplative Reptile"
            />
            <Typography gutterBottom variant="h5" component="h2">
              {unit.problem_title}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {unit.problem_description}
            </Typography>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </MyCard>
        ))}
      </CardContent>
    </CardActionArea>
  </MyCard>
);
// const mapStateToProps = (state) => ({
//   problems: state.problems
// });

// ProblemCard.defaultProps = {
//   problems: {},
//   getProblems() {}
// };

// ProblemCard.propTypes = {
//   problems: PropTypes.shape({
//     problem_title: PropTypes.string,
//     problem_description: PropTypes.string,
//     map: PropTypes.func
//   }),
//   getProblems: PropTypes.func
// };

export default ProblemCard;

// export default connect(
//   mapStateToProps,
//   { getProblems }
// )(ProblemCard);
