import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import { getProblems } from '../actions';

// import axios from 'axios';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  width: '100%',
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px'
});

const MyGrid = styled(Grid)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
});

const MyCard = styled(Card)({
  width: 400,
  marginBottom: 25
});

class ProblemDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProblems();
  }

  // changeSelected = (e) => {
  //       this.setState({ selected: e.target.value });
  //   }

  // myFiltered = () => {
  //   const { selected } = this.state;
  //   const filt = this.state.problems.filter((problems) => problems.problem_category === this.state.selected);
  //   if (filt.length === 0 || selected === 'All') {
  //       return this.state.problems;
  //     }
  //     return filt;
  // }

  render() {
    const allProblems = this.props.problems;
    console.log(allProblems);
    return (
      <div>
        <MyGrid>
          {
            allProblems.map((problem) => (
            <MyCard>
              <MyButton>
                <Link to={`/problem-details/${problem.id}`}>
                  {problem.problem_title}
                </Link>
              </MyButton>
              <CardHeader
                avatar={<Avatar aria-label="recipe">{problem.created_by}</Avatar>}
                action={(
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
)}
                title={problem.problem_category}
                subheader={problem.date_created}
              />
              <CardMedia
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {problem.problem_description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton aria-label="show more">
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </MyCard>
          ))}
        </MyGrid>
      </div>
    );
  }
}

const mapStateToProps = ({ problems, useStyles }) => ({ problems, useStyles });
export default connect(
  mapStateToProps,
  { getProblems }
)(ProblemDashboard);
