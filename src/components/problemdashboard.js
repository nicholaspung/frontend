import React from 'react';
import { connect } from 'react-redux';
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
