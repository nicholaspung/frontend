import React from 'react';
import { connect } from 'react-redux';

// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

import { styled } from '@material-ui/styles';

import { getProblems } from '../actions';
import ProblemCard from './ProblemCard'



const MyGrid = styled(Grid)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop:50
});



class ProblemDashboard extends React.Component {
  
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
    return (
      <div>
        <MyGrid>
          {allProblems.map((problem) => (
            <ProblemCard key={problem.id} problems={problem} />
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
